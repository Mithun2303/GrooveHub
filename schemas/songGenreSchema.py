from db import Base
from sqlalchemy import Column,String,ForeignKey
from .songSchema import SongSchema
from .genreSchema import GenreSchema

class SongGenreReference(Base):
    __tablename__ = "songgenredimension"
    songId = Column(String,ForeignKey(SongSchema.songId))
    genreId = Column(String,ForeignKey(GenreSchema.genreId))