import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import { ChakraProvider } from "@chakra-ui/react"
import theme from './config/ChakraThemeConfig'

import App from './App'
import ErrorPage from './pages/ErrorPage'
import './public/css/index.css'

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>
}])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </ChakraProvider>
)
