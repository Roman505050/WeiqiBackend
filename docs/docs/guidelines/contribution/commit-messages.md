---
title: Commit Messages
sidebar_position: 2
---

# Commit Messages

Commits are an essential part of the development workflow in a Git repository. They represent individual changes made to the codebase and provide a detailed history of the project's development. By following best practices for commits and commit messages, you can maintain a clean and organized codebase, making it easier to track changes, collaborate with other contributors, and manage the project effectively.

This document outlines the guidelines for creating commits and writing commit messages that adhere to established standards and best practices. By following these guidelines, you can ensure that your commits are clear, descriptive, and consistent, enhancing the overall quality and maintainability of the codebase.

## 1. **Commit Guidelines**

### General Guidelines

- **Commit messages** should be **clear** and **descriptive**, explaining the changes made in the commit.
- Write commit messages in the **present tense**. For example, use `Add new feature` instead of `Added new feature`.
- Keep commit messages **concise**, ideally under 50 characters.
- If the commit resolves an issue, include the **issue number**. For example, `Fix #123: Add new feature`.

### Commit Message Prefixes

Use appropriate prefixes to categorize the changes:

:::note
- `feature: ...` – For adding new features.
- `fix: ...` – For bug fixes.
- `docs: ...` – For documentation updates.
- `refactor: ...` – For code refactoring.
- `test: ...` – For adding or modifying tests.
- `enhancement: ...` – For performance improvements.
:::

### Formatting

- The message should be **short and to the point**, avoiding unnecessary details.
- The prefix should be followed by a colon and a brief description of the change.

## 2. **Commit Message Examples**

Here are some examples of commit messages following the guidelines:

:::tip
- `feature: Add user authentication functionality`
- `fix: Resolve issue with login form validation`
- `docs: Update contribution guidelines`
- `refactor: Optimize database query performance`
- `test: Add unit tests for user authentication`
- `enhancement: Improve error handling for API requests`
:::

By using descriptive commit messages with appropriate prefixes, you can clearly communicate the purpose of each commit and provide valuable context for reviewers and other contributors.

## 3. **Commit Message Template**

To ensure consistency and adherence to the commit message guidelines, you can use a commit message template. The template provides a structured format for writing commit messages, making it easier to follow the established conventions and best practices.

Here is an example of a commit message template:

```
<type>: <description>

<optional details>
Closes #<issue_number> (if applicable)
```

### Breakdown of the template:

- **`<type>`**: The type of change you are making (e.g., `feature`, `fix`, `docs`, `refactor`, `test`, `enhancement`).
- **`<description>`**: A concise summary of what the commit does, ideally under 50 characters.
- **`<optional details>`**: You can include additional context or information about the commit in this section (e.g., "Refactor code to improve performance", "Fix typo in README").
- **`Closes #<issue_number>`**: If this commit closes a GitHub issue, referencing the issue number helps to automatically link the commit to the issue.

By using a commit message template, you can streamline the process of creating consistent and informative commit messages, improving the overall clarity and readability of the commit history.

## **Conclusion**

Commit messages are a critical aspect of maintaining a clean and organized codebase. By following the guidelines outlined in this document, you can create clear, descriptive, and consistent commit messages that enhance the quality and maintainability of the project. Adopting best practices for commits and commit messages will help you track changes effectively, collaborate with other contributors, and manage the project efficiently.

## **Additional Resources**

- [Git Commit Guidelines](https://www.conventionalcommits.org/)
