# Contributing to Relay Helper

First off, thank you for considering contributing to Relay! It's people like you that make Relay the best tool for local AI and remote infrastructure management.

---

### TL;DR
1. **Fork** the repo and create your branch from `main`.
2. **Attach** your local code to your Relay Engine using `relay attach`.
3. **Commit** using conventional messages (e.g., `feat: add disk check to doctor`).
4. **Submit** a PR and wait for the "Bridge Approval".

---

## How to Contribute

We welcome contributions in the following areas:
- **CLI Tools**: New commands for the `relay` CLI.
- **Server Endpoints**: New API routes to expose system capability to mobile.
- **Bug Fixes**: Improving the stability of the bridge.
- **Documentation**: Improving this guide or the README.

## Developer Documentation

To aid in your development process, please refer to our internal guides:

- **[Internal Architecture](./docs/index.md)**: Details on CLI logic, server structure, and the logic-engine bridge.
- **[API Usage Guide](./usage/index.md)**: A categorized guide for **Clips** and **SDK** developers on how to interact with the Helper API.
- **[CLI Reference](./docs/cli/help.md)**: Documentation for available commands and decentralized metadata.

## Local Development

To test your changes, you must "bridge" this logic into your existing Relay installation:

1. **Install dependencies**: `npm install`
2. **Start Dev Mode**: Run `relay attach` in the root of this repo.
3. **Verify**: Your Relay binary will now use your local code. Run `relay doctor` to see it in action.

## Pull Request Guidelines

### 1. Branching
Create a feature branch for your work:
`git checkout -b feat/your-feature-name` or `git checkout -b fix/bug-description`

### 2. Commit & PR Titles
We use [Conventional Commits](https://www.conventionalcommits.org/). Please title your PRs accordingly:
- `feat: ...` for a new feature.
- `fix: ...` for a bug fix.
- `docs: ...` for documentation changes.
- `perf: ...` for performance improvements.
- `refactor: ...` for code cleanup.

### 3. Submission Process
- **Small PRs preferred**: Keep your changes focused. 
- **Description**: Explain *why* the change is necessary and *what* it accomplishes.
- **Testing**: Mention that you've verified the change using `relay attach`.

## License
By contributing to this repository, you agree that your contributions will be licensed under the GNU Affero General Public License v3.0 (AGPL-3.0).
