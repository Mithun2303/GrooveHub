from fastapi import APIRouter,Query
from models.user import UserAuth
from schemas.userSchema import UserSchema
from fastapi import HTTPException
from db import SessionClass
from passlib.context import CryptContext
from uuid import uuid5,NAMESPACE_X500



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


@router.post('/register')
def register_user(obj:UserAuth):
    password = pass_hash.hash(obj.password)
    print(password)
    dobj = UserSchema(
        userId = str(uuid5(NAMESPACE_X500,obj.username)),
        username = obj.username,
        email = obj.email,
        mobileNo = obj.mobileNo,
        password = password
    )
    sql.add(dobj)
    sql.commit()

    return HTTPException(status_code=200,detail="Created")

@router.get('/checkuname')
async def checkuser(name:str):
    print(name,"DSVSDVDSVsd")
    name_id = sql.query(
        UserSchema.username
    ).filter(
        UserSchema.username == name.rstrip()
    ).first()
    print(name_id)
    if name_id is None:
        return HTTPException(status_code=100)
    else:
        return HTTPException(status_code=302)
    

@router.post('/login')
def login(obj: UserAuth):
    if obj.username is not None:
        print(obj.username,"name")
    elif obj.email is not None:
        print(obj.email,"mail")
    elif obj.mobileNo is not None:
        print(obj.mobileNo,"mobile")


@router.get('/checkmail')
def checkmail(mail:str):
    mailid = sql.query(
        UserSchema.username
    ).filter(
        UserSchema.username == mail.rstrip()
    ).first()
    print(mailid)
    if mailid is None:
        return HTTPException(status_code=100)
    else:
        return HTTPException(status_code=302)