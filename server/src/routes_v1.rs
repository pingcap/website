use std::sync::Mutex;
use std::time::SystemTime;

use diesel::prelude::*;
use rocket_contrib::json::Json;

use crate::db;
use crate::github::{api, Contributor};
use crate::models::{NewRepo, Repo};
use crate::schema::repos;
use repos::dsl::*;

lazy_static! {
    pub static ref TI_DB_CONTRIBUTORS_LAST_REQUEST_TIME: Mutex<SystemTime> =
        Mutex::new(SystemTime::now());
    pub static ref TI_DB_COMMUNITY_CONTRIBUTORS_LAST_REQUEST_TIME: Mutex<SystemTime> =
        Mutex::new(SystemTime::now());
}

#[get("/tidb_contributors")]
pub fn tidb_contributors() -> Json<Vec<Contributor>> {
    let mut tidb_contributors_last_request_time =
        TI_DB_CONTRIBUTORS_LAST_REQUEST_TIME.lock().unwrap();

    let elapsed = match tidb_contributors_last_request_time.elapsed() {
        Ok(elapsed) => elapsed.as_secs(),
        Err(error) => {
            panic!(
                "Error in (tidb_contributors_last_request_time.elapsed()): {}",
                error
            );
        }
    };

    let connection = db::establish_connection();

    let tidb_repo = repos
        .filter(of.eq("pingcap/tidb"))
        .load::<Repo>(&connection)
        .expect("Error in (tidb_repo): Fail to load repo");

    if elapsed >= 60 * 60 * 24 || tidb_repo.len() == 0 {
        let contributors_from_http: Vec<Contributor> =
            api::repos::contributors("pingcap", "tidb", Some(100), true);
        let contributors_json_string = serde_json::to_string(&contributors_from_http).unwrap();

        let new_repo = NewRepo {
            of: "pingcap/tidb",
            contributors: &contributors_json_string,
        };

        diesel::replace_into(repos)
            .values(&new_repo)
            .execute(&connection)
            .expect("Error in (replace_into): Fail to replace new tidb repo");

        *tidb_contributors_last_request_time = SystemTime::now();

        return Json(contributors_from_http);
    } else {
        return Json(serde_json::from_str(&tidb_repo[0].contributors).unwrap());
    }
}

#[get("/tidb_community_contributors")]
pub fn tidb_community_contributors() -> Json<Vec<Contributor>> {
    let community_repos = [
        ("pingcap", "docs"),
        ("pingcap", "docs-cn"),
        ("pingcap", "parser"),
        ("pingcap", "pd"),
        ("pingcap", "tidb"),
        ("pingcap", "tidb-ansible"),
        ("pingcap", "tidb-bench"),
        ("pingcap", "tidb-binlog"),
        ("pingcap", "tidb-docker-compose"),
        ("pingcap", "tidb-operator"),
        ("pingcap", "tidb-tools"),
        ("pingcap", "tipb"),
        ("pingcap", "tispark"),
        ("tikv", "grpc-rs"),
        ("tikv", "tikv"),
    ];

    let mut tidb_community_contributors_last_request_time =
        TI_DB_COMMUNITY_CONTRIBUTORS_LAST_REQUEST_TIME
            .lock()
            .unwrap();

    let elapsed = match tidb_community_contributors_last_request_time.elapsed() {
        Ok(elapsed) => elapsed.as_secs(),
        Err(error) => {
            panic!(
                "Error in (tidb_community_contributors_last_request_time.elapsed()): {}",
                error
            );
        }
    };

    let connection = db::establish_connection();

    // Determine if the tikv repo is empty. This step is to prepare for the next if condition
    let tikv_repo = repos
        .filter(of.eq("tikv/tikv"))
        .load::<Repo>(&connection)
        .expect("Error in (tikv_repo): Fail to load repo");

    let mut all_contributors: Vec<Contributor> = vec![];

    if elapsed >= 60 * 60 * 24 || tikv_repo.len() == 0 {
        for repo in community_repos.iter() {
            let contributors_from_http: Vec<Contributor> =
                api::repos::contributors(repo.0, repo.1, Some(100), true);
            let contributors_json_string = serde_json::to_string(&contributors_from_http).unwrap();

            let new_repo = NewRepo {
                of: &format!("{}/{}", repo.0, repo.1),
                contributors: &contributors_json_string,
            };

            diesel::replace_into(repos)
                .values(&new_repo)
                .execute(&connection)
                .expect(&format!(
                    "Error in (replace_into): Fail to save new {} repo",
                    repo.1
                ));

            all_contributors.extend(contributors_from_http);
        }

        *tidb_community_contributors_last_request_time = SystemTime::now();
    } else {
        for repo in community_repos.iter() {
            let repo = repos
                .filter(of.eq(&format!("{}/{}", repo.0, repo.1)))
                .load::<Repo>(&connection)
                .expect(&format!(
                    "Error in ({}/{}): Fail to load repo",
                    repo.0, repo.1
                ));

            all_contributors
                .extend::<Vec<Contributor>>(serde_json::from_str(&repo[0].contributors).unwrap());
        }
    }

    all_contributors.sort_by(|a, b| a.login.cmp(&b.login));
    all_contributors.dedup_by(|a, b| a.login == b.login);
    Json(all_contributors)
}
