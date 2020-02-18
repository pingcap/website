pub mod rest_config {
  use reqwest::{header, Client};

  pub const PREFIX_V1: &'static str = "/api/v1";
  pub const USER_AGENT: &'static str = "PingCAPWebsite/0.1.0";

  pub fn github_client() -> Client {
    use header::{HeaderMap, ACCEPT, AUTHORIZATION};

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
}
