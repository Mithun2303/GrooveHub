from db import Base
from sqlalchemy import Column,String,ForeignKey
from .playlistSchema import PlaylistSchema
from .songSchema import SongSchema

class PlaylistSongSchema(Base):
    __tablename__ = "playlistsongdimension"
    playlistId = Column(String,ForeignKey(PlaylistSchema.playlistId))
    songId = Column(String,ForeignKey(SongSchema.songId))

    