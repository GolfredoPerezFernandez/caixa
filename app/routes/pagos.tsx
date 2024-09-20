import { Link } from "@remix-run/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSyncAlt, faCog, faListUl, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

export default function TransfersPage() {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-300">
        <nav className="p-4">
          <div className="mb-4">
            <h2 className="text-[#2B7594] mb-2 mt-4 text-[16px] leading-[20px] font-bold">
              Transferencias individuales
            </h2>
            <ul className="mt-2 ml-0">
              <li className="mb-[12px]">
                <Link
                  to="/pagos"
                  className="block text-[#207EA0] text-sm hover:text-[#005b92]"
                >
                  Hacer transferencia
                </Link>
              </li>
              <li className="mb-[12px]">
                <Link
                  to="/pagos"
                  className="block text-[#207EA0] text-sm hover:text-[#005b92]"
                >
                  Repetir transferencia
                </Link>
              </li>
              <li className="mb-[12px]">
                <Link
                  to="/ver-transferencias-planificadas"
                  className="block text-[#207EA0] text-sm hover:text-[#005b92]"
                >
                  Ver transferencias planificadas
                </Link>
              </li>
            </ul>
          </div>

          <h2 className="text-[#2B7594] text-sm font-medium mt-6">
            Transferencias masivas y nóminas
          </h2>
          <ul className="mt-2">
            <li className="mb-[12px]">
              <Link
                to="/pagos"
                className="block text-[#2B7594] text-sm hover:text-[#005b92]"
              >
                Recibos
              </Link>
            </li>
            <li className="mb-[12px]">
              <Link
                to="/impuestos-multas"
                className="block text-[#2B7594] text-sm hover:text-[#005b92]"
              >
                Impuestos y multas
              </Link>
            </li>
            <li className="mb-[12px]">
              <Link
                to="/pagos"
                className="block text-[#2B7594] text-sm hover:text-[#005b92]"
              >
                Sacar dinero con código
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Transferencias</h1>
          <div>
            <Link to="/pagos" className="text-[#207EA0] hover:text-[#005b92] text-sm mr-4">
              Ver tutoriales
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#207EA0] cursor-pointer" />
          </div>
        </div>

        {/* Tarjetas de Transferencias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Nueva Transferencia */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faSyncAlt} className="text-[#207EA0] text-3xl mr-4" />
              <h2 className="text-lg font-semibold">Nuevas transferencias</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Haz transferencias puntuales y periódicas a cualquier cuenta nacional o internacional o repite una transferencia que hayas realizado.
            </p>
            <Link
              to="/pagos"
              className="inline-block bg-[#0070b8] text-white py-2 px-4 rounded-lg hover:bg-[#005b92] mb-2"
            >
              Realizar nueva transferencia
            </Link>
            <ul className="text-[#207EA0] text-sm">
              <li className="hover:underline">
                <Link to="/pagos">Repetir transferencia</Link>
              </li>
              <li className="hover:underline">
                <Link to="/pagos">Hacer transferencias al extranjero</Link>
              </li>
            </ul>
          </div>

          {/* Consulta y gestión de transferencias */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faCog} className="text-[#207EA0] text-3xl mr-4" />
              <h2 className="text-lg font-semibold">Consulta y gestión de transferencias</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Consulta las transferencias enviadas y recibidas y gestiona tus cuentas de confianza.
            </p>
            <ul className="text-[#207EA0] text-sm">
              <li className="hover:underline">
                <Link to="/pagos">Consultar y gestionar transferencias</Link>
              </li>
              <li className="hover:underline">
                <Link to="/pagos">Consultar operaciones favoritas</Link>
              </li>
            </ul>
          </div>

          {/* Otros pagos */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faListUl} className="text-[#207EA0] text-3xl mr-4" />
              <h2 className="text-lg font-semibold">Otros pagos</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Haz distintos pagos a la vez sin ningún programa adicional o haz pagos sin conocer la cuenta destino.
            </p>
            <ul className="text-[#207EA0] text-sm">
              <li className="hover:underline">
                <Link to="/pagos">Hacer pagos múltiples por transferencia</Link>
              </li>
              <li className="hover:underline">
                <Link to="/pagos">Hacer un pago a terceros o un pago a empresas</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de financiación */}
        <div className="bg-[#e5f6e5] text-[#207EA0] p-4 rounded-lg flex justify-between items-center mt-6">
          <div className="flex items-center">
            <span className="text-xl mr-4">💶</span>
            <p>Ahora puedes financiar tus transferencias</p>
          </div>
          <button className="bg-[#0070b8] text-white py-2 px-4 rounded-lg hover:bg-[#005b92]">
            Financiar transferencia
          </button>
        </div>

        {/* Tabla de últimas transferencias */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">Estas son las últimas transferencias enviadas</h2>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 text-left text-gray-500 font-semibold">Cuenta destino</th>
                <th className="py-2 px-4 text-left text-gray-500 font-semibold">Beneficiario</th>
                <th className="py-2 px-4 text-left text-gray-500 font-semibold">Fecha</th>
                <th className="py-2 px-4 text-left text-gray-500 font-semibold">Importe</th>
                <th className="py-2 px-4 text-left text-gray-500 font-semibold">
                  Estado <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-400" />
                </th>
                <th className="py-2 px-4 text-left text-gray-500 font-semibold">Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4 text-[#207EA0]">ES90 2100 4515 1822 0014 1083</td>
                <td className="py-2 px-4">jhon</td>
                <td className="py-2 px-4">15/09/2024</td>
                <td className="py-2 px-4">50,00 €</td>
                <td className="py-2 px-4"><span className="text-green-600">Finalizada</span></td>
                <td className="py-2 px-4">
                  <button className="text-[#207EA0] hover:underline flex items-center">
                    Ver opciones <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 text-[#207EA0]">ES92 2100 0997 6202 0113 8486</td>
                <td className="py-2 px-4">amalia</td>
                <td className="py-2 px-4">14/09/2024</td>
                <td className="py-2 px-4">100,00 €</td>
                <td className="py-2 px-4"><span className="text-green-600">Finalizada</span></td>
                <td className="py-2 px-4">
                  <button className="text-[#207EA0] hover:underline flex items-center">
                    Ver opciones <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 text-[#207EA0]">ES90 2100 4515 1822 0014 1083</td>
                <td className="py-2 px-4">jhon</td>
                <td className="py-2 px-4">14/09/2024</td>
                <td className="py-2 px-4">100,00 €</td>
                <td className="py-2 px-4"><span className="text-green-600">Finalizada</span></td>
                <td className="py-2 px-4">
                  <button className="text-[#207EA0] hover:underline flex items-center">
                    Ver opciones <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 text-[#207EA0]">ES90 2100 4515 1822 0014 1083</td>
                <td className="py-2 px-4">jho</td>
                <td className="py-2 px-4">13/09/2024</td>
                <td className="py-2 px-4">150,00 €</td>
                <td className="py-2 px-4"><span className="text-green-600">Finalizada</span></td>
                <td className="py-2 px-4">
                  <button className="text-[#207EA0] hover:underline flex items-center">
                    Ver opciones <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4 text-[#207EA0]">ES90 2100 4515 1822 0014 1083</td>
                <td className="py-2 px-4">jho</td>
                <td className="py-2 px-4">12/09/2024</td>
                <td className="py-2 px-4">50,00 €</td>
                <td className="py-2 px-4"><span className="text-green-600">Finalizada</span></td>
                <td className="py-2 px-4">
                  <button className="text-[#207EA0] hover:underline flex items-center">
                    Ver opciones <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-right">
            <Link to="/todas-transferencias" className="text-[#207EA0] hover:underline text-sm">
              Ver todas las transferencias realizadas &gt;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
