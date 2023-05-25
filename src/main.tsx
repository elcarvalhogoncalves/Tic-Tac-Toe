import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// PAGINAS
import Home from './pages/Home'
import Pick from './pages/Choice' 
import Play from './pages/Play'

// ESTABELECENDO AS ROTAS
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {path: "/", element: <Home />},
      {path: "/pick", element: <Pick />},
      {path: "/play", element:<Play />},
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
