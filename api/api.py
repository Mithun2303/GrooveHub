from fastapi import APIRouter,UploadFile
import base64
from schemas.songSchema import SongSchema
from fastapi import HTTPException
from db import SessionClass
from schemas.userSchema import UserSchema
from typing import List
from models.insertSong import Song
from fastapi.encoders import jsonable_encoder
from fastapi.responses import FileResponse
from crud.sendmail import sendmail
import re
import shutil


sql1 = SessionClass()
sql = sql1.get_session()
router = APIRouter(prefix='/api')
DIR= '/Users/mithunkarthickvenkatesan/Desktop/GrooveHub/Source/img/'

@router.get('/songs',response_model=List[Song])
def get_songs():
    res =sql.query(SongSchema.songName).all()
    print(res) 
    # res = jsonable_encoder(res)
    # print(res+'\n\n\n\n\n\n\n')
    obj = list()
    for r in res:
        obj.append(Song(songName=r[0]))
    return obj

@router.get('/userprofile')
def get_profile(uid:str):
    DIR = '/Users/mithunkarthickvenkatesan/Desktop/GrooveHub/'
    res = sql.query(
        UserSchema.profilepic
    ).filter(
        UserSchema.userId == uid
    ).first()
    print("res",res[0])
    DIR+=res[0]
    print(DIR)
    print(FileResponse(DIR))
    return FileResponse(DIR)


@router.post('/addfile/{filename}')
def add_file(file:UploadFile,filename:str):
    print(file.filename)
    pattern = r'\.([a-zA-Z0-9]+)$'
    match = re.search(pattern, file.filename)
    if match:
        file_extension = match.group(1).lower()
        print(file_extension)
    file.filename = filename+'.'+file_extension
    print(DIR+file.filename)
    with open(DIR+file.filename,'wb') as f:
        shutil.copyfileobj(file.file,f)
    return HTTPException(detail={"message": "File uploaded successfully"}, status_code=200)


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


@router.get('/checkmail')
async def checkmail(mail:str):
    print("MAIL",mail.rstrip())
    mailid = sql.query(
        UserSchema
    ).filter(
        UserSchema.email == mail.rstrip()
    ).first()
    print(mailid)
    if mailid is not None:
        return HTTPException(status_code=100,detail="User found")
    else:
        return HTTPException(status_code=404)


@router.get('/sendotp')
def sendOTP(mail:str):
    response = sendmail(mail)
    if response[0] == 1:
        return HTTPException(status_code=100,detail=response[1])
    else:
        return HTTPException(status_code=500,detail="Bad request")