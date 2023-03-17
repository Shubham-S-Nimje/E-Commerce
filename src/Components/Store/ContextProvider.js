import React, { useReducer } from 'react'
import ContectData from './ContectData'

const DefaultcartState = {
    items:[],
    totalAmount:0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD')
    {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        // const updatedItems = state.items.concat(action.item)

        const exsistingCartItemsIndex = state.items.findIndex(
            (item) => item.id === action.item.id);
            
            const existingcartitem = state.items[exsistingCartItemsIndex]
            let updatedItems;
      
            if(existingcartitem) {
              const updatedItem = {
                ...existingcartitem,
                amount: existingcartitem.amount + action.item.amount
              }
      
              updatedItems = [...state.items];
              updatedItems[exsistingCartItemsIndex] = updatedItem;
            }
            else {
              updatedItems = state.items.concat(action.item);
            }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }

    if(action.type === 'REMOVE')
    {
    const exsistingCartItemsIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingcartitem = state.items[exsistingCartItemsIndex];
      const updatedtotalAmount = state.totalAmount - existingcartitem.price;
  
      let updatedItems;
      if(existingcartitem.amount === 1)
      {
        updatedItems = state.items.filter(item => item.id !== action.id)
      }
      else {
        const updatedItem = {...existingcartitem, amount: existingcartitem.amount - 1}
        updatedItems = [...state.items];
        updatedItems[exsistingCartItemsIndex] = updatedItem;
      }
  
      return {
        items : updatedItems,
        totalAmount: updatedtotalAmount
      }
    }

    return DefaultcartState;
}

const ContextProvider = (props) => {

    const [cartState, DispatchcartAction] = useReducer(cartReducer,DefaultcartState)

    const AddtoCartHandler = (item) => {
        DispatchcartAction({type:'ADD',item:item})
    }

    const RemovefromcartHandler = (id) => {
        DispatchcartAction({type:'REMOVE',id:id})
    }

    const CartContext = {
    items:cartState.items,
    totalAmount:cartState.totalAmount,
    addItem:AddtoCartHandler,
    removeItem:RemovefromcartHandler
    }

  return (
    <ContectData.Provider value={CartContext}>
      {props.children}
    </ContectData.Provider>
  )
}

export default ContextProvider
