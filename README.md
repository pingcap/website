<p align="center">
  <img src="images/pingcap-icon.png" width="128 height="128" alt="PingCAP Logo" />
</p>
<h1 align="center">Website</h1>

<p align="center">The website of PingCAP. Powered by Gatsby ⚛️ and Rocket 🚀.</p>

## How to start

If you want to start to develop the PingCAP Website or you just want to contribute in one place.
The Gatsby.js [https://www.gatsbyjs.org/](https://www.gatsbyjs.org/) is something you have to know.
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
yarn && yarn start
```

if your want to development the server side:

```sh
# Make sure nightly used
rustup default nightly

cd server && cargo build

# Boot the rocket server
cargo run
```

### GitHub Outh2 token

It's needed to apply a token to develop with GitHub API.

For more details, view <https://developer.github.com/v3/#rate-limiting>

You must set the token as an env when you start some commands, for example:

```sh
GITHUB_AUTHORIZATION_TOKEN=token
```

If you are developing the rocket server, the server use `dotenv` to load a `.env` file.
So, create a `.env` file in the `server` folder and pass the `GITHUB_AUTHORIZATION_TOKEN=token` into it.

For frontend developing, some scripts will also need this env variable, for example:

```sh
GITHUB_AUTHORIZATION_TOKEN=token yarn download:blogs:dev
```

## Style guides

**_If you want make a PR, you should read this part carefully._**

As you can see, we use `husky` and `lint-staged` to make sure all commits follow the [prettier](https://prettier.io/) setting.

**Don't break the rule!**

The next need to be noticed is, we use [Bulma](https://bulma.io/) as common components.

So, for example, our common scss codes `_common.scss` follow the bulma modifiers style, like:

```scss
// Use in navbar and footer item
@mixin has-item-active {
  position: relative;
  color: $B4;

  &:hover {
    background: none;
    color: $B1;

    &:after {
      content: '';
      position: absolute;
      bottom: 1rem;
      left: 50%;
      width: 10px;
      height: 3px;
      background: $B1;
      transform: translateX(-50%);
    }
  }
}
```

You can view more details in [https://bulma.io/documentation/modifiers/](https://bulma.io/documentation/modifiers/)

**Also, Don't break the rule!**

# License

Currently no License.

Make with love 💙 by PingCAP FE.
