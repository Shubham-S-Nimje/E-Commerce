import React from 'react'

const ContectData = React.createContext({
    items:[],
    totalAmount:0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default ContectData;
