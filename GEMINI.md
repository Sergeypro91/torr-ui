# Torr UI Project Analysis

This document provides a summary of the `torr-ui` project structure, dependencies, and key scripts based on the analysis of its `package.json` files.

## Project Overview

`torr-ui` is a monorepo managed with **npm workspaces**. It contains a set of related packages for building a React-based UI component library. The project is built using a modern toolchain, including **React 19**, **TypeScript**, **Vite**, and **Storybook**.

## Core Technologies & Tools

- **Package Manager**: npm (with workspaces)
- **Framework**: React 19
- **Language**: TypeScript
- **Build Tools**: Vite (for development), `tsup` (for package bundling)
- **Component Development**: Storybook
- **Styling**: Tailwind CSS, `class-variance-authority`, `clsx`, `tailwind-merge`
- **Code Quality**: BiomeJS (for linting and formatting)
- **Testing**: Vitest
- **Versioning & Release**: Changesets and Semantic Release

## Workspace Packages

The project is organized into four main packages located in the `packages/` directory:

### 1. `@torr-app/components`
- **Purpose**: The main React component library.
- **Dependencies**: Built on top of **Radix UI** primitives.
- **Peer Dependencies**: Requires `@torr-app/icons`, `@torr-app/utils`, `react`, and `react-dom`.

### 2. `@torr-app/icons`
- **Purpose**: Manages and bundles SVG icons.
- **Functionality**: Includes scripts to minify raw SVGs (`svg:minimize`) and build an SVG sprite (`sprite-icon:build`). It exports the generated sprite for use in the component library.

### 3. `@torr-app/styles`
- **Purpose**: Provides global CSS styles for the component library.
- **Output**: Exports a single `index.css` file.

### 4. `@torr-app/utils`
- **Purpose**: A utility library containing shared functions used across the other packages.

## Key `npm` Scripts (from root)

- `lint:all`: Runs format, lint, and TypeScript type checks across the entire project.
- `packages:build`: Builds all four packages in the correct dependency order.
- `packages:release`: Manages the release process by building all packages and publishing them using `changesets`.
- `storybook:dev`: Starts the Storybook development server for viewing and testing components.
- `vite:dev`: Starts the Vite development server for the main `torr-app` application.
