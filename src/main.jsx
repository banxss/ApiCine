import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './pages/ErrorPage.jsx'
import MainPelis from './pages/mainPelis.jsx'
import Comprarentrada from './pages/comprarEntrada.jsx'
import MiCuenta from './pages/miCuenta.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Busqueda from './pages/busqueda.jsx'
import Favo from './pages/favorites.jsx'
import App from './App.jsx'
import { Provider } from 'react-redux';
import {store} from './redux/store.js'

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
    {
      path: "/miCuenta",
      element: <MiCuenta />,
      
    }, 
    {
      path: "/search",
      element: <Busqueda />,
      
    }, 
    {
      path: "/favo",
      element: <Favo />,
      
    }, 
   
    

  ]
  }
]);










ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
</React.StrictMode>,
)
