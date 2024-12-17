from uuid import UUID

from core.domain.user.value_objects.email import Email
from core.domain.user.value_objects.username import Username


class UserEntity:
    def __init__(
        self,
        user_id: UUID,
        username: Username | str,
        email: Email | str,
        password_hash: str,
        is_active: bool = True,
    ):
        self._user_id = user_id
        self._username = (
            username if isinstance(username, Username) else Username(username)
        )
        self._email = email if isinstance(email, Email) else Email(email)
        self._password_hash = password_hash
        self._is_active = is_active

    def __str__(self):
        return (
            f"user_id={self.user_id}, "
            f"username={self.username}, "
            f"primary_email={self.email}, "
            f"is_active={self.is_active}"
        )

    @property
    def user_id(self) -> UUID:
        return self._user_id

    @property
    def password_hash(self) -> str:
        return self._password_hash

    @password_hash.setter
    def password_hash(self, password: str):
        self._password_hash = password

    @property
    def username(self) -> Username:
        return self._username

    @username.setter
    def username(self, username: Username | str):
        """
        Set the username.

        Raises:
            ValueError: If the username is already used.
        """
        self._username = (
            username if isinstance(username, Username) else Username(username)
        )

    @property
    def email(self) -> Email:
        return self._email

    @email.setter
    def email(self, email: Email | str):
        """
        Set the email.

        Raises:
            ValueError: If the email is already used.
        """
        if email == self._email:
            raise ValueError("This email is already used.")
        self._email = email if isinstance(email, Email) else Email(email)

    @property
    def is_active(self) -> bool:
        return self._is_active

    @is_active.setter
    def is_active(self, is_active: bool):
        self._is_active = is_active

    def __repr__(self):
        return (
            f"User(user_id={self.user_id!r}, "
            f"username={self.username!r}, "
            f"primary_email={self.email!r}, "
            f"password_hash={self.password_hash!r}, "
            f"is_active={self.is_active!r})"
        )

    def __eq__(self, other: object) -> bool:
        if not isinstance(other, UserEntity):
            return False
        return (
            self.user_id == other.user_id
            and self.username == other.username
            and self.email == other.email
            and self.password_hash == other.password_hash
        )
