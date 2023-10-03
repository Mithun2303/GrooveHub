
from fastapi import APIRouter
from api import AddingData,api,changePassword,loginUser,registerUser
api_router = APIRouter()

api_router.include_router(AddingData.router,tags=['App name'])
api_router.include_router(changePassword.router,tags=['App name'])
api_router.include_router(loginUser.router,tags=['App name'])
api_router.include_router(registerUser.router,tags=['App name'])
api_router.include_router(api.router,tags=['App name'])