from db import Base
from .songSchema import SongSchema
from sqlalchemy import Column,String,ForeignKey

class SpaceSchema(Base):
    __tablename__ = 'spacedimension'
    spaceId = Column(String,primary_key=True)
    hostId = Column(String)
    startTime = Column(String,nullable=False)
    endTime = Column(String,nullable=False)
    songId = Column(String,ForeignKey(SongSchema.songId),nullable=True)
    def __init__(Self):
        pass