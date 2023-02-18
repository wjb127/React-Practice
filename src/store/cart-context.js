import React from 'react';

// 카트 컨텍스트 구현하기 
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default CartContext;