from pydantic import BaseModel

class InsertSong(BaseModel):
    song_name :str
    song_duration :str
    album_name:str
    artist_name:str
    song_loc:str
    genre:str
    def uppercase(self):
        self.song_name= self.song_name.upper()
        self.album_name= self.album_name.upper()
        self.artist_name= self.artist_name.upper()
        self.song_loc= self.song_loc.upper()
        self.genre = self.genre.upper()

class Song(BaseModel):
    songName: str