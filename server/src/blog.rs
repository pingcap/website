use super::github::github_api;
use super::rest::rest_config::client;
use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Blog {
  name: String,
}

#[tokio::main]
async fn get_blogs() -> Vec<Blog> {
  let client = client();
  let url = github_api::contents::get_contents("pingcap", "blog");
  let resp = client
    .get(&url)
    .send()
    .await
    .unwrap()
    .json::<Vec<Blog>>()
    .await
    .unwrap();

  resp
    .iter()
    .filter(|b| b.name.ends_with(".md"))
    .filter(|b| b.name != "README.md")
    .cloned()
    .collect::<Vec<Blog>>()
}

#[get("/blogs")]
pub fn blogs() -> Json<Vec<Blog>> {
  let blogs = get_blogs();

  Json(blogs)
}
