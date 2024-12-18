from abc import ABC, abstractmethod

from core.application.user.dto.user import UserDTO
from core.shared.types.render_result import RenderResult


class IEmailVerificationCodeRenderer(ABC):
    @abstractmethod
    def render(
        self, user: UserDTO, verification_code: str
    ) -> RenderResult: ...
