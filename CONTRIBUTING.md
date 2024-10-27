# Contributing to the SRSTHS Website

Thank you for contributing to the SRSTHS website! To maintain a clean and organized codebase, please follow the guidelines below when making contributions.

## Table of Contents
1. [Branching Strategy](#branching-strategy)
2. [Commit Guidelines with Commitizen](#commit-guidelines-with-commitizen)
3. [Pull Request Process](#pull-request-process)
4. [Keeping `main` Clean](#keeping-main-clean)
5. [Code Review and Testing](#code-review-and-testing)

---

## Branching Strategy

Our project uses the following branches:
- **`main`**: The stable, production-ready branch. All changes here should be thoroughly tested, and the commit history should be concise and meaningful.
- **`develop`**: The integration branch where feature branches are merged after testing. It is stable but contains more frequent updates than `main`.
- **Feature Branches**: For each new feature, bug fix, or change, create a branch off `develop`:
  ```bash
  git checkout develop
  git pull origin develop
  git checkout -b feature/short-description
  ```

### Naming Conventions
Name feature branches descriptively, such as:
- `feature/user-authentication`
- `fix/login-bug`
- `docs/update-readme`

## Commit Guidelines with Commitizen

We use [Commitizen](https://github.com/commitizen/cz-cli) to ensure that commit messages follow the [Conventional Commits](https://www.conventionalcommits.org) format.

1. **Install Commitizen** if you haven't already:
   ```bash
   npm install -g commitizen
   ```

2. **Using Commitizen for Commits**: To create a commit, use:
   ```bash
   git cz
   ```
   This will prompt you to fill out a structured commit message with the appropriate type, scope, and description.

### Commit Message Format
Here are the main types to use with Commitizen:
- **feat**: A new feature (e.g., `feat: add user login`)
- **fix**: A bug fix (e.g., `fix: resolve login issue`)
- **docs**: Documentation changes only
- **style**: Code formatting, no functional changes
- **refactor**: Code restructuring, no functional changes
- **test**: Adding or updating tests
- **chore**: Routine tasks, like dependency updates

## Pull Request Process

### Creating a Pull Request
1. **From Feature Branches to `develop`**:
   - Push your branch to the repository:
     ```bash
     git push origin feature/branch-name
     ```
   - Open a Pull Request to `develop` with the following:
     - A clear title (e.g., "Add user login functionality")
     - A description summarizing changes, related issues, and any relevant testing information.
   
2. **From `develop` to `main`**:
   - When `develop` is ready to merge into `main` (typically for releases), create a pull request from `develop` to `main`.
   - Use the `--no-ff` flag when merging to ensure a merge commit is created, preserving the commit history from `develop`.

### Review and Approval
- All PRs to `main` require at least one review.
- Ensure that all status checks pass before merging.

### Merging
- **Develop Branch**: Use regular merges to integrate feature branches.
- **Main Branch**: Use the `--no-ff` flag for merging PRs to `main` to keep a detailed history:
  ```bash
  git merge --no-ff develop
  ```

## Keeping `main` Clean

To maintain a clean history in `main`, please follow these practices:
- **Do not commit directly to `main`**.
- Use **`--no-ff` merges** for all PRs to `main` to retain branch context in history.
- Regularly pull updates from `develop` to ensure your branch has the latest changes before creating a PR.

## Code Review and Testing

- **Self-Review**: Before requesting a review, test your changes and ensure code style consistency.
- **Automated Tests**: All tests must pass for changes to be merged. If you’re adding a feature, please include tests to verify functionality.
- **Code Style**: Follow project conventions for formatting and style. Run linters and formatters as necessary.

Thank you for following these guidelines and contributing to the SRSTHS website! This approach keeps our codebase stable, efficient, and easy to maintain. Happy coding! 🎉

