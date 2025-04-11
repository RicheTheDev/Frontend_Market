// src/components/Navbar.jsx
import { useState } from 'react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <i className="fas fa-store text-indigo-600 text-2xl mr-2"></i>
              <span className="text-xl font-bold text-indigo-600">ConnectMarket</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a href="#" className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Accueil</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Marchands</a>
              <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Catégories</a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-login'))}className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">Connexion</button>
          <button onClick={() => window.dispatchEvent(new CustomEvent('open-register'))} className="ml-4 bg-white hover:bg-gray-50 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 transition-all">Inscription</button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open main menu</span>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <a href="#" className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Accueil</a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Marchands</a>
            <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Catégories</a>
            <div className="mt-4 p-2">
            <button onClick={() => window.dispatchEvent(new CustomEvent('open-login'))}className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all">Connexion</button>
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-register'))} className="ml-4 bg-white hover:bg-gray-50 text-indigo-600 px-4 py-2 rounded-md text-sm font-medium border border-indigo-600 transition-all">Inscription</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
