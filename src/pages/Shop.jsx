import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart } from 'lucide-react';

const Shop = () => {
    const { addItem, removeItem, items } = useCartStore();
    const [showCart, setShowCart] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState({});
    
    const products = [
        {
            id: 1,
            name: "Desodorante Natural Lavanda",
            desc: "Fórmula natural con aceites esenciales de lavanda para una frescura duradera sin químicos agresivos.",
            price: 45000,
            images: ["producto1.webp", "p2.webp", "lavanda3.jpg"]
        },
        {
            id: 2,
            name: "Desodorante Natural Cítricos",
            desc: "Refrescante mezcla de cítricos que protege tu piel y elimina el mal olor de manera efectiva y natural.",
            price: 45000,
            images: ["pcitric.webp", "citricos2.jpg", "citricos3.jpg"]
        },
        {
            id: 3,
            name: "Desodorante Natural Coco y Karité",
            desc: "Hidratación profunda y protección duradera con el poder del coco y la manteca de karité.",
            price: 50000,
            images: ["coco.webp", "coco2.jpg", "coco3.jpg"]
        },
    ];

    const formatPrice = (price) => new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
    }).format(price);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return (
        <div>
            <section className="py-20 bg-gray-100 relative">
                <div 
                    className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-white p-4 rounded-full shadow-lg cursor-pointer hover:shadow-xl transition-all"
                    onClick={() => setShowCart(!showCart)}
                >
                    <ShoppingCart className="h-6 w-6 text-gray-700" />
                    <span className="font-bold text-gray-700">{totalItems}</span>
                </div>

                {showCart && (
                    <div className="fixed bottom-20 right-4 bg-white p-6 rounded-xl shadow-xl z-50 w-80 max-h-[60vh] overflow-y-auto">
                        <h3 className="text-xl font-bold mb-4">Tu Orden</h3>
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-3">
                                <div>
                                    <p className="font-medium">{item.name}</p>
                                    <p className="text-sm text-gray-500">x{item.quantity}</p>
                                </div>
                                <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                            </div>
                        ))}
                        <div className="border-t mt-4 pt-4">
                            <div className="flex justify-between font-bold">
                                <span>Total:</span>
                                <span>{formatPrice(totalAmount)}</span>
                            </div>
                            <Button
                                className="w-full mt-4 bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                    const message = `¡Hola! Quiero comprar:%0A%0A${
                                        items.map(item => `- ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`).join('%0A')
                                    }%0A%0ATotal: ${formatPrice(totalAmount)}%0A%0A¿Cómo puedo finalizar la compra?`;

                                    window.open(`https://wa.me/573136096845?text=${message}`, '_blank');
                                }}
                            >
                                Finalizar compra
                            </Button>
                        </div>
                    </div>
                )}

                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Nuestros Desodorantes</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {products.map((product) => {
                            const itemQuantity = items.find(item => item.id === product.id)?.quantity || 0;
                            
                            return (
                                <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-lg relative hover:shadow-xl transition-shadow">
                                    {itemQuantity > 0 && (
                                        <div className="absolute top-2 right-2 bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                                            {itemQuantity} en tu orden
                                        </div>
                                    )}
                                    <div className="w-full">
                                        <img 
                                            src={product.images[selectedImageIndex[product.id] || 0]} 
                                            alt={product.name} 
                                            className="w-full h-80 object-cover transition-opacity duration-300"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col justify-between">
                                        <h3 className="text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                                        <p className="text-gray-600 line-clamp-4 mb-4">{product.desc}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-green-700">{formatPrice(product.price)}</span>
                                            <div className="flex items-center gap-2">
                                                <Button onClick={() => removeItem(product.id)} variant="outline" className="border-gray-700 text-gray-700">-</Button>
                                                <span>{itemQuantity}</span>
                                                <Button onClick={() => addItem({ id: product.id, name: product.name, price: product.price })} variant="outline" className="border-gray-700 text-gray-700">+</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Shop;
