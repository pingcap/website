use super::github::github_api;
use super::rest::rest_config::client;
use rocket_contrib::json::Json;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug)]
pub struct Blog {
  name: String,
}

#[derive(Serialize, Deserialize, Debug)]
pub struct RawBlog {
  name: String,
  content: String,
  encoding: String,
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

#[tokio::main]
async fn get_raw_blog(path: &str) -> RawBlog {
  let client = client();
  let url = github_api::contents::get_content("pingcap", "blog", path);
  let resp = client
    .get(&url)
    .send()
    .await
    .unwrap()
    .json::<RawBlog>()
    .await
    .unwrap();

  resp
}

#[get("/blogs")]
pub fn blogs() -> Json<Vec<Blog>> {
  let blogs = get_blogs();

  Json(blogs)
}

#[get("/blogs/<path>")]
pub fn blog(path: String) -> Json<RawBlog> {
  let mut raw_blog = get_raw_blog(&path);
  raw_blog.name = path;

  Json(raw_blog)
}
