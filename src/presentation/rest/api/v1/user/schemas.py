from core.application.user.dto.user import UserDTO
from presentation.rest.schemas.response import BaseResponseSchema


class RegisterResponseSchema(BaseResponseSchema):
    user: UserDTO
