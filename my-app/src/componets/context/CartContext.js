import React from 'react';

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
    return <CartContext.Provider>{children}</CartContext.Provider>;
};
