---
title: Pull Requests (PRs)
sidebar_position: 3
---

# Pull Requests (PRs)

Pull Requests (PRs) are a critical part of the development process in most Git repositories. They allow contributors to propose changes, discuss modifications, and collaborate on improving the codebase. This document outlines the guidelines and best practices for creating and managing Pull Requests in this repository.

## 1. **Creating a Pull Request**

### Steps to Create a PR

1. **Create a New Branch**: If you are working on a new feature or bug fix, create a new branch based on the `dev` or `main` branch.

2. **Make Changes**: Implement the necessary changes in the new branch, following the project's coding standards and guidelines.

3. **Commit Changes**: Commit your changes to the branch regularly to track progress and maintain a detailed history of the modifications.

4. **Push the Branch**: Push the branch to the remote repository to collaborate with other team members and share your changes.

5. **Open a Pull Request**: When the changes are ready for review, open a Pull Request (PR) to merge the branch into the target branch (e.g., `dev` or `main`).

### PR Title and Description

- **PR Title**: The title should be descriptive and summarize the changes introduced in the PR.

- **PR Description**: Provide a clear overview of the changes, their purpose, and any relevant context that reviewers need to know.

## 2. **Review and Approval Process**

### Code Review

- Every PR must be reviewed by at least one team member.
- Reviewers should assess the PR based on the following criteria:
  - **Code quality**: Ensure the code is clean, readable, and efficient.
  - **Best practices**: Confirm that the code follows established coding standards.
  - **Completeness**: Verify that the PR fully implements the intended changes and fixes.
- Reviewers should provide constructive feedback and suggestions for improvement to enhance the code quality.
- Address all code review comments and suggestions before merging the PR.

### GitHub Actions

- All PRs must pass the CI/CD pipeline checks.
- If a PR fails any CI/CD check, the author must resolve the issues before the PR can be merged.
- GitHub Actions will automatically run tests and checks to verify that the changes meet the repository's quality standards.

## 3. **Merging a Pull Request**

### Approval and Merge

- A PR can only be merged after approval and successful CI/CD validation.
- The author should not merge their own PR. Another team member must perform the merge after review and approval.
- All checks must pass before the PR can be merged into the target branch.

## Conclusion

Pull Requests play a crucial role in the collaborative development process, enabling contributors to propose changes, review modifications, and maintain the quality and stability of the codebase. By following the guidelines and best practices outlined in this document, you can create, manage, and merge PRs effectively, ensuring that the codebase remains clean, organized, and free from errors. Effective PR management is essential for collaboration and project success, allowing contributors to work together seamlessly and efficiently.