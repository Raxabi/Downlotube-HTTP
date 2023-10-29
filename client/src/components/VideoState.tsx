function VideoState({state: state}: {state: boolean}) {

  const kWaitingURL = "Esperando un enlace valido..."
  const kValidURL = "Archivo descargado"

  const styles: React.CSSProperties = {
    float: "right",
    fontWeight: "bolder",
    color: state ? "white" : "rgb(212, 114, 114)"
  }

  return (
    <div style={styles}>
      {state ? kValidURL : kWaitingURL}
    </div>
  )
}

export default VideoState