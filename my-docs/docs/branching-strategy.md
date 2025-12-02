---
sidebar_position: 3
title: Github Branching Strategy
---

# Branching Strategy

This project uses a simple and scalable branching model. The goal is to keep development fast, organized, and stable without unnecessary complexity. Every contributor should follow this workflow.

## Overview

We maintain three types of branches:

- **main** → production-ready, stable code  
- **staging** → pre-production testing  (not using this at the moment as there is no QA)
- **dev** → active development and integration branch  
- **feature branches** → short-lived branches created for each task or enhancement  

This structure supports both solo development and team collaboration as the project grows.

---

## main Branch

`main` represents the production-ready version of the project.  
Only merge into `main` when the feature is tested, stable, and ready for release.

### Rules for `main`:

- No direct commits  
- All changes must come through pull requests  
- Pull requests must be reviewed and approved  
- CI checks must succeed before merging  

This ensures that `main` always contains clean, deployable code.

---

## dev Branch

`dev` is the integration branch where active development happens.

All feature branches should merge into `dev` first.  
Once features are tested together and stable, `dev` is merged into `main`.

### Purpose of `dev`:

- Central place for combining ongoing work  
- CI can run against the current development state  
- Conflicts are resolved before reaching `main`

`dev` may change frequently, and that’s expected.

---

## Feature Branches

Each new task, bug fix, or enhancement should be developed in its own feature branch.

### Naming convention:

eg:
- feature/auth-flow
- feature/message-status
- feature/typing-indicator
- feature/emotion-ml-prototype
- feature/docs-add-setup-guide

### Workflow:

1. Branch from `dev`  
2. Implement the feature  
3. Commit changes normally  
4. Open a pull request targeting `dev`  
5. After review, merge into `dev`  

Feature branches should be short-lived and focused.

## Branch Protection Rules

### main (strict)
- Require pull requests  
- Block direct pushes  
- Require reviews  
- Require CI checks  
- Prevent force pushes  

### staging (strict)
- Require PRs  
- CI must pass before merging  
- No direct commits  

### dev (moderate)
- Direct commits allowed only for the admin
- PRs recommended for clarity  

### feature/*
- No restrictions  

### Example:

1. Build feature branches  
2. Do PR and admin merge into `dev` as they are completed  (do dev test)
3. When a release is ready, merge `dev` → `staging`  (we are not doing it now)
4. Test thoroughly in `staging` (not doing this as well)
5. Merge `dev` → `main` to ship the release  

This workflow keeps production stable while allowing fast iteration.


## Commit Message Convention

Use short, clear commit messages that follow this format:

```
type: short description
```

### Allowed Types

- **feat:** a new feature  
  - `feat: add message delivery status`

- **fix:** a bug fix  
  - `fix: correct login token issue`

- **docs:** documentation updates  
  - `docs: update setup guide`

- **refactor:** code cleanup or restructuring  
  - `refactor: simplify websocket handler`

- **style:** formatting only (no logic changes)  
  - `style: clean up spacing`

- **chore:** maintenance, dependencies, config  
  - `chore: update npm packages`

### Rules

- Keep it short and direct.  
- No capital letters at the start.  
- Don’t put long explanations.  
- Commit only one logical change at a time.

### Good Examples

```
feat: add profile editing screen
fix: resolve crash on app launch
docs: add commit convention section
```

### Bad Examples

```
update stuff
final fixes
changes made
```

This simple format keeps the project readable and consistent.
