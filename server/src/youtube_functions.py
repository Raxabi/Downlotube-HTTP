from pytube import YouTube, Stream
from typing import TypedDict
from io import BytesIO

class AudioValue(TypedDict):
    buffer: BytesIO | None
    author: str | None
    title: str | None

def get_all_from_playlist(playlist_url: str):
    pass

# Get the video and work with
def get_audio_from_video(video_url: str) -> AudioValue:
    """
        Load the video on memory as a buffer
        and return a map with the video buffer and the video title
    """
    yt = YouTube(video_url)
    buffer = BytesIO()
    video_selection: Stream | None = yt.streams.get_by_itag(140)

    if video_selection is None: return {
        "buffer": None,
        "author": None,
        "title": None
    }

    video_selection.stream_to_buffer(buffer)
    buffer.seek(0)

    return {
        "buffer": buffer,
        "author": yt.author,
        "title": video_selection.title
    }