import React from "react";
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import desodoranteLogo from '@/assets/logo-nata.png';
import testimonio1 from '@/assets/deodor.png';
import testimonio2 from '@/assets/deodor.png';
import testimonio3 from '@/assets/deodor.png';
import Header from "../components/header/Header";
import Shop from "./Shop";

export default function DesodorantePage() {
  return (
    <div className="flex flex-col min-h-screen bg-pastel-pink text-gray-900 font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-40 bg-cover mt-10 bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/background.webp')" }}>
        <div className="absolute inset-0 bg-white opacity-90"></div>
        <div className="relative max-w-3xl">
          <h1 className="text-6xl font-bold text-brown-800 leading-tight">Frescura Natural, Protección Duradera</h1>
          <p className="text-xl text-gray-700 mt-4">Un desodorante inspirado en la naturaleza para mantenerte fresca todo el día.</p>
          <Button className="mt-6 bg-red-300 text-white hover:bg-brown-700 px-8 py-3 text-lg font-medium">Comprar ahora</Button>
        </div>
      </section>

      <Shop />
      
      {/* Testimonios */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-bold text-brown-800">Lo que dicen nuestras clientes</h2>
        <div className="container mx-auto px-4 flex justify-center flex-wrap gap-8">
          {[testimonio1, testimonio2, testimonio3].map((img, index) => (
            <div key={index} className="w-full md:w-1/3">
              <img src={img} alt={`Testimonio ${index + 1}`} className="w-40 h-40 mx-auto rounded-full shadow-lg" />
              <p className="text-gray-700 mt-4 italic">"Un aroma fresco y natural que dura todo el día."</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-brown-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <img src={desodoranteLogo} alt="Logo" className="h-20 mx-auto mb-4" />
          <p className="text-gray-300 text-lg">Desodorante natural by Natalia Cardona</p>
          <div className="mt-6 flex justify-center gap-6">
            <Phone className="w-6 h-6 text-pink-300" />
            <Mail className="w-6 h-6 text-pink-300" />
            <MapPin className="w-6 h-6 text-pink-300" />
            <Instagram className="w-6 h-6 text-pink-300" />
          </div>
          <p className="mt-6 text-gray-400 text-sm">&copy; 2025 Desodorante natural by Natalia Cardona. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
