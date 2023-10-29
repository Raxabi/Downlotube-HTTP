import { useRouteError, isRouteErrorResponse } from "react-router-dom"
import "../public/css/error.css"

function ErrorPage() {
  const error = useRouteError()

  return (
    <div id="error-page">
      <h1 style={{width: "max-content", margin: "auto"}}>Vaya...</h1>
      <h1>Parece que esta ruta no existe ✋🤑</h1>
      <h2>{isRouteErrorResponse(error) ? `${error.status} | ${error.statusText}` : "Intenta volver al inicio"}</h2>
    </div>
  )
}

export default ErrorPage