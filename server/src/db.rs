use diesel::prelude::*;
use diesel::sqlite::SqliteConnection;

pub fn establish_connection() -> SqliteConnection {
    let database_url = dotenv!("DATABASE_URL");

    SqliteConnection::establish(&database_url).expect(&format!(
        "Error in (SqliteConnection::establish): Connecting to {}",
        database_url
    ))
}
