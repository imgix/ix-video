# Contributing Guide

Thank you for investing your time in contributing to this project! Please take a moment to review this document in order to streamline the contribution process for you and any reviewers involved.

Read our [Code of Conduct](./CODE_OF_CONDUCT.md) to keep our community approachable and respectable.

In this guide you will get an overview of the contribution workflow from opening an issue, creating a PR, reviewing, and merging the PR.

## New contributor guide

To get an overview of the project, read the [README](README.md). Here are some resources to help you get started with open source contributions:

- [Finding ways to contribute to open source on GitHub](https://docs.github.com/en/get-started/exploring-projects-on-github/finding-ways-to-contribute-to-open-source-on-github)
- [Set up Git](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow)
- [Collaborating with pull requests](https://docs.github.com/en/github/collaborating-with-pull-requests)

## Opening a Pull Request

_To help the project's maintainers and community quickly understand the nature of your pull request, please be sure to do the following:_

1. Include a descriptive Pull Request title.
2. Provide a detailed description that explains the nature of the change(s) introduced. This is not only helpful for your reviewer, but also for future users who may need to revisit your Pull Request for context purposes. Screenshots/video captures are helpful here!
3. Make incremental, modular changes, with a clean commit history. This helps reviewers understand your contribution more easily and maintain project quality.

### Checklist

Check to see that you have completed each of the following before requesting a review of your Pull Request:

- [ ] All existing unit tests are still passing (if applicable)
- [ ] Add new passing unit tests to cover the code introduced by your PR
- [ ] Update the README
- [ ] Update or add any necessary API documentation
- [ ] All commits in the branch adhere to the [conventional commit](#conventional-commit-spec) format: e.g. `fix: bug #issue-number`

## Conventional Commit Spec

Commits should be in the format `<type>(<scope>): <description>`. This allows our team to leverage tooling for automatic releases and changelog generation. An example of a commit in this format might be: `docs(readme): fix typo in documentation`

`type` can be any of the follow:

- `feat`: a feature, or breaking change
- `fix`: a bug-fix
- `test`: Adding missing tests or correcting existing tests
- `docs`: documentation only changes (readme, changelog, contributing guide)
- `refactor`: a code change that neither fixes a bug nor adds a feature
- `chore`: reoccurring tasks for project maintainability (example scopes: release, deps)
- `config`: changes to tooling configurations used in the project
- `build`: changes that affect the build system or external dependencies (example scopes: npm, bundler, gradle)
- `ci`: changes to CI configuration files and scripts (example scopes: travis)
- `perf`: a code change that improves performance
- `style`: changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

`scope` is optional, and can be anything.
`description` should be a short description of the change, written in the imperative-mood.

### Example workflow

Follow this process if you'd like your work considered for inclusion in the
project:

1. [Fork](http://help.github.com/fork-a-repo/) the project, clone your fork,
   and configure the remotes:

   ```bash
   # Clone your fork of the repo into the current directory
   git clone git@github.com:<YOUR_USERNAME>/ix-video.git
   # Navigate to the newly cloned directory
   cd ix-video
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/imgix/ix-video
   ```

2. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout <dev-branch>
   git pull upstream <dev-branch>
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Use Git's
   [interactive rebase](https://help.github.com/articles/interactive-rebase)
   feature to tidy up your commits before making them public.

5. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull [--rebase] upstream <dev-branch>
   ```

6. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

7. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/)
   with a clear title and description.

**IMPORTANT**: By submitting a patch, you agree to allow the project owner to
license your work under the same license as that used by the project.

# Development

## Setup

Install dependencies:

```bash
npm i
```

## Build

This repo uses the TypeScript compiler to produce JavaScript that runs in modern browsers.

To build the JavaScript version of your component:

```bash
npm run build
```

To watch files and rebuild when the files are modified, run the following command in a separate shell:

```bash
npm run build:watch
```

Both the TypeScript compiler and lit-analyzer are configured to be very strict. You may want to change `tsconfig.json` to make them less strict.

## Testing

This repo uses Cypress to run e2e tests.

Tests can be run with the `test` script, which will run your tests against Lit's development mode (with more verbose errors):

```bash
npm run test
```

For local e2e testing during development, you can run `npm run dev` and `npm run cypress:open` to start the development server and open the Cypress UI.

Alternatively the `test:prod` command will run your tests in Lit's production mode.

## Dev Server

This repo uses Vite to bundle and serve the component files for local development.

To run the dev server and open the project in a new browser tab:

```bash
npm run dev
```

There is a development HTML file located at `/dev/index.html` that you can view at http://localhost:3000/dev/index.html. Note that this command will serve your code using Lit's development mode (with more verbose errors). To serve your code against Lit's production mode, use `npm run dev:prod`.

## Editing

If you use VS Code, we highly recommend the [lit-plugin extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin), which enables some extremely useful features for lit-html templates:

- Syntax highlighting
- Type-checking
- Code completion
- Hover-over docs
- Jump to definition
- Linting
- Quick Fixes

The project is setup to recommend lit-plugin to VS Code users if they don't already have it installed.

## Linting

Linting of TypeScript files is provided by [ESLint](eslint.org) and [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint). In addition, [lit-analyzer](https://www.npmjs.com/package/lit-analyzer) is used to type-check and lint lit-html templates with the same engine and rules as lit-plugin.

The rules are mostly the recommended rules from each project, but some have been turned off to make LitElement usage easier. The recommended rules are pretty strict, so you may want to relax them by editing `.eslintrc.json` and `tsconfig.json`.

To lint the project run:

```bash
npm run lint
```

## Formatting

[Prettier](https://prettier.io/) is used for code formatting. It has been pre-configured according to the Lit's style. You can change this in `.prettierrc.json`.

Prettier has not been configured to run when committing files, but this can be added with Husky and and `pretty-quick`. See the [prettier.io](https://prettier.io/) site for instructions.

## Bundling and minification

This project uses Rollup to bundle and minify the TypeScript component files
into a single file in `dist/`. THe rollup config is located at
`rollup.config.js`.
