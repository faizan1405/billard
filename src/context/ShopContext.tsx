import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data/billiardsData';

interface ShopContextType {
  cart: CartItem[];
  wishlistIds: string[];
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  quickViewProduct: Product | null;
  toastMessage: string | null;
  
  // Cart Actions
  addToCart: (product: Product, quantity?: number, selectedColor?: string, selectedFinish?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  setIsCartOpen: (open: boolean) => void;

  // Wishlist Actions
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  setIsWishlistOpen: (open: boolean) => void;

  // Quick View & Search
  setQuickViewProduct: (product: Product | null) => void;
  setIsSearchOpen: (open: boolean) => void;

  // Toast
  showToast: (message: string) => void;

  // Computed
  cartCount: number;
  cartSubtotal: number;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Prepopulate cart with 1 luxury item for rich client demo
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: PRODUCTS[1], // Carbon X Pro Cue
      quantity: 1,
      selectedFinish: 'Matte Graphite'
    }
  ]);
  
  // Prepopulate 2 wishlist items for instant visual engagement
  const [wishlistIds, setWishlistIds] = useState<string[]>([PRODUCTS[0].id, PRODUCTS[2].id]);
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const addToCart = (product: Product, quantity = 1, selectedColor?: string, selectedFinish?: string) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, quantity, selectedColor, selectedFinish }];
    });
    showToast(`Added "${product.name}" to your shopping bag.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from shopping bag.');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed "${product.name}" from your wishlist.`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Saved "${product.name}" to your private wishlist.`);
        return [...prev, product.id];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlistIds.includes(productId);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlistIds,
        isCartOpen,
        isWishlistOpen,
        isSearchOpen,
        quickViewProduct,
        toastMessage,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        setIsCartOpen,
        toggleWishlist,
        isInWishlist,
        setIsWishlistOpen,
        setQuickViewProduct,
        setIsSearchOpen,
        showToast,
        cartCount,
        cartSubtotal
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
};
