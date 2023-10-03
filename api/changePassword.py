from fastapi import APIRouter
from schemas.userSchema import UserSchema
from fastapi import HTTPException
from db import SessionClass
from passlib.context import CryptContext
from sqlalchemy import update


pass_hash = CryptContext(schemes=['bcrypt'],deprecated='auto')

sql_1 = SessionClass()
sql = sql_1.get_session()
router = APIRouter()

@router.post('/changepassword/')
def changepassword(email:str,password:str):
    print(password)
    print(email)
    pwd = pass_hash.hash(password)
    stmt = (
        update(UserSchema).where(UserSchema.email==email).values(password=pwd)
    )
    sql.execute(stmt)
    print(pwd)
    sql.commit()
    return HTTPException(status_code=200,detail="Done")