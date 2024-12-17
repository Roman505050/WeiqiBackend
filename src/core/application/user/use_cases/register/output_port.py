from abc import ABC, abstractmethod
from typing import Optional

from core.application.user.dto.user import UserDTO


class RegisterOutputPort(ABC):
    @abstractmethod
    def success(self, user: UserDTO) -> None: ...

    @abstractmethod
    def already_registered(
        self,
        username: Optional[str],
        email: Optional[str],
    ) -> None: ...

    @abstractmethod
    def weak_password(self, reasons: list[str]) -> None: ...

    @abstractmethod
    def unexpected_error(self) -> None: ...
