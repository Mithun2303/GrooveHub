from uuid import uuid5,uuid4
from uuid import NAMESPACE_X500
from sqlalchemy.sql import and_
from schemas.albumSchema import AlbumSchema
from schemas.genreSchema import GenreSchema
from schemas.songSchema import SongSchema
from schemas.artistSchema import ArtistSchema
from schemas.common import ArtistSongSchema
from schemas.common import SongGenreSchema
from db import SessionClass
from typing import Optional
from models.insertSong import InsertSong


sql1 = SessionClass()

sql = sql1.get_session()

def insert_artist(name:str):
    name= name.upper()
    res = sql.query(
        ArtistSchema.artistId
    ).filter(
        ArtistSchema.artistName==name
    ).first()
    if res is None:
        res = str(uuid5(NAMESPACE_X500,name))
        obj = ArtistSchema(
            artistName = name,
            artistId = res
        )
        sql.add(obj)
        sql.commit()
    print(res)

    return res

def insert_album(name:str,artistName:str,desc):
    artistName=artistName.upper()
    name=name.upper()
    artist_Id = sql.query(
        ArtistSchema.artistId
    ).filter(
        ArtistSchema.artistName==artistName
    ).first()
    if artist_Id is  None:
        artist_Id=insert_artist(artistName)
    else:
        albumId = sql.query(
            AlbumSchema.albumId
        ).filter(
            AlbumSchema.albumName==name
        ).first()
        if albumId is None:
            obj = AlbumSchema(
                albumId = str(uuid5(NAMESPACE_X500,name)),
                albumName = name,
                artistId =artist_Id[0],
                description = desc
            )
            sql.add(obj)
            sql.commit()
            return obj.albumId


def insert_genre(name:str):
    name = name.upper()
    genreId = sql.query(
        GenreSchema.genreId
    ).filter(
        GenreSchema.genreName==name
    ).first()
    if genreId is None:
        obj = GenreSchema(
            genreId = str(uuid5(NAMESPACE_X500,name)),
            genreName = name
        )
        genreId = obj.genreId
        sql.add(obj)
        sql.commit()
    print(genreId,"\n\n\n\n\nsdfsdvsvdsvds")
    return genreId


def insert_song(obj:InsertSong):
    obj.uppercase()
    artist_id = sql.query(
        ArtistSchema.artistId
    ).filter(
        ArtistSchema.artistName==obj.artist_name
    ).first()
    if artist_id is None:
        artist_id=insert_artist(obj.artist_name)
    album_id = sql.query(
        AlbumSchema.albumId
    ).filter(
        AlbumSchema.albumName==obj.album_name
    ).first()

    if album_id is None:
        album_id=insert_album(artistName=obj.artist_name,name=obj.album_name,desc = f"{obj.album_name} by {obj.artist_name} ")

    song_id = sql.query(
        SongSchema.songId
    ).filter(
        SongSchema.songName==obj.song_name
    ).first()
    song_id=song_id[0]
    if song_id is None:
        song_obj = SongSchema(
            songId = str(uuid5(NAMESPACE_X500,obj.song_name)),
            songName = obj.song_name,
            albumId = album_id[0],
            duration = obj.song_duration,
            fileLoc = obj.song_loc,
        )
        song_id = song_obj.songId
        sql.add(song_obj)
        genreId = insert_genre(obj.genre)
        print(genreId[0],"\n\n\n\n\nsdfdgsgsdgdsvdsv", song_id)
        song_genre = sql.query(
            SongGenreSchema.tempId
        ).filter(
            and_(
            SongGenreSchema.songId == song_id,
            SongGenreSchema.genreId ==genreId[0]
            )
        ).first()
        print(song_id[0]+"DFGHNMFGD\n\n\n\n\n\n")

        if song_genre is None:
            song_gen_ref = SongGenreSchema(
                tempId = str(uuid4()),
                songId = song_obj.songId,
                genreId = genreId[0]
            )
            print("SONGGENREF"+"\n\n\n\n\n\n\n")
            sql.add(song_gen_ref)

        album_song = sql.query(
            ArtistSongSchema
        ).filter(
            and_(
            ArtistSongSchema.artistId==artist_id[0],
            ArtistSongSchema.songId == song_obj.songId
            )
        ).first()
        print("147\v\v\v\v")
        if album_song is None:
            albumsong_ref = ArtistSongSchema(
                tempId=str(uuid4()),
                artistId =artist_id[0],
                songId = song_obj.songId
            )

            sql.add(albumsong_ref)

        sql.commit()
    return song_id
    