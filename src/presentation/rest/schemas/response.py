from pydantic import BaseModel


class StatusResponseSchema(BaseModel):
    code: int
    message: str


class BaseResponseSchema(BaseModel):
    ok: bool
    status: StatusResponseSchema
