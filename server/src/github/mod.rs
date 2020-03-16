use serde::{Deserialize, Serialize};

pub mod api;

#[derive(Serialize, Deserialize)]
pub struct Contributor {
    pub login: String,
    avatar_url: String,
    contributions: u32,
}
