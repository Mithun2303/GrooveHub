from db import Base
from sqlalchemy import Column,String,ForeignKey
from . import userSchema

class PlaylistSchema(Base):
    __tablename__ = 'playlistdimension'
    playlistId = Column(String,primary_key=True)
    playlistName = Column(String,nullable = False)
    userId = Column(String,ForeignKey(userSchema.UserSchema.userId))