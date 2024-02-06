import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import MainPelis from './pages/mainPelis.jsx'
import Comprarentrada from './pages/comprarEntrada.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

function AppLayout() {
  return <>
     <Header /> 
    <Outlet />
     <Footer />
  </>
}


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/",
      element: <MainPelis/>
    },
   {
      path: "/comprarentrada",
      element: <Comprarentrada />,
      
    }, 
   
    

  ]
  }
]);










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
