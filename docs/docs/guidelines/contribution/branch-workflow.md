---
title: Branch Workflow
sidebar_position: 1
---

# Branch Workflow

The branch workflow defines the process for creating, managing, and merging branches in a Git repository. By following a structured workflow, you can ensure that changes are made in a consistent and organized manner, facilitating collaboration and code review processes. This document outlines the branch workflow that should be followed when working on the project.

## Branch Types

Branches play a crucial role in managing the development workflow of a project. By using different types of branches, you can separate different types of changes and features, making it easier to track progress and collaborate effectively with other contributors. The following are common branch types used in the project:

:::note
- `feature/<feature-name>` - For **new features**.
- `bugfix/<bug-name>` - For **bug fixes**.
- `hotfix/<hotfix-name>` - For **critical fixes**.
- `docs/<docs-name>` - For **documentation updates**.
- `refactor/<refactor-name>` - For **code refactoring**.
- `enhancement/<enhancement-name>` - For **enhancements**.
:::

These branch types help categorize changes based on their purpose and scope, making it easier to manage and review the changes effectively. When creating a new branch, ensure that the branch name reflects the type of changes being made.

## Branch Naming Guidelines

When naming branches, consider the following guidelines to ensure consistency and clarity across the repository:

- Use **lowercase** for all branch names.
- **Separate words with hyphens** (e.g., `feature/new-feature`).
- Avoid using special characters or spaces.
- Keep branch names **short**, but descriptive enough to understand the purpose.
- Use **meaningful names** that reflect the purpose of the branch.
- Follow a **consistent naming convention** across all branches.

By adhering to these guidelines, you can create a structured and organized naming scheme for branches, making it easier to identify the purpose and scope of each branch. Consistent branch naming also helps streamline the code review and merging processes, ensuring that changes are integrated smoothly into the codebase.

## Parent Branch for Derivative Branches

When creating a new branch, it is essential to choose the correct parent branch based on the type of changes being made. Below are the common parent branches used in the project and their purposes:

### Main Parent Branches:
- **`master`**:  
  The primary branch containing stable and production-ready code. Use this branch for critical fixes and releases.  
- **`dev`**:  
  The development branch where new features and changes are integrated before being merged into `master`. Use this branch for ongoing development.

### Branch Types and Their Parent Branches:

#### 1. Feature Branches  
- **Parent Branch**: `dev`  
- **Purpose**: For developing new features.
- **Merge Strategy**: Merge back to `dev` after completion.

#### 2. Bugfix Branches  
- **Parent Branch**: `master` or `dev`  
- **Purpose**: For fixing bugs. Use `master` for critical production bugs and `dev` for development-stage bugs.
- **Merge Strategy**: Merge back to `master` and `dev` after completion. But, if the bug is in development, merge back to `dev` only.

#### 3. Hotfix Branches  
- **Parent Branch**: `master`  
- **Purpose**: For immediate fixes in production.
- **Merge Strategy**: Merge back to `master` and `dev` after completion.

#### 4. Docs Branches  
- **Parent Branch**: `master` or `dev`  
- **Purpose**: For documentation updates. Use `master` for production-ready docs and `dev` for work-in-progress docs.
- **Merge Strategy**: Merge back to `master` or `dev` based on the documentation status.

#### 5. Refactor Branches  
- **Parent Branch**: `dev`  
- **Purpose**: For code refactoring without changing functionality.
- **Merge Strategy**: Merge back to `dev` after completion.

#### 6. Enhancement Branches  
- **Parent Branch**: `dev`  
- **Purpose**: For improving existing features or adding minor functionalities.
- **Merge Strategy**: Merge back to `dev` after completion.

## Branch Workflow

The branch workflow outlines the steps involved in creating, managing, and merging branches in the repository. The following steps should be followed when working with branches:

1. **Create a New Branch**: When starting work on a new feature, bug fix, or enhancement, create a new branch based on the branch type and name conventions outlined above.

2. **Work on the Branch**: Make changes, add new features, or fix bugs on the branch. Ensure that the changes are isolated and focused on the specific task assigned to the branch.

3. **Commit Changes**: Commit your changes to the branch regularly to track progress and maintain a detailed history of the changes made.

4. **Push the Branch**: Push the branch to the remote repository to collaborate with other team members and share your changes.

5. **Open a Pull Request**: When the changes are ready for review, open a Pull Request (PR) to merge the branch into the main branch (e.g., `master` or `dev`).

6. **Code Review**: Request a code review from team members to ensure that the changes meet the project's coding standards and requirements.

7. **Address Feedback**: Address any feedback or comments provided during the code review process. Make necessary changes to the code to improve its quality and readability.

8. **Merge the Branch**: After approval and successful review, merge the branch into the main branch using the PR merge process.

9. **Delete the Branch**: Once the branch is merged, delete the branch to keep the repository clean and organized.

By following this branch workflow, you can ensure that changes are made in a structured and organized manner, maintaining the quality and stability of the codebase. Effective branch management is essential for collaboration and project success, enabling contributors to work together seamlessly and efficiently.

## Conclusion

The branch workflow is a critical aspect of managing the development process in a Git repository. By following the guidelines and best practices outlined in this document, you can create, manage, and merge branches effectively, ensuring that changes are made in a consistent and organized manner. Adopting a structured branch workflow helps streamline the development process, enhance collaboration among team members, and maintain the quality and stability of the codebase.

By adhering to the branch naming conventions, choosing the correct parent branches, and following the branch workflow, you can contribute to the project in a structured and organized manner, making it easier to track changes, collaborate with other contributors, and maintain the integrity of the codebase. Branches are a fundamental part of the development process, and by using them effectively, you can enhance the efficiency and productivity of the project.
