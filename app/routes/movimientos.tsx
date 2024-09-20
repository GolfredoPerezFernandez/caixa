import { Link } from "@remix-run/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCopy, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser, faCalendarAlt, faArrowRight, faMoneyCheckAlt, faBank, faUserPlus } from "@fortawesome/free-solid-svg-icons";

export default function AccountMovements() {
  const [activeTab, setActiveTab] = useState("Todos");

  // Datos de ejemplo para movimientos
  const transactions = {
    todos: [
      { id: 1, description: "VIAGOGO Event Tic", date: "15 Sep 2024", amount: "-201,72 €", balance: "11.321,78 €", type: "gasto" },
      { id: 2, description: "jho", date: "15 Sep 2024", amount: "-50,00 €", balance: "11.523,50 €", type: "gasto" },
      { id: 3, description: "Salario", date: "14 Sep 2024", amount: "+1.200,00 €", balance: "11.571,50 €", type: "ingreso" },
    ],
    ingresos: [
      { id: 1, description: "Salario", date: "14 Sep 2024", amount: "+1.200,00 €", balance: "11.571,50 €", type: "ingreso" },
    ],
    gastos: [
      { id: 1, description: "VIAGOGO Event Tic", date: "15 Sep 2024", amount: "-201,72 €", balance: "11.321,78 €", type: "gasto" },
      { id: 2, description: "jho", date: "15 Sep 2024", amount: "-50,00 €", balance: "11.523,50 €", type: "gasto" },
    ],
  };

  const currentTransactions = activeTab === "Todos" ? transactions.todos : activeTab === "Ingresos" ? transactions.ingresos : transactions.gastos;

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-300">
        <nav className="p-4">
          <div className="mb-4">
            <div
              className="flex items-center justify-between cursor-pointer"
            >
              <h2 className="text-[#2B7594] mb-2 mt-4 text-[16px] leading-[20px] font-bold">
                Cuentas nacionales
              </h2>
            </div>
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
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faArrowLeft} className="text-[#207EA0] mr-2" />
          <Link to="/" className="text-[#207EA0] hover:text-[#005b92]">Volver</Link>
        </div>
 
        {/* Account Information */}
        <div className="bg-white shadow rounded-lg p-4 mb-4 flex justify-between">
          <div className="flex items-center">
            <span className="text-blue-600 text-xl mr-4">🏦</span>
            <div>
              <h2 className="text-lg font-bold">Cuenta</h2>
              <p className="text-sm text-text-[#207EA0]">ES55 2100 0997 6802 0113 8373</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-500">Saldo disponible</p>
            <p className="text-2xl font-bold">+ 11.321,78 €</p>
          </div>
        </div>

        {/* Search and Tabs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faSearch} className="text-[#207EA0] text-lg" />
          </div>
          <div className="flex space-x-6">
            <button
              className={`text-[#207EA0] font-semibold ${activeTab === "Todos" ? "border-b-2 border-[#0070b8]" : ""}`}
              onClick={() => setActiveTab("Todos")}
            >
              Todos
            </button>
            <button
              className={`text-[#207EA0] font-semibold ${activeTab === "Ingresos" ? "border-b-2 border-[#0070b8]" : ""}`}
              onClick={() => setActiveTab("Ingresos")}
            >
              Ingresos
            </button>
            <button
              className={`text-[#207EA0] font-semibold ${activeTab === "Gastos" ? "border-b-2 border-[#0070b8]" : ""}`}
              onClick={() => setActiveTab("Gastos")}
            >
              Gastos
            </button>
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Hoy</h3>
          <ul>
            {currentTransactions.map((transaction) => (
              <li key={transaction.id} className="flex justify-between py-2 border-b border-gray-100">
                <div className="flex items-center">
                  <span className={`bg-gray-100 rounded-full p-2 mr-4 ${transaction.type === "gasto" ? "text-red-500" : "text-green-500"}`}>
                    {transaction.type === "gasto" ? "💳" : "💰"}
                  </span>
                  <div>
                    <p className="font-semibold">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={transaction.type === "gasto" ? "text-red-500" : "text-green-500"}>{transaction.amount}</p>
                  <p className="text-sm text-gray-500">+ {transaction.balance}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
      
      <aside className="w-64 mt-40 bg-white border-l border-gray-300 p-4">
      {/* Opciones y consultas */}
      <div className="bg-white shadow rounded-lg p-4 mb-4">
        <h3 className="text-lg font-semibold mb-4">Opciones y consultas</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/account-details" className="flex items-center">
              <FontAwesomeIcon icon={faUser} className="text-[#207EA0] mr-4" />
              <span className="text-[#207EA0]">Detalle de la cuenta SWIFT, BICC, Titularidad</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#207EA0]" />
          </li>
          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/date-query" className="flex items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-[#207EA0] mr-4" />
              <span className="text-[#207EA0]">Consulta por fecha valor</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#207EA0]" />
          </li>
        </ul>
      </div>

      {/* Accesos directos */}
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">Accesos directos</h3>
        <ul className="space-y-2">
          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/make-transfer" className="flex items-center">
              <FontAwesomeIcon icon={faMoneyCheckAlt} className="text-[#207EA0] mr-4" />
              <span className="text-[#207EA0]">Hacer una transferencia</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#207EA0]" />
          </li>
          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/add-bank" className="flex items-center">
              <FontAwesomeIcon icon={faBank} className="text-[#207EA0] mr-4" />
              <span className="text-[#207EA0]">Añadir banco</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#207EA0]" />
          </li>
          <li className="flex justify-between items-center hover:bg-gray-100 px-2 py-2 rounded-md">
            <Link to="/add-holders" className="flex items-center">
              <FontAwesomeIcon icon={faUserPlus} className="text-[#207EA0] mr-4" />
              <span className="text-[#207EA0]">Añadir titulares</span>
            </Link>
            <FontAwesomeIcon icon={faArrowRight} className="text-[#207EA0]" />
          </li>
        </ul>
      </div>
    </aside>
    </div>
  );
}
