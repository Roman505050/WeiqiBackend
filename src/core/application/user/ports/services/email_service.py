from abc import ABC, abstractmethod
from typing import Literal, Optional


class IEmailService(ABC):
    @abstractmethod
    async def send_email(
        self,
        to: str,
        subject: str,
        body: str,
        *,
        from_: Optional[str] = None,
        content_type: Literal["text/html", "text/plain"],
    ) -> None: ...
