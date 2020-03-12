use crate::schema::repos;

#[derive(Debug, Queryable)]
pub struct Repo {
    pub id: Option<i32>,
    pub of: String,
    pub contributors: String,
}

#[derive(Insertable)]
#[table_name = "repos"]
pub struct NewRepo<'a> {
    pub of: &'a str,
    pub contributors: &'a str,
}
