from fastapi import FastAPI
from fastapi.openapi.utils import get_openapi


app = FastAPI()


def custom_openapi():
    if app.openapi_schema:
        return app.openapi_schema

    openapi_schema = get_openapi(
        title="Weiqi Backend API",
        version="0.1.0",
        description=(
            "Weiqi is a game of strategy and tactics. "
            "It is a game for two players, one with black "
            "stones and one with white stones. The goal is "
            "to surround your opponent's stones and capture "
            "them. The player with the most territory at the "
            "end of the game wins."
        ),
        routes=app.routes,
    )

    app.openapi_schema = openapi_schema
    return app.openapi_schema


app.openapi = custom_openapi  # type: ignore


@app.get("/", responses={200: {"description": "Hello World?"}})
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
