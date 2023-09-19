from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api import api_router

tags_metadata = [
    {
        "name":"users",
        "description":"User login, register, update, list written here"
    }
]

app = FastAPI(
    title="Mini Project",
    description="User Login Page",
    version="0.0.1",
    terms_of_service="http://example.com/terms/",
    contact={
        "name": "Mithun Karthick Venkatesan",
        "url": "https://www.instagram.com/_.mithun._.k._.venkatesan._/",
        "email": "mithunkarthick1610@gmail.com",
    },
    license_info={
        "name": "Apache 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html",
    },
    openapi_tags=tags_metadata
)

origins = [
    "http://localhost",
    "http://localhost:3000",
    'http://192.168.217.226:3000',

]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=["*"],
)

app.include_router(api_router)


