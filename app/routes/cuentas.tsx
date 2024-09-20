import { Link } from "@remix-run/react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faDownload, faFile, faEye, faSync, faBuilding, faBan } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Para la flecha al final

export default function AccountPage() {
    const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-300">
      <nav className="p-4">
        <div className="mb-4">
          {/* Título de Cuentas Nacionales */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h2 className="text-[#2B7594] mb-2 mt-4 text-[16px] leading-[20px] font-bold">
              Cuentas nacionales
            </h2>
            <span className="text-[#2B7594] text-sm">
              {isExpanded ? "▴" : "▾"}
            </span> {/* Flecha */}
          </div>
          
          {/* Opciones del menú */}
          {isExpanded && (
            <ul className="mt-2 ml-0">
              <li className="mb-[12px]">
                <Link
                  to="/movimientos"
                  className="block text-[#2B7594] text-[14px] leading-[18px] hover:text-[#005b92]"
                >
                  Ver movimientos
                </Link>
              </li>
              <li className="mb-[12px]">
                <Link
                  to="/descargar-cuaderno"
                  className="block text-[#2B7594] text-[14px] leading-[18px] hover:text-[#005b92]"
                >
                  Descargar cuaderno 43
                </Link>
              </li>
              <li className="mb-[12px]">
                <Link
                  to="/centralizacion-fondos"
                  className="block text-[#2B7594] text-[14px] leading-[18px] hover:text-[#005b92]"
                >
                  Centralización de fondos
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Título de Cuentas en otros países */}
        <h2 className="text-[#2B7594] text-[14px] leading-[18px] font-medium mt-[20px]">
          Cuentas en otros países
        </h2>
      </nav>
    </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-4">Cuentas nacionales</h1>
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-blue-600 text-xl mr-4">🏦</span>
       <span className="text-xl blue-underline text-[#207EA0]  font-medium">ES55 2100 0997 6802 0113 8373</span> 
          </div>
          <span className="text-xl font-regular">11.321,78 €</span>
          <button className="bg-gray-200 text-sm px-4 py-2 rounded-lg">
            Opciones
          </button>
        </div>

        {/* Quick Actions Section */}
       
      </div>
      <aside className="w-64 bg-white border-l border-gray-300 p-4">
      <nav>
        <h2 className="text-lg font-semibold mb-4">Accesos directos</h2>
        <ul className="space-y-2">
          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/add-bank" className="flex items-center">
              <FontAwesomeIcon icon={faBank} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Añadir banco</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>

          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/download-extracts" className="flex items-center">
              <FontAwesomeIcon icon={faDownload} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Descarga de extractos C43</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>

          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/account-certificates" className="flex items-center">
              <FontAwesomeIcon icon={faFile} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Certificados de cuenta</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>

          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/visibility-settings" className="flex items-center">
              <FontAwesomeIcon icon={faEye} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Configurar visibilidad de mis cuentas</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>

          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/centralization-funds" className="flex items-center">
              <FontAwesomeIcon icon={faSync} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Centralización de fondos</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>

          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/view-other-balances" className="flex items-center">
              <FontAwesomeIcon icon={faBuilding} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Ver saldos de mis otras sociedades</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>

          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/view-canceled-accounts" className="flex items-center">
              <FontAwesomeIcon icon={faBan} className="text-[#2B7594] mr-4" />
              <span className="text-[#2B7594]">Ver cuentas canceladas</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#2B7594]" />
          </li>
        </ul>
      </nav>
    </aside>
    </div>
  );
}
