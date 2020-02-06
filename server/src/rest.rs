pub mod rest_config {
  use reqwest::{header, Client};

  pub const PREFIX_V1: &'static str = "/api/v1";
  pub const USER_AGENT: &'static str = "PingCAPWebsite";

  pub fn client() -> Client {
    use header::{HeaderMap, ACCEPT};

    let mut headers = HeaderMap::new();
    headers.insert(ACCEPT, "application/vnd.github.v3+json".parse().unwrap());

    let client = Client::builder()
      .user_agent(USER_AGENT)
      .default_headers(headers)
      .build()
      .unwrap();

    client
  }
}
