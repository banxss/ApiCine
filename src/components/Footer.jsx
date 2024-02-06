import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Acerca de Nosotros</h2>
          <p className="text-sm">
            La mejor venta de tickets de toda andalucía(is not spain)
          </p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Contáctanos</h2>
          <p className="text-sm">
            Calle scorsese nº 10 <br />
            Correo electrónico: nohablesenelcine@tarantino.com <br />
            Teléfono: 957 777 777
          </p>
        </div>

        <div className="col-span-2 md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Síguenos en las cacas sociales</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>


      <div className="mt-8 text-center">
        <p className="text-sm">
          © 2024 CINEFULL ONE LINK NO FAKE BY ESTEBAN LUQUE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
