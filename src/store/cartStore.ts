import { create } from 'zustand';

interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

interface CartStore {
    items: CartItem[];
    addItem: (product: { id: number; name: string; price: number }) => void;
    removeItem: (productId: number) => void;
    cartOpen: boolean;
    toggleCart: (state: boolean) => void;
}

export const useCartStore = create<CartStore>((set) => ({
    items: [],
    cartOpen: false,
    toggleCart: (state) => set({ cartOpen: state }),
    addItem: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
            return {
                items: state.items.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            };
        }
        return { items: [...state.items, { ...product, quantity: 1 }] };
    }),
    removeItem: (productId) => set((state) => {
        const existingItem = state.items.find(item => item.id === productId);
        if (existingItem?.quantity === 1) {
            return { items: state.items.filter(item => item.id !== productId) };
        }
        return {
            items: state.items.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        };
    }),
}));