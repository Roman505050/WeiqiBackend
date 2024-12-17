from uuid import UUID

from pydantic import BaseModel, EmailStr

from core.domain.user.entities.user import UserEntity


class UserDTO(BaseModel):
    user_id: UUID
    username: str
    email: EmailStr

    @staticmethod
    def from_entity(user_entity: UserEntity) -> "UserDTO":
        return UserDTO(
            user_id=user_entity.user_id,
            username=user_entity.username.value,
            email=user_entity.email.value,
        )
