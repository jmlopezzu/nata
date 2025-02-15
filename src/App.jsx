import React from 'react';
import Routes from './routes/Routes';
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <div>
      <Routes />
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/3136096845"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

export default App;
