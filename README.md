<p align="center">
  <img src="images/pingcap-icon.png" width="128" alt="PingCAP Logo" />
</p>
<h1 align="center">Website</h1>

<p align="center">The website of PingCAP. Powered by Gatsby ⚛️ and Rocket 🚀.</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d2f80606-1fd8-4f26-938d-65f8cad079b2/deploy-status)](https://app.netlify.com/sites/pingcap-en-preview/deploys)

## How to start

If you want to start to develop the PingCAP Website or you just want to contribute in one place.
The Gatsby.js [https://gatsbyjs.org](https://gatsbyjs.org) is something you have to know.
Because of PingCAP Website's development is highly dependent on Gatsby.js.

Also, in order to build a flexible site, a server is essential.

We use [Rocket](https://rocket.rs/) to build our restful APIs. So, [Rust](https://www.rust-lang.org/) is also
the main tech in our development.

Make sure [node](https://nodejs.org/en/) and [rustup](https://rustup.rs/) is installed. This is all we needed first.

Check it:

```sh
node -v
# v13.7.0

rustup -V
# rustup 1.21.1 (7832b2ebe 2019-12-20)
```

Also, we recommand you use [yarn](https://classic.yarnpkg.com/en/) as package manager, check it:

```sh
yarn -v
# 1.21.1
```

All done.~

## How to development

Into project, run:

```sh
# install dependencies
yarn

# You'll need to download blog markdowns before start to dev
GITHUB_AUTHORIZATION_TOKEN=token yarn download:blogs:prod

# start gatsby
yarn start
```

if your want to development the server side:

```sh
# Make sure nightly used
rustup default nightly

cd server && cargo build

# Boot the rocket server
cargo run

# Check your code
cargo check
```

### GitHub Outh2 token

Because of most of our text data stored in GitHub. So, It's needed to apply a GitHub API token in development.

For more details, view <https://developer.github.com/v3/#rate-limiting>

You must set the token as an env when you start some commands, defined as:

```sh
GITHUB_AUTHORIZATION_TOKEN=token
```

If you are developing the rocket server, it use [dotenv](https://github.com/dotenv-rs/dotenv) to load a `.env` file.
First, create a `.env` file in the `server` folder and pass the `GITHUB_AUTHORIZATION_TOKEN=token` into it.
Then you can read it by using `dotenv!("GITHUB_AUTHORIZATION_TOKEN")`.

**For detailed configuration of rocket server, view: [server README](./server/README.md)**

For frontend developing, some scripts will also need this env variable, for example:

```sh
GITHUB_AUTHORIZATION_TOKEN=token yarn download:blogs:prod
```

## Style guides

**_If you want make a PR, you should read this part carefully._**

We use [husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) to make sure all commits follow the [prettier](https://prettier.io/) setting.

**Don't break the rule!**

The next need to be noticed is, we use [Bulma](https://bulma.io/) as common components.

So, for example, our common scss codes `_common.scss` follow the bulma modifiers style, like:

```scss
// Use in navbar and footer item
@mixin has-item-active($bottom: false) {
  position: relative;
  color: $B4;

  &:hover {
    background: none;
    color: $primary;

    @if type-of($bottom) == number {
      &:after {
        content: '';
        position: absolute;
        bottom: $bottom;
        left: 50%;
        width: 20px;
        height: 3px;
        background: $primary;
        transform: translateX(-50%);
      }
    }
  }
}
```

You can view more details in [https://bulma.io/documentation/modifiers/](https://bulma.io/documentation/modifiers/)

**Also, don't break the rule!**

## Authors

PingCAP FE
