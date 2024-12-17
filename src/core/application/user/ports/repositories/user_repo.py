from abc import ABC, abstractmethod
from uuid import UUID

from core.domain.user.entities.user import UserEntity


class IUserRepository(ABC):
    @abstractmethod
    async def save(self, user: UserEntity) -> None: ...

    @abstractmethod
    async def delete(self, user_id: UUID) -> None: ...

    @abstractmethod
    async def get_by_email(self, email: str) -> UserEntity: ...

    @abstractmethod
    async def get_by_username(self, username: str) -> UserEntity: ...

    @abstractmethod
    async def get_by_id(self, user_id: UUID) -> UserEntity: ...


class IUserValidationRepository(ABC):
    @abstractmethod
    async def check_conflicts(
        self, username: str, email: str
    ) -> tuple[bool, bool]: ...
