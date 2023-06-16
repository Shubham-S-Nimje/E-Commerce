import React from 'react';

const ContectData = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  cartItems: [],
  totalAmount: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

export default ContectData;
