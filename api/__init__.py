
from fastapi import APIRouter
from api import AddingData
from api import UserAuth
api_router = APIRouter()

api_router.include_router(AddingData.router,tags=['App name'])
api_router.include_router(UserAuth.router,tags=['App name'])