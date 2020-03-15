use std::sync::Mutex;

use header::{HeaderMap, ACCEPT, AUTHORIZATION};
use reqwest::{blocking, header, Client};

pub const PREFIX_V1: &str = "/api/v1";
const USER_AGENT: &str = "PingCAPWebsite/0.1.0";

lazy_static! {
    static ref GOOGLE_AUTHORIZATION_TOKEN: Mutex<String> = Mutex::new(String::new());
}

fn generate_github_client_headers() -> header::HeaderMap {
    let mut headers = HeaderMap::new();
    headers.insert(ACCEPT, "application/vnd.github.v3+json".parse().unwrap());
    headers.insert(
        AUTHORIZATION,
        dotenv!("GITHUB_AUTHORIZATION_TOKEN").parse().unwrap(),
    );

    headers
}

pub fn github_client() -> Client {
    Client::builder()
        .user_agent(USER_AGENT)
        .default_headers(generate_github_client_headers())
        .build()
        .unwrap()
}

pub fn github_blocking_client() -> blocking::Client {
    blocking::Client::builder()
        .user_agent(USER_AGENT)
        .default_headers(generate_github_client_headers())
        .build()
        .unwrap()
}

pub fn google_client() -> Client {
    let mut headers = HeaderMap::new();
    headers.insert(
        AUTHORIZATION,
        GOOGLE_AUTHORIZATION_TOKEN.lock().unwrap().parse().unwrap(),
    );

    let client = Client::builder()
        .user_agent(USER_AGENT)
        .default_headers(headers)
        .build()
        .unwrap();

    client
}
