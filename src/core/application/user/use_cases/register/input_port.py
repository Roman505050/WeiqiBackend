from abc import ABC, abstractmethod

from pydantic import BaseModel, EmailStr, Field, SecretStr


class CreateUserDTO(BaseModel):
    username: str = Field(
        pattern=r"^[A-Za-z][A-Za-z0-9_-]{1,62}[A-Za-z0-9]$",
        min_length=3,
        max_length=64,
        description=(
            "Username must be between 3 and 64 characters long, "
            "and contain only letters, numbers, hyphens, and underscores. "
            "It must start with a letter and end with a letter or number."
        ),
    )
    email: EmailStr
    password: SecretStr


class RegisterInputPort(ABC):
    @abstractmethod
    async def execute(self, request: CreateUserDTO) -> None: ...
