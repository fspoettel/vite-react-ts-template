# vite-react-ts-template

> lightly extended version of the official `react-ts` template.

Added:

- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)
- [jest](https://jestjs.io/)
- [github actions](https://github.com/features/actions) for linting and testing
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

## Preview

```sh
npm run preview
```

## Lint

```sh
npm run lint
```

## Format

```sh
npm run fmt
```

There is an optional [pre-commit](https://pre-commit.com/) hook to auto-format your code on commit. In order to use it, you need to install and activate it.

```sh
# (macos) install via brew
brew install pre-commit

# (any system) install via pip
pip3 install pre-commit

# activate the hook.
pre-commit install

# when updating prettier, update the hook
pre-commit autoupdate
```
