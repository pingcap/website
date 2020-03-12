use std::sync::Mutex;
use std::time::SystemTime;

use diesel::prelude::*;
use rocket_contrib::json::Json;

use crate::db::establish_connection;
use crate::github::{api, ContributorJson};
use crate::models::{NewRepo, Repo};
use crate::schema::repos;
use repos::dsl::*;

lazy_static! {
    pub static ref TI_DB_CONTRIBUTORS_LAST_REQUEST_TIME: Mutex<SystemTime> =
        Mutex::new(SystemTime::now());
}

#[get("/tidb_contributors")]
pub fn tidb_contributors() -> Json<Vec<ContributorJson>> {
    let mut tidb_contributors_last_request_time =
        TI_DB_CONTRIBUTORS_LAST_REQUEST_TIME.lock().unwrap();

    let now = SystemTime::now();
    let duration = now
        .duration_since(*tidb_contributors_last_request_time)
        .expect("Error in (TI_DB_CONTRIBUTORS_LAST_REQUEST): Clock may have gone backwards");
    let elapsed = duration.as_secs();

    let connection = establish_connection();

    let tidb_repo = repos
        .filter(of.eq("tidb"))
        .load::<Repo>(&connection)
        .expect("Error in (tidb_repo): Fail to load repo");
    let tidb_repo_len = tidb_repo.len();

    if elapsed >= 60 * 60 * 24 || tidb_repo_len == 0 {
        let contributors_from_http: Vec<ContributorJson> =
            api::repos::contributors("pingcap", "tidb", Some(100), true);
        let contributors_json_string = serde_json::to_string(&contributors_from_http).unwrap();

        if tidb_repo_len == 0 {
            let new_repo = NewRepo {
                of: "tidb",
                contributors: &contributors_json_string,
            };

            diesel::insert_into(repos::table)
                .values(&new_repo)
                .execute(&connection)
                .expect("Error in (insert new tidb repo): Fail to save new tidb repo");
        } else {
            diesel::update(repos.filter(of.eq("tidb")))
                .set(contributors.eq(contributors_json_string))
                .execute(&connection)
                .expect("Error in (update tidb repo): Fail to update tidb repo");
        }

        *tidb_contributors_last_request_time = SystemTime::now();

        return Json(contributors_from_http);
    } else {
        return Json(serde_json::from_str(&tidb_repo[0].contributors).unwrap());
    }
}
