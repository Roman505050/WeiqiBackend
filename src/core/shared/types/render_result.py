from typing import Literal, NamedTuple


class RenderResult(NamedTuple):
    content: str
    subject: str
    content_type: Literal["text/html", "text/plain"]
