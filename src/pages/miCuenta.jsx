import React from 'react';

const MiCuenta = () => {
  // Obtener las películas favoritas del localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  // Obtener las compras del localStorage
  const compras = JSON.parse(localStorage.getItem('compras')) || [];

  return (
    <div className="flex flex-col justify-between min-h-screen bg-blue-900/55 text-white p-4">
      <div className="flex-1">
      

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold mb-2">Mis Compras</h3>
          <hr className="my-4 border-gray-400" />
          {compras.length > 0 ? (
            <div>
              {compras.map((compra, index) => (
                <div key={index}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                  </svg>
                  <p><strong>Película:</strong> {compra.pelicula}</p>
                  <p><strong>Función:</strong> {compra.funcion}</p>
                  <p><strong>Cantidad de Entradas:</strong> {compra.cantidadEntradas}</p>
                  <p><strong>Extras:</strong> {compra.extras.palomitas ? 'Palomitas x' + compra.cantidadExtras : ''} {compra.extras.bebidas ? 'Bebidas x' + compra.cantidadExtras : ''}</p>
                  <p><strong>Total a Pagar:</strong> ${compra.totalPagar}</p>
                  {index !== compras.length - 1 && <hr className="my-4 border-gray-400" />}
                </div>
              ))}
            </div>
          ) : (
            <p>No tienes compras realizadas.</p>
          )}
        </div>
      </div>
      {/* Esto mantiene el footer siempre en la parte inferior */}
      {/* <Footer /> */}
    </div>
  );
};

export default MiCuenta;
