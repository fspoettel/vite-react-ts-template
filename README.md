# vite-react-ts-template

> extended version of [vite](https://vitejs.dev/)'s official `react-ts` template.

additional features:

- [biome](https://biomejs.dev/) for formatting and linting.
- [vitest](https://vitest.dev/) + [testing-library](https://testing-library.com/) for testing.
- [lefthook](https://github.com/evilmartians/lefthook) hook for pre-commit checks.
- [github actions](https://github.com/features/actions) for continuous integration.

## Install

```sh
# install dependencies.
npm i

# (optional) install pre-commit hook.
npm run precommit:configure
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

# run vitest in watch mode.
npm run test:watch

# collect coverage.
npm run test:coverage
```

## Lint

```sh
npm run lint
```

## Format

```sh
npm run fmt
```

## Preview

Serves the content of `./dist` over a local http server.

```sh
npm run preview
```
