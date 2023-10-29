# Utilities Imports
from base64 import b64encode

# Server Imports
from flask import Flask, jsonify, request as req
from flask_cors import CORS

# YouTube Downloder Imports
from src.youtube_functions import get_audio_from_video

app = Flask(__name__)

CORS(app, origins="http://192.168.1.57")
# El putisimo Node.js abre el proceso en localhost en lugar de 127.0.0.1
# Y Python no es capaz de hacer el forwarding entre localhost y 127.0.0.1

@app.post("/")
def send_main():
    download_encoded = req.data.decode("UTF-8")
    data = get_audio_from_video(download_encoded)
    buffer_file = data["buffer"]
    video_title = data["title"]
    video_author = data["author"]
    if buffer_file is None: return "Fallo al intentar descargar el archivo!"

    blob_file = b64encode(buffer_file.read()).decode("UTF-8")
    return jsonify(
        blob = blob_file,
        title = video_title,
        author = video_author
    )
