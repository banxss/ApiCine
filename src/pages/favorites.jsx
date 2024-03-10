import React from 'react';

const MiCuenta = () => {
  // Obtener las películas favoritas del localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return (
    <div className="flex flex-col justify-between min-h-screen bg-blue-900/55 text-white p-4">
      <div className="flex-1">
        <div className="bg-gray-700 p-4 rounded mb-4">
          <h3 className="text-lg font-semibold mb-2">♡ Mis Favoritas ♡</h3>
          <hr className="my-4 border-gray-400" />
          {favorites.length > 0 ? (
            <ul>
              {favorites.map((favorite, index) => (
                <li key={index}>{favorite}</li>
                
              

              ))}
              <hr className="my-4 border-gray-400" />
            </ul>
          ) : (
            <p>No tienes películas favoritas guardadas.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiCuenta;
