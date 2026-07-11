import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item or increment quantity if it already exists
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  // Remove completely or decrease quantity
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Add this function beneath your removeFromCart definition
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      // If quantity drops to 0, completely remove the item from the state
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
    } else {
      // Otherwise, update the quantity field directly
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  

  // Total count of all items in the cart
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,updateQuantity, getCartCount }}>
      ={children}
    </CartContext.Provider>
  );


};





export const useCart = () => useContext(CartContext);