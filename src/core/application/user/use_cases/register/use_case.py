import random
from uuid import uuid4

from loguru import logger

from core.application.user.dto.user import UserDTO
from core.application.user.ports.renderers.verification_code_renderer import (
    IEmailVerificationCodeRenderer,
)
from core.application.user.ports.repositories.user_repo import (
    IUserRepository,
    IUserValidationRepository,
)
from core.application.user.ports.services.email_service import IEmailService
from core.application.user.ports.services.password_hasher import (
    IPasswordHasher,
)
from core.application.user.use_cases.register.input_port import (
    CreateUserDTO,
    RegisterInputPort,
)
from core.application.user.use_cases.register.output_port import (
    RegisterOutputPort,
)
from core.application.user.utils.weak_password_checker import (
    WeakPasswordChecker,
)
from core.domain.user.entities.user import UserEntity


class RegisterUseCase(RegisterInputPort):
    def __init__(
        self,
        output_port: RegisterOutputPort,
        user_repo: IUserRepository,
        user_validation_repo: IUserValidationRepository,
        password_hasher: IPasswordHasher,
        email_renderer: IEmailVerificationCodeRenderer,
        email_service: IEmailService,
    ) -> None:
        self._output_port = output_port
        self._user_repo = user_repo
        self._user_validation_repo = user_validation_repo
        self._password_hasher = password_hasher
        self._email_renderer = email_renderer
        self._email_service = email_service

    async def execute(self, request: CreateUserDTO) -> None:
        try:
            conflicts = await self._check_conflicts(
                request.username, request.email
            )

            if conflicts:
                self._output_port.already_registered(
                    conflicts["username"], conflicts["email"]
                )
                return

            is_weak_password, errors = WeakPasswordChecker.check(
                request.password.get_secret_value()
            )
            if not is_weak_password:
                self._output_port.weak_password(errors)
                return

            user_entity = await self._create_user(request)
            user_dto = UserDTO.from_entity(user_entity)

            await self._send_verification_email(user_dto)
            self._output_port.success(user_dto)

        except Exception as e:
            logger.error(f"An unexpected error occurred: {e}")
            self._output_port.unexpected_error()

    async def _create_user(self, request: CreateUserDTO) -> UserEntity:
        password_hash = self._password_hasher.hash_password(
            request.password.get_secret_value()
        )
        user_id = uuid4()
        user_entity = UserEntity(
            user_id,
            request.username,
            request.email,
            password_hash,
        )
        await self._user_repo.save(user_entity)
        return user_entity

    async def _send_verification_email(self, user: UserDTO) -> None:
        verification_code = self._generate_verification_code()
        render_result = self._email_renderer.render(user, verification_code)
        await self._email_service.send_email(
            user.email,
            render_result.subject,
            render_result.content,
            content_type=render_result.content_type,
        )

    async def _check_conflicts(
        self, username: str, email: str
    ) -> dict[str, str | None]:
        username_conflict, email_conflict = (
            await self._user_validation_repo.check_conflicts(username, email)
        )
        return {
            "username": username if username_conflict else None,
            "email": email if email_conflict else None,
        }

    def _generate_verification_code(self) -> str:
        """Return code with 6 characters long."""
        return "".join(
            random.choices("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", k=6)
        )
