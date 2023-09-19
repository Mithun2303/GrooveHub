from db import Base
from sqlalchemy import String,Column,Boolean,ForeignKey
from .spaceSchema import SpaceSchema


class UserSchema(Base):
    __tablename__ = 'userdimension'
    userId = Column(String,primary_key = True)
    username = Column(String,nullable = False)
    email = Column(String,nullable = True)
    mobileNo = Column(String,nullable = True)
    spaceId = Column(String,ForeignKey(SpaceSchema.spaceId))
    password = Column(String,nullable=False)

