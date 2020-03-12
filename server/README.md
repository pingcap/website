# server

The rocket server of PingCAP website.

## Env configurations

You must create a `.env` file to develop. The `.env` file needs these variables:

```sh
# Optional
GITHUB_AUTHORIZATION_TOKEN=token

# SQLite3
DATABASE_URL=./rocket.db
```

## Get started

You need to have [sqlite3](https://www.sqlite.org/index.html) installed.

Then install `diesel_cli` for migrations:

```sh
cargo install diesel_cli
```

Run migrations:

```sh
diesel migration run
```

Redo:

```sh
diesel migration redo
```

Check:

```sh
cargo check
```

Run server:

```sh
cargo run
```

## Authors

Made with love 💙 by PingCAP FE.
