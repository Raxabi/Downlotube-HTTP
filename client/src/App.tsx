import { Alert, AlertIcon, Text } from '@chakra-ui/react'
import { BsGithub } from "react-icons/bs"
import UrlForm from './components/UrlForm'

import './public/css/App.css'
import tiburon from "./public/images/Tuburao_recortado_transparente.png"

function App() {
  return (
    <div>
      <div id='tiburon-title-container'>
        <img id='tiburon' src={tiburon} alt="tiburon, mp3, tiburon mp3, tiburon fiestero" />
        <Text id='title' fontSize={"5xl"} textAlign={"center"}>DownloTube HTTP</Text>
      </div>
      <Alert
        id='alert'
        status='info'
        textAlign={"center"}
        alignItems={"center"}
        mb={"3"}>
        <AlertIcon/>
        Recomendamos usar las descargas de esta web para uso personal o no lucrativo, muchas de estas pueden tener derechos de autor.<br/>
        Downlotube no se hace responsable del uso que se les den a las mismas, solo ayudamos a que se puedan obtener para uso personal.
      </Alert>
      <UrlForm/>
      <footer>
        <span><a href="https://github.com/Raxabi/Downlotube-HTTP"><BsGithub size={50}/></a></span>
        <p id='colaboration'>Ciertos aspectos en colaboracion con <a href="https://www.instagram.com/javier_71020/" id='colaboration-name'>@J71020</a></p>
      </footer>
    </div>
  )
}

export default App
