import React, { useEffect, useState } from 'react';
import Popup from '../components/Popup';
const CompraEntradas = () => {
  const [funcionSeleccionada, setFuncionSeleccionada] = useState("Función 1");
  const [cantidadEntradas, setCantidadEntradas] = useState(1);
  const [extras, setExtras] = useState({ palomitas: false, bebidas: false });
  const [cantidadExtras, setCantidadExtras] = useState(0);
  const [totalPagar, setTotalPagar] = useState(0);

  const handleChangeFuncion = (event) => {
    setFuncionSeleccionada(event.target.value);
  };

  const handleChangeCantidadEntradas = (event) => {
    setCantidadEntradas(parseInt(event.target.value));
  };

  const handleChangeExtras = (event) => {
    const { name, checked } = event.target;
    setExtras(prevState => ({ ...prevState, [name]: checked }));
  };

  const handleChangeCantidadExtras = (event) => {
    setCantidadExtras(parseInt(event.target.value));
  };

  const calcularTotalPagar = () => {
    let total = cantidadEntradas * 10; // Precio base por entrada
    if (extras.palomitas) total += cantidadExtras * 5; // Precio por palomitas
    if (extras.bebidas) total += cantidadExtras * 3; // Precio por bebidas
    return total.toFixed(2);
  };

  const handlePagar = () => {
    const total = calcularTotalPagar();
    setTotalPagar(total);
 
    /* alert(`Total a pagar: $${total}`); */
  };

  const [popupOpen, setPopupOpen] = useState(false);

  const openPopupForDuration = () => {
    setPopupOpen(true);
    setTimeout(() => {
      setPopupOpen(false);
      window.history.back()
    }, 4000); // 4000 milliseconds = 4 seconds
  };
  useEffect(() => {
    handlePagar()
  }, [cantidadEntradas,extras,cantidadExtras]);

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Compra de Entradas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">Funciones Principales</h3>
            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Selecciona la función que deseas ver:</label>
              <select value={funcionSeleccionada} onChange={handleChangeFuncion} className="w-full p-2 border rounded-md">
                <option value="Función 1">Función 1</option>
                <option value="Función 2">Función 2</option>
                <option value="Función 3">Función 3</option>
              </select>
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Cantidad de Entradas:</label>
              <input type="number" min="1" value={cantidadEntradas} onChange={handleChangeCantidadEntradas} className="w-full p-2 border rounded-md" />
            </div>

            
          </div>

          <div className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">Adicionales</h3>

            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Selecciona extras opcionales:</label>
              <label className="flex items-center mb-2">
                <input type="checkbox" name="palomitas" checked={extras.palomitas} onChange={handleChangeExtras} className="mr-2" />
                Palomitas
              </label>
              <label className="flex items-center mb-2">
                <input type="checkbox" name="bebidas" checked={extras.bebidas} onChange={handleChangeExtras} className="mr-2" />
                Bebidas
              </label>
            </div>

            <div className="mb-2">
              <label className="block text-gray-700 mb-2">Cantidad de Extras:</label>
              <input type="number" min="0" value={cantidadExtras} onChange={handleChangeCantidadExtras} className="w-full p-2 border rounded-md" />
            </div>

           
          </div>

          <div className="col-span-1 md:col-span-2 bg-white p-4 rounded-md shadow-md">
            <h3 className="text-xl font-bold mb-4">Resumen de Compra</h3>

            <p className="text-gray-700 mb-2">Función Seleccionada: {funcionSeleccionada}</p>
            <p className="text-gray-700 mb-2">Entradas: {cantidadEntradas}</p>
            <p className="text-gray-700 mb-2">Extras: {extras.palomitas ? 'Palomitas x' + cantidadExtras : ''}{extras.bebidas ? 'Bebidas x' + cantidadExtras : ''}</p>

            <p className="text-xl font-bold mt-4">Total a Pagar: ${totalPagar}</p>

            <button onClick={openPopupForDuration} className="bg-blue-900 text-white mt-4 py-2 px-4 rounded-md hover:bg-blue-800">
              Confirmar pago
            </button>
            <Popup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompraEntradas;
