from db import Base
from sqlalchemy import Column,String,ForeignKey

class GenreSchema(Base):
    __tablename__ = 'genredimension'
    genreId = Column(String,primary_key=True)
    genreName = Column(String,nullable=False)
    