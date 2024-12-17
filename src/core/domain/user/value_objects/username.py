import re

from core.shared.bases.value_object import ValueObject


class Username(ValueObject):
    """
    Username value object.
    """

    value: str

    def validate(self) -> None:
        """
        Validate the username value object.

        Raises:
            ValueError: If the username is empty, longer than 64 characters,
                            or contains invalid characters.
        """
        if not re.match(
            r"^[A-Za-z][A-Za-z0-9_-]{1,62}[A-Za-z0-9]$", self.value
        ):
            raise ValueError(
                "Username must be between 3 and 64 characters long, "
                "and contain only letters, numbers, hyphens, and underscores. "
                "It must start with a letter and end with a letter or number."
            )
