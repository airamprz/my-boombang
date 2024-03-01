import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 text-white mb-12">
      <div className="flex items-center">
        <img
          src="https://static.boombang.tv/resources/img/logo/logo.webp"
          alt="Logo"
          className="w-32 h-auto"
        />
      </div>

      <div className="flex items-center space-x-8 flex-grow justify-center">
        <a href="#" className="text-white hover:text-gray-300 text-2xl no-underline">
          Inicio
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-2xl no-underline">
          Noticias
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-2xl no-underline">
          Rankings
        </a>
      </div>
      
      <div className="flex items-center space-x-4">
        <a href="#" className="text-white hover:text-gray-300 text-2xl no-underline">
          Registrarse
        </a>
        <a href="#" className="text-white hover:text-gray-300 text-2xl no-underline">
          Iniciar sesión
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

