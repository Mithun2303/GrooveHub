from db import Base
from sqlalchemy import Column,String,ForeignKey
from .albumSchema import AlbumSchema

class SongSchema(Base):
    __tablename__ = 'songdimension'
    songId = Column(String,primary_key=True)
    songName = Column(String,nullable=False)
    duration = Column(String,nullable=False)
    fileLoc = Column(String,nullable=False)
    albumId = Column(String,ForeignKey(AlbumSchema.albumId))