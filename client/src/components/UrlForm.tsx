import React, { useState, createRef } from "react"
import { FormLabel, Input } from "@chakra-ui/react"
import ConversionError from "../Errors/ConversionError"
import "../public/css/Button.css"
import VideoState from "./VideoState"

const { URL } = globalThis

interface IncomingData {
    title: string
    blob: string
    author: string
}

const VALID_URL = new RegExp(/^(https:\/\/(www\.)?)?youtube\.com\/watch\?v=.|youtu\.be\/./)

function UrlForm() {

    const [blobName, setBlobName] = useState("")
    const [downloadState, setDownloadState] = useState(false)

    const uriInput = createRef<HTMLInputElement>()
    const hrefButton = createRef<HTMLAnchorElement>()

    // Function taked as a reference in / from https://stackoverflow.com/a/16245768/18592727
    function b64ToBlob(b64String: string): Promise<Blob> {
        let blobString = atob(b64String)
        let uint8ArrayBlob = new Uint8Array(b64String.length)

        for (let i = 0; i < b64String.length; i++) {
            uint8ArrayBlob[i] = blobString.charCodeAt(i)
        }

        return new Promise((resolve, reject) => {
            resolve(new Blob([uint8ArrayBlob], {
                type: "audio/mp4"
            }))
            reject(new ConversionError("Ha ocurrido un error mientras se convertia el blob binario"))
        })
    }

    const sendURL = async (data: string) => {
        let blobURL = ""

        const request = await fetch("http://192.168.1.57:5000/", {
            method: "POST",
            body: data,
        })

        // Request the video
        try {
            const response: IncomingData = await request.json()

            const blobVal = await b64ToBlob(response.blob)

            blobURL = URL.createObjectURL(blobVal)

            // Sets all the variables to them corresponding value
            if (hrefButton.current) {
                hrefButton.current.href = blobURL
            }

            setDownloadState(true)
            setBlobName(response.title + " - " + response.author)
        } catch (error: unknown) {
            throw error as Error
        }
    }

    const wipeCache = () => {
        setDownloadState(false)
        hrefButton.current?.removeAttribute("href")
    }

    const recvSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (uriInput.current) {
            let inputData = uriInput.current.value
            VALID_URL.test(inputData) ? sendURL(inputData) : alert("No hay un enlace valido!")
        }
    }

    return (
        <div>
            <form onSubmit={recvSubmit}>
                <FormLabel>Video URL</FormLabel>
                <Input
                    placeholder="URL del video de YouTube"
                    autoFocus={true}
                    type={"text"}
                    ref={uriInput}
                    name={"url"}
                    mb={3}
                />
                <button
                    style={{
                        backgroundColor: "#a51d2a",
                        borderRadius: "5px",
                        padding: "8px",
                        marginRight: "2%",
                        fontWeight: 700
                    }}
                    type="button"
                    onClick={wipeCache}
                >Borrar Caché</button>
                <button
                    style={{
                        backgroundColor: "#20af6d",
                        borderRadius: "5px",
                        padding: "8px",
                        marginRight: "2%",
                        fontWeight: 700
                    }}
                    type="submit"
                >Descargar</button>
                <a ref={hrefButton}
                        type={"button"}
                        id="anchor-download"
                        download={blobName}
                >Obtener archivo</a>
                <a style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    marginLeft: "2%",
                    padding: "8px",
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    color: "black",
                    fontWeight: "bolder"
                }}>{
                  blobName.length === 0 ? "Nombre del video" :
                  blobName.length > 15 ? blobName.substring(0, 15) : blobName
                }</a>
                <VideoState state={downloadState}/>
            </form>
        </div>
    )
}

export default UrlForm
