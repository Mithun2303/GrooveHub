from db import Base
from sqlalchemy import Column,String,ForeignKey
from .artistSchema import ArtistSchema
from .songSchema import SongSchema

class ArtistSongSchema(Base):
    __tablename__ = "artistsongdimension"
    songId = Column(String,ForeignKey(SongSchema.songId))
    artistId = Column(String,ForeignKey(ArtistSchema.artistId))