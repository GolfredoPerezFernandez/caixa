import { FaCloudUploadAlt, FaDownload, FaExchangeAlt, FaReceipt, FaEnvelope, FaStar } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl text-[#207EA0] font-bold mb-6">Visión global</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Saldo Total */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Saldo total</h2>
        </div>

        {/* Cuentas */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Cuentas</h2>
          <p className="text-sm text-gray-500">CaixaBank</p>
          <p className="text-2xl font-bold">11.321,78€</p>
          <p className="text-sm text-gray-500">... 0113 8373</p>
          <a href="#" className="text-[#207EA0]">Bancos agregados</a>
        </div>

        {/* Lo más utilizado */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Lo más utilizado</h2>
          <ul className="grid grid-cols-2 gap-4 text-sm">
            <li className="flex items-center space-x-2">
              <FaCloudUploadAlt className="text-[#207EA0]" />
              <span>Subir fichero</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaDownload className="text-[#207EA0]" />
              <span>Descargar fichero</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaExchangeAlt className="text-[#207EA0]" />
              <span>Nueva transferencia</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaReceipt className="text-[#207EA0]" />
              <span>Transferencias realizadas</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-[#207EA0]" />
              <span>Mailbox</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaStar className="text-[#207EA0]" />
              <span>Operaciones favoritas</span>
            </li>
          </ul>
        </div>

        {/* Sostenibilidad */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Sostenibilidad</h2>
          <p className="text-sm text-gray-500">Huella de carbono</p>
          <p className="text-sm text-gray-700">
            Calcula la huella de carbono de tu empresa y te daremos recomendaciones para reducir el impacto en el planeta.
          </p>
          <button className="bg-[#207EA0] text-white rounded-lg px-4 py-2 mt-4">Calcular huella</button>
        </div>

        {/* Firmas pendientes */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Firmas pendientes</h2>
          <p className="text-sm text-gray-500">No tienes operaciones pendientes de firmar</p>
        </div>

        {/* Pensado para ti */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Pensado para ti</h2>
          <p className="text-sm text-gray-500">Gestión de alertas</p>
          <p className="text-sm text-gray-700">
            Activa una alerta para recibir por móvil o email el estado financiero de tu empresa.
          </p>
          <button className="bg-[#207EA0] text-white rounded-lg px-4 py-2 mt-4">Gestionar alertas</button>
        </div>

        {/* Buscador de tarjetas */}
        <div className="bg-white rounded-lg shadow p-4">
          <h2 className="text-[#207EA0] font-bold mb-4">Buscador de tarjetas</h2>
          <form className="space-y-4">
            <div className="flex space-x-2">
              <input type="text" placeholder="Nombre" className="border rounded-lg p-2 w-full" />
              <input type="text" placeholder="Primer apellido" className="border rounded-lg p-2 w-full" />
            </div>
            <button type="submit" className="bg-[#207EA0] text-white rounded-lg px-4 py-2">Buscar</button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
