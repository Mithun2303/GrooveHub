from fastapi import APIRouter
from models.user import UserAuth
from schemas.userSchema import UserSchema
from fastapi import HTTPException
from db import SessionClass
from passlib.context import CryptContext
from uuid import uuid5,NAMESPACE_X500
import os


pass_hash = CryptContext(schemes=['bcrypt'],deprecated='auto')

sql_1 = SessionClass()
sql = sql_1.get_session()
router = APIRouter()

@router.post('/register')
def register_user(obj:UserAuth):
    directory = '/Users/mithunkarthickvenkatesan/Desktop/GrooveHub/Source/img'
    print(directory)
    rel_dir = f'SOURCE/img/{obj.username}'
    for root, _, files in os.walk(directory):
            for file in files:
                # Split the file name and extension
                file_name, file_extension = os.path.splitext(file)
                print(file_name,file_extension,obj.username)
                # Check if the file name matches the target file name
                if file_name == obj.username:
                    rel_dir+=file_extension
                    print(rel_dir)
                    break
    password = pass_hash.hash(obj.password)
    print(password)
    dobj = UserSchema(
        userId = str(uuid5(NAMESPACE_X500,obj.username)),
        username = obj.username,
        email = obj.email,
        mobileNo = obj.mobileNo,
        password = password,
        profilepic = rel_dir
    )
    sql.add(dobj)
    sql.commit()
    return HTTPException(status_code=200,detail="Created")