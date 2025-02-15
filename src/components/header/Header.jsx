import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCartStore } from '@/store/cartStore';
import desodoranteLogo from '@/assets/logo-nata.png';
import { Button } from '@/components/ui/button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { items } = useCartStore();
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
            {/* Barra de anuncios */}
            <div className="bg-black text-white text-sm py-2 text-center">
                🍃 Envío gratuito en Manizales para órdenes sobre $200.000 COP 🍃
            </div>

            {/* Navbar */}
            <div className="flex bg-red-100 items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img src={desodoranteLogo} alt="desodorante" className="h-12" />
                </Link>

                {/* Menú principal */}
                <nav className="hidden lg:flex space-x-8">
                    {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
                        <Link key={item} to="#" className="font-medium hover:text-green-700 transition">
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Iconos */}
                <div className="flex items-center space-x-4">
                    {/* Carrito */}
                    <button className="relative">
                        <ShoppingCart className="h-6 w-6 text-gray-700" />
                        {itemCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2">
                                {itemCount}
                            </span>
                        )}
                    </button>

                    {/* Menú móvil */}
                    <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Menú móvil */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-md absolute w-full py-4 flex flex-col items-center space-y-4">
                    {['Inicio', 'Productos', 'Nosotros', 'Contacto'].map((item) => (
                        <Link key={item} to="#" className="font-medium hover:text-green-700 transition" onClick={() => setMenuOpen(false)}>
                            {item}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
