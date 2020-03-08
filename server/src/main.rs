#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;
#[macro_use]
extern crate dotenv_codegen;
#[macro_use]
extern crate lazy_static;

use rocket_contrib::json::Json;
use serde::Serialize;

mod github;
mod google;
mod rest;

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
        .mount(rest::PREFIX_V1, routes![github::routes::tidb_contributors])
        .launch();
}
