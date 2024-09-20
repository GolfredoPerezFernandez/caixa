import { FaCloudUploadAlt, FaDownload, FaExchangeAlt, FaReceipt, FaEnvelope, FaStar, FaLeaf, FaBell, FaCreditCard, FaBoxOpen, FaPlusCircle } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="lg:pl-36 lg:pr-36 p-4 pt-20 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Visión global</h1>

      {/* Grid Layout con dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Columna Izquierda */}
        <div className="space-y-6">
          {/* Panel: Saldo Total */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaCreditCard className="mr-2" /> Saldo total
            </h2>
          </div>

          {/* Panel: Lo más utilizado */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaEnvelope className="mr-2" /> Lo más utilizado
            </h2>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              <li className="flex items-center">
                <FaCloudUploadAlt className="text-blue-600 mr-2" />
                <span>Subir fichero</span>
              </li>
              <li className="flex items-center">
                <FaDownload className="text-blue-600 mr-2" />
                <span>Descargar fichero</span>
              </li>
              <li className="flex items-center">
                <FaExchangeAlt className="text-blue-600 mr-2" />
                <span>Nueva transferencia</span>
              </li>
              <li className="flex items-center">
                <FaReceipt className="text-blue-600 mr-2" />
                <span>Transferencias realizadas</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-2" />
                <span>Mailbox</span>
              </li>
              <li className="flex items-center">
                <FaStar className="text-blue-600 mr-2" />
                <span>Operaciones favoritas</span>
              </li>
            </ul>
          </div>

          {/* Panel: Firmas pendientes */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaBell className="mr-2" /> Firmas pendientes
            </h2>
            <p className="text-gray-500 mt-4">No tienes operaciones pendientes de firmar</p>
          </div>

          {/* Panel: Pensado para ti */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaBell className="mr-2" /> Pensado para ti
            </h2>
            <p className="text-gray-500 mt-4">Gestión de alertas</p>
            <p className="text-sm text-gray-700 mt-2">
              Activa una alerta para recibir por móvil o email el estado financiero de tu empresa.
            </p>
            <button className="bg-[#207EA0] text-white rounded-lg px-4 py-2 mt-4">Gestionar alertas</button>
          </div>

          {/* Panel: Buscador de tarjetas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaCreditCard className="mr-2" /> Buscador de tarjetas
            </h2>
            <form className="space-y-4 mt-4">
              <div className="flex space-x-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Primer apellido"
                  className="border border-gray-300 rounded-lg p-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-[#207EA0] text-white rounded-lg px-4 py-2"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-6">
          {/* Panel: Cuentas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaCreditCard className="mr-2" /> Cuentas
            </h2>
            <p className="text-sm text-gray-500">CaixaBank</p>
            <p className="text-3xl font-bold mt-2">11.321,78€</p>
            <p className="text-sm text-gray-500">...0113 8373</p>
            <a href="#" className="text-[#207EA0] mt-2 block">Bancos agregados</a>
          </div>

          {/* Panel: Sostenibilidad */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaLeaf className="mr-2" /> Sostenibilidad
            </h2>
            <p className="text-gray-500 mt-4">Huella de carbono</p>
            <p className="text-sm text-gray-700 mt-2">
              Calcula la huella de carbono de tu empresa y te daremos recomendaciones para reducir el impacto en el planeta.
            </p>
            <button className="bg-[#207EA0] text-white rounded-lg px-4 py-2 mt-4">Calcular huella</button>
          </div>

          {/* Panel: Saldo y operaciones */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaCreditCard className="mr-2" /> ES55 2100 0997 6802 0113 8373
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <p className="text-gray-500">Saldo disponible</p>
                <p className="text-3xl font-bold">11.321,78€</p>
              </div>
              <div>
                <p className="text-gray-500">Saldo retenido</p>
                <p className="text-3xl font-bold">0,00€</p>
              </div>
            </div>
            <ul className="mt-6 space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-500">VIAGOGO Event Tic</span>
                <span className="text-red-500">-201,72€</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">jho</span>
                <span className="text-red-500">-50,00€</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">amalia</span>
                <span className="text-red-500">-100,00€</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">PLAYTOMIC.IO 2FC1</span>
                <span className="text-red-500">-20,18€</span>
              </li>
            </ul>
          </div>

          {/* Panel: Todos mis productos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-blue-600 font-bold flex items-center">
              <FaBoxOpen className="mr-2" /> Todos mis productos
            </h2>
            <a href="#" className="text-[#207EA0] mt-2 block">Ver todos los productos</a>
          </div>
        </div>
      </div>

      {/* Añadir módulo */}
      <div className="bg-white rounded-lg shadow p-6 mt-6 flex justify-center">
        <button className="flex items-center text-blue-600 font-bold">
          <FaPlusCircle className="mr-2" /> Añadir módulo
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
