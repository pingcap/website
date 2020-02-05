#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use]
extern crate rocket;

mod blog;
mod github;
mod rest;

use rocket_contrib::json::Json;
use serde::Serialize;

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
        .mount(rest::rest_config::PREFIX_V1, routes![blog::blogs])
        .launch();
}
