import re
from typing import Callable


class WeakPasswordChecker:
    _RULES: list[tuple[Callable[[str], bool], str]] = [
        (
            lambda password: len(password) < 8,
            "Password must have at least 8 characters",
        ),
        (
            lambda password: not any(char.isdigit() for char in password),
            "Password must have at least one digit",
        ),
        (
            lambda password: not any(char.islower() for char in password),
            "Password must have at least one lowercase letter",
        ),
        (
            lambda password: not any(char.isupper() for char in password),
            "Password must have at least one uppercase letter",
        ),
        (
            lambda password: not any(
                char in "!@#$%^&*()_+={}[]:;,.<>?" for char in password
            ),
            "Password must have at least one special character",
        ),
        (
            lambda password: any(
                re.search(pattern, password, re.IGNORECASE)
                for pattern in [
                    r"password",
                    r"123456",
                    r"qwerty",
                    r"letmein",
                    r"welcome",
                    r"admin",
                    r"password123",
                ]
            ),
            "Password contains common or easily guessable patterns.",
        ),
        (
            lambda password: re.search(r"(.)\1\1\1", password) is not None,
            "Password contains too many repetitive characters "
            "(more than 3 identical characters in a row).",
        ),
    ]

    @staticmethod
    def check(password: str) -> tuple[bool, list[str]]:
        errors: list[str] = []

        for rule, message in WeakPasswordChecker._RULES:
            if rule(password):
                errors.append(message)

        return bool(errors), errors
