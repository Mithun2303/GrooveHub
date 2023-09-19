from db import Base
from sqlalchemy import Column,String

class ArtistSchema(Base):
    __tablename__ = 'artistdimension'
    artistId = Column(String,primary_key=True)
    artistName = Column(String,nullable=False)