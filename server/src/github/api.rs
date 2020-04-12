use crate::rest::http_client::github_blocking_client;

const API_URL: &str = "https://api.github.com";

pub mod repos {
    use crate::github::Contributor;

    pub fn contributors(
        owner: &str,
        repo: &str,
        per_page: Option<u8>,
        get_all: bool,
    ) -> Vec<Contributor> {
        let client = super::github_blocking_client();
        let per_page = per_page.unwrap_or(30);
        let url = format!(
            "{URL}/repos/{owner}/{repo}/contributors?per_page={per_page}",
            URL = super::API_URL,
            owner = owner,
            repo = repo,
            per_page = per_page
        );
        let mut contributors: Vec<Contributor> = vec![];

        fn get_contributors(
            client: reqwest::blocking::Client,
            url: &str,
            result: &mut Vec<Contributor>,
            get_all: bool,
        ) {
            let resp = client.get(url).send().unwrap();

            if get_all {
                let headers = resp.headers();

                if headers.contains_key("link") {
                    let link_header = headers.get("link").unwrap().to_str().unwrap();
                    let link_parsed = parse_link_header::parse(link_header).unwrap();

                    if link_parsed.contains_key(&Some("next".to_string())) {
                        get_contributors(
                            client,
                            &link_parsed[&Some("next".to_string())].raw_uri,
                            result,
                            get_all,
                        );
                    }
                }
            }

            let data = resp.json::<Vec<Contributor>>().unwrap();

            result.extend(data);
        }

        get_contributors(client, &url, &mut contributors, get_all);

        contributors
    }
}
