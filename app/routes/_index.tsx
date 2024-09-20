import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import {
  FaCloudUploadAlt,
  FaDownload,
  FaExchangeAlt,
  FaReceipt,
  FaEnvelope,
  FaStar,
  FaLeaf,
  FaBell,
  FaCreditCard,
  FaBoxOpen,
  FaPlusCircle,
} from 'react-icons/fa';
import { FaCreditCard, FaArrowLeft } from "react-icons/fa";

export const meta: MetaFunction = () => {
  return [
    { title: 'Remix+Vite' },
    { name: 'description', content: 'Welcome to Remix+Vite!' },
  ];
};

const linkStyle = 'underline decoration-dotted';

export default function Index() {
  return (
    <div className="lg:pl-36 lg:pr-36 p-4 pt-20 bg-gray-100 min-h-screen">
      <h1 className="text-2xl text-[#5C5C5C] font-bold mb-6 font-opensans">Visión global</h1>

      {/* Grid Layout con dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Columna Izquierda */}
        <div className="space-y-6">
          {/* Panel: Saldo Total */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-[#207EA0] text-2xl font-semibold font-opensans flex items-center">
              <FaCreditCard className="mr-2 text-3x1 text-[#207EA0]  font-opensans" /> Saldo total
            </h2>
          </div>

          {/* Panel: Lo más utilizado */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-black font-bold flex items-center font-opensans">
              <FaEnvelope className="mr-2 text-[#207EA0] font-opensans" /> Lo más utilizado
            </h2>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              <li className="flex font-opensans items-center font-opensans">
                <FaCloudUploadAlt className="text-[#207EA0] mr-2" />
                <span>Subir fichero</span>
              </li>
              <li className="flex font-opensans items-center font-opensans">
                <FaDownload className="text-[#207EA0] mr-2" />
                <span>Descargar fichero</span>
              </li>
              <li className="flex font-opensans items-center font-opensans">
                <FaExchangeAlt className="text-[#207EA0] mr-2" />
                <span>Nueva transferencia</span>
              </li>
              <li className="flex font-opensans items-center font-opensans">
                <FaReceipt className="text-[#207EA0] mr-2" />
                <span>Transferencias realizadas</span>
              </li>
              <li className="flex font-opensans items-center font-opensans">
                <FaEnvelope className="text-[#207EA0] mr-2" />
                <span>Mailbox</span>
              </li>
              <li className="flex font-opensans items-center font-opensans">
                <FaStar className="text-[#207EA0] mr-2" />
                <span>Operaciones favoritas</span>
              </li>
            </ul>
          </div>

          {/* Panel: Firmas pendientes */}
          <div className="bg-white  rounded-lg shadow p-6">
            <h2 className="text-[#207EA0] text-2xl font-semibold flex items-center">
              <img src={"https://res.cloudinary.com/dqefnwijm/image/upload/v1726769276/nydxqcqzdpwjitbli291.png"} className="mr-2 w-auto h-8" /> Firmas pendientes
            </h2>
            <p className="text-gray-500 font-opensans mt-4 font-opensans">
              No tienes operaciones pendientes de firmar
            </p>
          </div>

          {/* Panel: Pensado para ti */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-[#353534] text-2xl font-semibold font-opensansfont-bold font-opensans flex items-center">
              <FaBell className="mr-2 text-[#207EA0]" /> Pensado para ti
            </h2>
            <p className="text-gray-500 mt-4 font-opensans">Gestión de alertas</p>
            <p className="text-sm text-gray-700 mt-2 font-opensans">
              Activa una alerta para recibir por móvil o email el estado financiero de tu empresa.
            </p>
            <button className="bg-[#207EA0] font-opensans text-white rounded-lg px-4 py-2 mt-4">
              Gestionar alertas
            </button>
          </div>

          {/* Panel: Buscador de tarjetas */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-[#207EA0] font-opensans font-bold flex items-center">
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
                className="bg-[#207EA0] font-opensans text-white rounded-lg px-4 py-2"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>

        {/* Columna Derecha */}
        <div className="space-y-6">
          {/* Panel: Cuentas */}
          <div className="bg-white  rounded-lg shadow p-6">
            <h2 className="text-[#207EA0] text-2xl font-bold flex items-center">
              <FaCreditCard className="mr-2 text-[#207EA0]" /> Cuentas
            </h2>

            <div className="flex ml-44 items-center space-x-2">
          {/* Logo Image */}
          <img 
            src="https://res.cloudinary.com/dqefnwijm/image/upload/v1726777142/gc7tf6atrdiczknmred8.png" 
            alt="CaixaBank Logo" 
            className="h-8 w-8"
          />
          
          {/* CaixaBank Text */}
          <span className="font-regular text-[#353534] text-xl">CaixaBank</span>
        </div>            <p className="text-3xl text-[#353534] font-text-[#353534] mt-2 ml-44">11.321,78€</p>

            <div className="flex justify-between  mt-6 items-center border-t border-gray-300 pt-4">
        <span className="text-[#353534]">... 0113 8373</span>
        <span className="text-[#353534] font-semibold">11.321,78€</span>
      </div>

      {/* Footer Link */}
      <div className="mt-4">
        <a href="/" className="text-[#207EA0] font-semibold">
          Bancos agregados &gt;
        </a>
      </div>          </div>

          {/* Panel: Sostenibilidad */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-[#207EA0] font-bold flex items-center">
              <FaLeaf className="mr-2" /> Sostenibilidad
            </h2>
            <p className="text-gray-500 mt-4">Huella de carbono</p>
            <p className="text-sm text-gray-700 mt-2">
              Calcula la huella de carbono de tu empresa y te daremos recomendaciones para reducir el impacto en el planeta.
            </p>
            <button className="bg-[#207EA0] text-white rounded-lg px-4 py-2 mt-4">
              Calcular huella
            </button>
          </div>

          {/* Panel: Saldo y operaciones */}
          <div className="bg-white rounded-lg shadow p-6 mx-auto">
      {/* Número de cuenta */}
      <h2 className="text-[#207EA0] font-bold flex items-center">
        <FaCreditCard className="mr-2" /> ES55 2100 0997 6802 0113 8373
      </h2>

      {/* Saldo disponible y retenido */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-500">Saldo disponible</p>
          <p className="text-3xl">11.321,78€</p>
        </div>
        <div>
          <p className="text-gray-500">Saldo retenido</p>
          <p className="text-3xl">0,00€</p>
        </div>
      </div>

      {/* Lista de transacciones */}
      <ul className="mt-6 space-y-4">
        <li className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={"https://res.cloudinary.com/dqefnwijm/image/upload/v1726779366/ow5ae6mhxhrkce4avzr7.png"} className=" transform rotate-180 text-gray-500 h-10 mr-4" /> 
            <div>
              <p className="text-gray-700">VIAGOGO Event Tic</p>
              <p className="text-gray-500 text-sm">Hoy</p>
            </div>
          </div>
          <span className="text-red-500">-201,72€</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
          <img src={"https://res.cloudinary.com/dqefnwijm/image/upload/v1726779366/ow5ae6mhxhrkce4avzr7.png"} className="transform rotate-180  text-gray-500 h-10 mr-4" /> 
          <div>
              <p className="text-gray-700">jho</p>
              <p className="text-gray-500 text-sm">Hoy</p>
            </div>
          </div>
          <span className="text-red-500">-50,00€</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
          <img src={"https://res.cloudinary.com/dqefnwijm/image/upload/v1726779366/ow5ae6mhxhrkce4avzr7.png"} className="transform rotate-180 text-gray-500 h-10 mr-4" /> 
          <div>
              <p className="text-gray-700">amalia</p>
              <p className="text-gray-500 text-sm">Ayer</p>
            </div>
          </div>
          <span className="text-red-500">-100,00€</span>
        </li>
        <li className="flex justify-between items-center">
          <div className="flex items-center">
          <img src={"https://res.cloudinary.com/dqefnwijm/image/upload/v1726779366/ow5ae6mhxhrkce4avzr7.png"} className=" transform rotate-180 text-gray-500 h-10 mr-4" /> 
          <div>
              <p className="text-gray-700">jho</p>
              <p className="text-gray-500 text-sm">Ayer</p>
            </div>
          </div>
          <span className="text-red-500">-100,00€</span>
        </li>
      </ul>
    </div>

          {/* Panel: Todos mis productos */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-[#207EA0] font-bold flex items-center">
              <FaBoxOpen className="mr-2" /> Todos mis productos
            </h2>
            <a href="#" className="text-[#207EA0] mt-2 block">Ver todos los productos</a>
          </div>
        </div>
      </div>

      {/* Añadir módulo */}
      <div className="bg-white rounded-lg shadow p-6 mt-6 flex justify-center">
        <button className="flex items-center text-[#207EA0] font-bold">
          <FaPlusCircle className="mr-2" /> Añadir módulo
        </button>
      </div>
    </div>
  );
}
