from fastapi import APIRouter
from fastapi import HTTPException
from crud.insertingData import insert_artist,insert_album,insert_song
from typing import Optional
from models.insertSong import InsertSong

router = APIRouter()

@router.post('/song')
def add_song(obj:InsertSong):

    response = insert_song(obj)
    return response

