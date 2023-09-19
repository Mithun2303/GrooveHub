from pytube import YouTube
from pytube import Playlist
import wave


def audioExtract(url:str):
    obj = list(('https://www.youtube.com/watch?v=O5QU0HxXN_g&ab_channel=MISTERKAIPULLA'))
    for i in obj:
        jm=YouTube(i).streams.filter(only_audio=True).first()
        jm.download(filename=f'/Users/mithunkarthickvenkatesan/Desktop/PSG/{jm.title}.mp4 ')
        print(i)
        
        print(YouTube(i).length//60,':',YouTube(i).length%60)
        # audio = YouTube(i).streams.filter(only_audio=True).first().download(output_path='/Users/mithunkarthickvenkatesan/Desktop/PSG/Semester III/Package/GrooveHub/Source/audio')

audioExtract('sxs')

