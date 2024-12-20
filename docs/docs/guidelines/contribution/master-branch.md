---
title: Master Branch Protection
sidebar_position: 0
---

# Master Branch Protection

The `master` branch is the primary branch in a Git repository and typically represents the production environment. To ensure the stability and quality of the codebase, it is crucial to protect the `master` branch and prevent direct commits to it. This document outlines the reasons for protecting the `master` branch and provides best practices for managing changes in the repository.

## Why Protect the `master` Branch?

The `master` branch is often used to represent the production-ready code of the repository. Protecting the `master` branch helps ensure that the codebase remains stable, deployable, and free of errors. Enforcing a policy that requires all changes to be submitted through Pull Requests (PRs) allows you to maintain the quality and integrity of the code while avoiding disruptions in the production environment.

## Workflow in this Repository

In this repository, the `master` branch is protected, and direct commits are not allowed. All changes must be submitted via Pull Requests (PRs) to ensure the stability and deployability of the codebase at all times. The following guidelines outline the workflow for managing changes in this repository:

### 1. Create a New Branch

When making changes to the codebase, create a new branch from the `master` or `dev` branch. The branch name should be descriptive and follow the naming conventions established in the repository guidelines.

### 2. Make Changes

Implement the necessary changes in the new branch, adhering to the project's coding standards and guidelines. Ensure that your changes are well-tested and do not introduce any errors or regressions.

### 3. Submit a Pull Request

Once your changes are complete, submit a Pull Request (PR) to merge your branch into the `master` or `dev` branch. Provide a clear description of the changes, including relevant details or context to assist reviewers.

:::info
**GitHub Actions** will automatically run tests and checks to verify that the changes meet the repository's quality standards.  
All checks must pass before the PR can be merged.
:::

### 4. Review and Approval

The PR will be reviewed by other contributors or maintainers. They may provide feedback, suggest improvements, or request changes. Once the changes are approved, the PR will be merged into the target branch.

## Conclusion

Protecting the `master` branch and following a structured workflow for managing changes are essential for maintaining the stability and quality of the codebase. By adhering to these practices, you can ensure that the production environment remains stable, deployable, and free from errors, offering a seamless experience for both users and contributors.
