# Contributing

Hi, thanks for taking an interest in contributing to the **TypeScript SDK** repository. We welcome any kind of contribution, from reporting issues or idea to submitting pull requests for bug fixes, improvements, new features, etc.

Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

## Core ideas

The repository primarily contains SDK packages in TypeScript generated from the Composable Commerce API reference.

## Repository structure

This repository is managed as a monorepo, meaning it contains multiple (sub)packages located in the [`packages`](./packages) directory.

```
packages/
  ...
```

### Development tools

At commercetools we use the following development tools:

#### Yarn

We use [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to manage dependencies between multiple packages.

#### Jest

We use [Jest](https://jestjs.io/) as the main framework for testing. Additionally, we take advantage of the Jest runners to run other tasks such as ESLint.

#### Prettier

We rely on [Prettier](https://prettier.io/) to consistently format our code.

#### TypeScript

We prefer to implement our UI components using [TypeScript](https://www.typescriptlang.org/). This has the benefit of provide packages with type declarations, thus a better developer experience, but also to have the codebase more maintainable and less error-prone.

#### Preconstruct

We rely on [Preconstruct](https://preconstruct.tools/) to build the packages.

#### Commitlint

Commit messages should follow a [conventional commit format](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional).

## Opening an Issue

In general, it's a good idea to open an issue first, no matter if it's a bug report, a new feature, etc. Doing so allows maintainers and other contributors to be aware of the context when an associated pull request is provided. It also gives a chance to provide early feedback and suggestions on what the pull request should focus on and what the expectations, avoiding unnecessary work during a pull request.

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a fantastic help. They should remain focused in scope and avoid containing unrelated commits.

If possible, please try to provide a [related issue first](#opening-an-issue), where the topic is discussed and agreed upon before starting to work on that. This is helpful for both you and the maintainers to be familiar with the changes beforehand.

## Getting started

1. Clone the repository.
2. Run `yarn` in the root folder to install the dependencies.

Some useful commands to work with the repository:

- `yarn test` and `yarn test --watch`
- `yarn typecheck`
- `yarn build`

## Adding changesets

Composable Commerce Typescript SDK uses [changesets](https://github.com/atlassian/changesets) to do versioning and creating changelogs.

As a contributor you need to add a changeset by running `yarn changeset`.
The command will prompt to select the packages that should be bumped, their associated semver bump types and some markdown which will be inserted into the changelogs.

When opening a Pull Request, a `changeset-bot` checks that the Pull Request contains a changeset. A changeset is **NOT required**, as things like documentation or other changes in the repository itself generally don't need a changeset.

## Releasing packages

Composable Commerce Typescript SDK uses [changesets](https://github.com/atlassian/changesets) to do versioning and publishing a release.

A [Changesets release GitHub Action](https://github.com/changesets/action) opens a `Version Packages` Pull Request whenever there are some changesets that have not been released yet.

When the `Version Packages` Pull Request gets merged, the Changesets release GitHub Action will automatically trigger the release.
