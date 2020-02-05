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

    pub fn get_content(owner: &str, repo: &str, path: &str) -> String {
      format!(
        "{URL}/repos/{owner}/{repo}/contents/{path}",
        URL = crate::github::API_URL,
        owner = owner,
        repo = repo,
        path = path
      )
    }
  }
}
