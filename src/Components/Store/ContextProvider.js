import React, { useReducer, useState, useEffect } from 'react';
import ContectData from './ContectData';

const DefaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REPLACE') {
    return action.cartData;
  }

  return state;
};

const ContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    DefaultCartState
  );
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem('token', token.idToken);
    localStorage.setItem('userlocalid', token.localId);
    setTimeout(() => {
      localStorage.setItem('token', '');
      localStorage.setItem('userlocalid', '');
    }, 300000);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.setItem('token', '');
    localStorage.setItem('userlocalid', '');
  };

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart && storedCart.items.length > 0) {
      dispatchCartAction({ type: 'REPLACE', cartData: storedCart });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  const cartContext = {
    token: token,
    isLoggedIn: userLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler,
  };

  return (
    <ContectData.Provider value={cartContext}>
      {props.children}
    </ContectData.Provider>
  );
};

export default ContextProvider;
