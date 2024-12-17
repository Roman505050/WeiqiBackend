from typing import Optional

from starlette.responses import JSONResponse

from core.application.user.dto.user import UserDTO
from core.application.user.use_cases.register import RegisterOutputPort
from presentation.rest.api.v1.user.schemas import RegisterResponseSchema
from presentation.rest.schemas.response import StatusResponseSchema


class RegisterPresenter(RegisterOutputPort):
    def __init__(self):
        self._response: JSONResponse | RegisterResponseSchema | None = None

    def success(self, user: UserDTO) -> None:
        self._response = RegisterResponseSchema(
            ok=True,
            status=StatusResponseSchema(
                code=200,
                message="User registered successfully",
            ),
            user=user,
        )

    def already_registered(
        self,
        username: Optional[str],
        email: Optional[str],
    ) -> None:
        errors = {}
        if username:
            errors["username"] = username
        if email:
            errors["email"] = email

        self._response = JSONResponse(
            status_code=400,
            content={
                "ok": False,
                "status": {
                    "code": 400,
                    "message": "User already registered",
                },
                "errors": errors,
            },
        )

    def weak_password(self, reasons: list[str]) -> None:
        self._response = JSONResponse(
            status_code=400,
            content={
                "ok": False,
                "status": {
                    "code": 400,
                    "message": "Weak password",
                },
                "errors": reasons,
            },
        )

    def unexpected_error(self) -> None:
        self._response = JSONResponse(
            status_code=500,
            content={
                "ok": False,
                "status": {
                    "code": 500,
                    "message": "Internal server error",
                },
            },
        )

    def get_response(self) -> JSONResponse | RegisterResponseSchema:
        return (
            self._response
            if self._response
            else JSONResponse(
                status_code=500,
                content={
                    "ok": False,
                    "status": {
                        "code": 500,
                        "message": "Internal server error",
                    },
                },
            )
        )
