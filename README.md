# YouTube Downloader HTTP Client

## No watermarks, no ads, no malware

> No se cuantas veces me cargue el historial de commits XDD

## How it works

- Uses:
  - react in the frontend

  - flask and pytube in the backend

- How process a request

1. The client sends a string to the backend containing the video URL through a HTTP POST request
2. The backend receives the string and pass it to pytube
3. pytube gets the binary file and load in memory using ```py stream_to_buffer```
  3.1. In addition to the binary file itself, pytube gets the video name and the video autor
4. The flask server returns those data in JSON format to the frontend
5. The react frontend convert the binary file to a format that the browser can use to generate a download link
6. When u clicks on the 'get file' button the binary file starts his download
