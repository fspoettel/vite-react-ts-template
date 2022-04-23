# vite-react-ts-template

> extended version of [vite](https://vitejs.dev/)'s official `react-ts` template.

additional features:

- [eslint](https://eslint.org/) for linting
- [jest](https://jestjs.io/) + [testing-library](https://testing-library.com/) for testing
- [prettier](https://prettier.io/) + [pre-commit](https://pre-commit.com/) for code formatting
- [github actions](https://github.com/features/actions) for continuous integration
- [browserslist](https://github.com/browserslist/browserslist) + [autoprefixer](https://github.com/postcss/autoprefixer)

## Install

```sh
# install dependencies
npm i
```

## Develop

```sh
npm run dev
```

## Build

```sh
npm run build
```

## Test

```sh
npm test
```

## Lint

```sh
npm run lint
```

## Format

```sh
npm run fmt
```

There is an optional [pre-commit](https://pre-commit.com/) hook to format code on commit. You need to install and activate it in order to use it.

```sh
# (macos) install via brew.
brew install pre-commit
# (any system) install via python's pip.
pip3 install pre-commit

# activate the hook.
pre-commit install

# when updating prettier, update the hook.
pre-commit autoupdate
```

This template uses [pre-commit](https://pre-commit.com/) over [lint-staged](https://github.com/okonet/lint-staged) due to the author's familiarity with it and its great support for other programming languages.

## Preview

Serves the content of `./dist` over a local http server.

```sh
npm run preview
```
