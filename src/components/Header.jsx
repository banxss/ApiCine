import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex items-center">
        {/* Agrega el logo con la etiqueta <img> */}
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png" // Reemplaza esta URL con la URL de tu imagen real
          alt="Logo de la Aplicación"
          className="h-24 w-auto"
        />

        <h1 className="text-2xl font-bold">CINEFULL </h1>
        {/* Puedes agregar más elementos en el lado derecho del encabezado si es necesario */}
      </div>
    </header>
  );
};

export default Header;
