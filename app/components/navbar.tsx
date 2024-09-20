import { Link } from "@remix-run/react";
import { FaHome, FaClock, FaEnvelope, FaRobot, FaUserCircle } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-6 py-2">
        
        {/* First Row: Logo and Icons */}
        <div className="flex justify-between items-center mb-2">
          {/* Left Side: Logo CaixaBank */}
          <div className="flex items-center">
            <img src="https://res.cloudinary.com/dqefnwijm/image/upload/v1726772869/xlvxrp87dkd04z30sffu.png" alt="CaixaBank" className="h-14 mr-4" />
            <div className="flex flex-col">
              {/* CaixaBankNow in italic */}
              <span className="font-bold text-2xl italic">CaixaBankNow</span>
            </div>
          </div>

             {/* Right Side: Icons and User Info */}
             <div className="flex justify-end items-center space-x-4">
          
          {/* Clock Icon */}
          <button className="hover:text-gray-300">
            <FaClock className="text-2xl" />
          </button>

          {/* Envelope Icon with Notification Dot */}
          <button className="relative hover:text-gray-300">
            <FaEnvelope className="text-2xl" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
          </button>

          {/* Robot Icon */}
          <button className="hover:text-gray-300">
            <FaRobot className="text-3xl" />
          </button>

          {/* Mi gestor */}
          <div className="flex items-center space-x-1">
            <MdOutlineSupervisorAccount className="text-xl" /> {/* Icono Mi Gestor */}
            <span className="hover:text-gray-300 cursor-pointer">Mi gestor</span>
          </div>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300 mx-3"></div>

          {/* User Information */}
          <div className="flex items-center space-x-2">
            <FaUserCircle className="text-2xl" /> {/* Icono de Usuario */}
            <span className="font-bold">AMALIA</span>
            <span>-</span>
            <Link to="/cambiar" className="hover:text-gray-300 underline">Cambiar de</Link>
          </div>

          {/* Company Name */}
          <span className="font-light text-gray-400">TECH AI SOLUTIONS S.L</span>

          {/* Exit Button */}
        </div>

        </div>
        {/* Second Row: Navigation Links */}
        <div className="flex space-x-8 mt-4">
          <Link to="/" className="flex items-center space-x-2 hover:text-gray-300">
            <FaHome className="text-2xl" />
          </Link>
          <Link to="/cuentas" className="font-opensans text-lg hover:text-gray-300">Cuentas</Link>
          <Link to="/cuentas" className="text-lg hover:text-gray-300">Cobros</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Pagos</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Tarjetas</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Financiación</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Import-Export</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Inversión</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Servicios</Link>
          <Link to="/pagos" className="text-lg hover:text-gray-300">Ficheros</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
