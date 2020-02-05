const API_URL: &'static str = "https://api.github.com";

pub mod github_api {
  pub mod contents {
    pub fn get_contents(owner: &str, repo: &str) -> String {
      format!(
        "{URL}/repos/{owner}/{repo}/contents",
        URL = crate::github::API_URL,
        owner = owner,
        repo = repo
      )
    }
  }
}
