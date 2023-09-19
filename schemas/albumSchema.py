from db import Base
from sqlalchemy import Column,String,ForeignKey
from .artistSchema import ArtistSchema 

class AlbumSchema(Base):
    __tablename__ = "albumdimension"
    albumId = Column(String,primary_key=True)
    albumName = Column(String,nullable=False)
    description = Column(String,nullable=True)
    artistId = Column(String,ForeignKey(ArtistSchema.artistId))