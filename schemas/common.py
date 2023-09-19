from db import Base
from sqlalchemy import Column,String,ForeignKey
from .spaceSchema import SpaceSchema
from .artistSchema import ArtistSchema
from .albumSchema import AlbumSchema
from .genreSchema import GenreSchema
from .songSchema import SongSchema
from .playlistSchema import PlaylistSchema

class ArtistSongSchema(Base):
    __tablename__ = "artistsongdimension"
    tempId = Column(String,primary_key=True)
    songId = Column(String,ForeignKey(SongSchema.songId))
    artistId = Column(String,ForeignKey(ArtistSchema.artistId))

class PlaylistSongSchema(Base):
    __tablename__ = "playlistsongdimension"
    tempId = Column(String,primary_key=True)
    playlistId = Column(String,ForeignKey(PlaylistSchema.playlistId))
    songId = Column(String,ForeignKey(SongSchema.songId))

class SongGenreSchema(Base):
    __tablename__ = "songgenredimension"
    tempId = Column(String,primary_key=True)
    songId = Column(String,ForeignKey(SongSchema.songId))
    genreId = Column(String,ForeignKey(GenreSchema.genreId))