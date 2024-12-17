import unittest

from parameterized import parameterized  # type: ignore[import-untyped]

from core.application.user.utils.weak_password_checker import (
    WeakPasswordChecker,
)


class TestWeakPasswordChecker(unittest.TestCase):
    _checker = WeakPasswordChecker()

    @parameterized.expand(
        [
            ("v2D4%6", ["Password must have at least 8 characters"]),
            ("vD%&*^dfsdf", ["Password must have at least one digit"]),
            (
                "V2D%&*^DFSD",
                ["Password must have at least one lowercase letter"],
            ),
            (
                "v2d%&*^dfsdf",
                ["Password must have at least one uppercase letter"],
            ),
            (
                "v2D4dfsd",
                ["Password must have at least one special character"],
            ),
            (
                "",
                [
                    "Password must have at least 8 characters",
                    "Password must have at least one digit",
                    "Password must have at least one lowercase letter",
                    "Password must have at least one uppercase letter",
                    "Password must have at least one special character",
                ],
            ),
        ]
    )
    def test_check_password(self, password: str, expected_errors: list[str]):
        is_weak, errors = self._checker.check(password)
        self.assertTrue(is_weak)
        self.assertListEqual(errors, expected_errors)


if __name__ == "__main__":
    unittest.main()
