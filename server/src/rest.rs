pub mod rest_config {
  use header::{HeaderMap, ACCEPT, AUTHORIZATION};
  use reqwest::{header, Client};
  use std::sync::Mutex;

  lazy_static! {
    static ref GOOGLE_AUTHORIZATION_TOKEN: Mutex<String> = Mutex::new("".to_string());
  }

  pub const PREFIX_V1: &str = "/api/v1";
  pub const USER_AGENT: &str = "PingCAPWebsite/0.1.0";

  pub fn github_client() -> Client {
    let mut headers = HeaderMap::new();
    headers.insert(ACCEPT, "application/vnd.github.v3+json".parse().unwrap());
    headers.insert(
      AUTHORIZATION,
      dotenv!("GITHUB_AUTHORIZATION_TOKEN").parse().unwrap(),
    );

    let client = Client::builder()
      .user_agent(USER_AGENT)
      .default_headers(headers)
      .build()
      .unwrap();

    client
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
}
