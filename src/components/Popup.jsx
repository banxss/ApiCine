import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8">
        <button className="absolute top-0 right-0 m-4 text-gray-500" onClick={onClose}>
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Gracias por tu compra</h2>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/720/979/non_2x/cinema-tickets-with-pop-corn-drink-amd-glasses-free-png.png" // Reemplaza esta URL con la URL de tu imagen real
          alt="Logo de la Aplicación"
          className="h-24 w-auto"
        />
        <p className="text-gray-700">Disfruta de la pelicula, este aviso se cerrara en 4 segundos</p>
      </div>
    </div>
  ) : null;
};

export default Popup;