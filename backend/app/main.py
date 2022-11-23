"""Main module."""
import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response

app = FastAPI(docs_url="/api/docs", openapi_url="/api/openapi")

origins = ["http://localhost", "http://frontend:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api")
def root() -> Response:
    """Health check."""
    return Response(status_code=200)


@app.get("/api/hello")
def say_hello(name: str):
    return f"Hello {name}!"


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", reload=True, port=8888)  # nosec
