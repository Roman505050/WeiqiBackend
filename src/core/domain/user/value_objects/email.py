from email_validator import validate_email

from core.shared.bases.value_object import ValueObject


class Email(ValueObject):
    """
    Email value object.
    """

    value: str

    def validate(self) -> None:
        """
        Validate the email value object.
        Uses normalizing and validation from `email_validator` package.

        Raises:
            EmailNotValidError: If the email is not valid.
                            (from `email_validator` package)
            ValueError: If the email is empty, longer than 254 characters,
                            or the local part is longer than 64 characters.
        """
        if not self.value.strip():
            raise ValueError("Email cannot be empty or just whitespace.")

        if len(self.value) > 254:
            raise ValueError("Email cannot be longer than 254 characters.")

        validated_email = validate_email(self.value)

        local_part = validated_email.local_part

        if len(local_part) > 64:
            raise ValueError(
                "Email local part cannot be longer than 64 characters."
            )
