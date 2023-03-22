import React from 'react'

const ContectData = React.createContext({
    token: '',
    isLoggedIn: false,
    Login: (token) => {},
    logout: () => {},
    items:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default ContectData;
