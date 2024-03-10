import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
    
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png" // Reemplaza esta URL con la URL de tu imagen real
          alt="Logo de la Aplicación"
          className="h-24 w-auto"
        />

        <h1 className="text-4xl font-bold">CINEFULL </h1>
        
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">Inicio</Link>
            </li>
            <li>
              <Link to="/search" className="text-white hover:text-gray-300">Buscar peliculas</Link>
            </li>
            <li>
              <Link to="/miCuenta" className="text-white hover:text-gray-300">Tus compras</Link>
            </li>
            <li>
              <Link to="/favo" className="text-white hover:text-gray-300">Tus favoritas</Link>
            </li>
         
         
       
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
