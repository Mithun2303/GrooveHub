from fastapi import APIRouter,UploadFile,File
from models.user import UserAuth
from schemas.userSchema import UserSchema
from fastapi import HTTPException
from db import SessionClass
from passlib.context import CryptContext
from uuid import uuid5,NAMESPACE_X500
from sqlalchemy import and_
from sqlalchemy import update
import os
from fastapi.encoders import jsonable_encoder
import jwt
from auth import Auth
from passlib.hash import bcrypt
from crud.sendmail import sendmail



pass_hash = CryptContext(schemes=['bcrypt'],deprecated='auto')

sql_1 = SessionClass()
sql = sql_1.get_session()
router = APIRouter()

@router.post('/')
def userauth(obj:UserAuth):
    if obj.email is None:
        return "EMAIL IS NONE"
    elif obj.mobileNo is None:
        return "PHNO IS NONE"
    elif len(obj.username) ==0:
        return "NAME IS NONE"











    





