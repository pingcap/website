#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate dotenv_codegen;
#[macro_use]
extern crate lazy_static;
#[macro_use]
extern crate diesel;

use rocket_contrib::json::Json;
use serde::Serialize;

mod db;
mod github;
mod google;
mod models;
mod rest;
mod routes_v1;
mod schema;

#[derive(Serialize)]
struct IndexJson {
    name: String,
    status: i32,
}

#[get("/")]
fn index() -> Json<IndexJson> {
    Json(IndexJson {
        name: String::from("PingCAP Website Rocket Server"),
        status: 200,
    })
}

fn main() {
    rocket::ignite()
        .mount("/", routes![index])
        .mount(
            rest::PREFIX_V1,
            routes![
                routes_v1::tidb_contributors,
                routes_v1::tidb_community_contributors
            ],
        )
        .launch();
}
