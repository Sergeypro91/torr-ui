![Torr UI-kit][logo]
# [Storybook Torr UI-kit][page]

[TOC]
___

## Introduction

The libraries where created to standardize the development of the `Torr` application.

Libraries consist of several sub-packages / workspaces:
- `@torr-ui/components`
- `@torr-ui/icons`
- `@torr-ui/styles`
- `@torr-ui/utils`

Libraries use `Yarn` as project manager.
___

## Installation

> Be careful!
> At the time of removing `corepack` from `Node.js`, you will need to install it manually.

```bash
#1. Install `Yarn`
npm install -g yarn

#2. Enable corepack
corepack enable

#3. Install dependencies
yarn install
```
___

## Development

```bash
# To run Storybook:
yarn storybook
```

```bash
# Linting & type checking the codebase:
yarn lint:all
```

```bash
# Generate SVGR icon components:
yarn generate-icons
```

```bash
# Run storybook dev server:
yarn storybook
```
___

## Deployment
The deployment consists of several parts:
* Package versioning
* Release packages
* Deploy Storybook to GitHub pages

### Package versioning
Package versioning handling by [`@changesets/cli`][changesets]

```bash
yarn bump-version
```

### Release packages
For releasing packages in `NPM`, responsible `GitHub Actions`:
* [`/.github/workflows/main.yml`][ci-lint] - lint codebase
* [`/.github/workflows/publish.yml`][ci-publish] - push new version to `NPM`

### Deploy Storybook to GitHub Pages
For deployment Storybook to `GitHub Pagase`, responsible `GitHub Actions`:
* [`/.github/workflows/deploy.story.yml`][ci-deploy-page] - lint codebase

[logo]: https://raw.githubusercontent.com/Sergeypro91/torr-ui/dd2a94d001c9e835c7ecfffcb0686ed727f5df30/public/torr-icon.svg "Storybook Torr UI-kit logo"
[page]: https://sergeypro91.github.io/torr-ui/?path=/docs/components-button--docs "Storybook page"
[changesets]: https://github.com/changesets/changesets/tree/main#readme "Changesets documentation"
[ci-lint]: https://github.com/Sergeypro91/torr-ui/blob/main/.github/workflows/main.yml "Linting workflow"
[ci-publish]: https://github.com/Sergeypro91/torr-ui/blob/main/.github/workflows/publish.yml "Publish workflow"
[ci-deploy-page]: https://github.com/Sergeypro91/torr-ui/blob/main/.github/workflows/deploy.story.yml "Deploy Storybook to GitHub Pages"
