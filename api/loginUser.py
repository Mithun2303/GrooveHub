from fastapi import APIRouter
from models.user import UserAuth
from schemas.userSchema import UserSchema
from fastapi import HTTPException
from db import SessionClass
from passlib.context import CryptContext
from sqlalchemy import and_
import jwt
from fastapi.encoders import jsonable_encoder
from passlib.hash import bcrypt
from auth import Auth



pass_hash = CryptContext(schemes=['bcrypt'],deprecated='auto')
sql_1 = SessionClass()
sql = sql_1.get_session()
router = APIRouter()



@router.post('/login',status_code=200)
def login(obj: UserAuth):
    if obj.username is not None:
        print('\n\n\n\n\n\n',pass_hash.hash(obj.password))
        print(obj.username,"name")
        details = sql.query(
            UserSchema
        ).filter(
            and_(
                UserSchema.username==obj.username,
            )
        ).first()
        print(obj.username,obj.password)
        print(details)
        # Create a JWT and validate login for mail and phno
    elif obj.email is not None:
        print(obj.email,"mail")
        details = sql.query(
            UserSchema
        ).filter(
            and_(
                UserSchema.email==obj.email,
            )
        ).first()
    if details is None:
        return HTTPException(status_code=404,detail="User not found")
    else:
        print(bcrypt.verify(obj.password,details.password))
        if pass_hash.verify(obj.password,details.password):
            print(obj.password,details.password)
            print("\n\n\n\n\n")
            details = jsonable_encoder(details)
            print(details)
            encodedDetails = jwt.encode(details,Auth.SECRET_KEY,algorithm=Auth.ALGORITHM)
            return HTTPException(status_code=100,detail=[encodedDetails,details['userId']])
        else:
            return HTTPException(status_code=300,detail='Incorrect Password')