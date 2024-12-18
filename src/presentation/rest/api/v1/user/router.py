from fastapi import APIRouter
from fastapi.responses import JSONResponse
from loguru import logger

from core.application.user.ports.renderers.email_verification_code import (
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
from core.application.user.use_cases.register import (
    CreateUserDTO,
    RegisterUseCase,
)
from presentation.rest.api.v1.user.presenters import RegisterPresenter


router = APIRouter()


@router.post("")
async def register(
    body: CreateUserDTO,
    user_repo: IUserRepository,
    user_validation_repo: IUserValidationRepository,
    password_hasher: IPasswordHasher,
    email_renderer: IEmailVerificationCodeRenderer,
    email_service: IEmailService,
):
    try:
        presenter = RegisterPresenter()
        use_case = RegisterUseCase(
            output_port=presenter,
            user_repo=user_repo,
            user_validation_repo=user_validation_repo,
            password_hasher=password_hasher,
            email_renderer=email_renderer,
            email_service=email_service,
        )

        await use_case.execute(body)

        return presenter.get_response()
    except Exception as e:
        logger.error(e)
        return JSONResponse(
            status_code=500,
            content={
                "ok": False,
                "status": {
                    "code": 500,
                    "message": "Internal server error",
                },
            },
        )
