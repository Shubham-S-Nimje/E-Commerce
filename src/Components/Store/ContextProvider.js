import React, { useReducer, useState } from 'react'
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
    const initialtoken = localStorage.getItem('token')
    const [token, SetToken] = useState(initialtoken)

    const userLoggedIn = !!token;

    const LoginHandler = (token) => {
        SetToken(token)
        localStorage.setItem('token',token.idToken)
        localStorage.setItem('userlocalid',token.localId)
        setTimeout(() => {
            localStorage.setItem('token','')
            localStorage.setItem('userlocalid','')
        }, 300000);
    }

    const LogoutHandler = () => {
        SetToken(null)
        localStorage.setItem('token','')
        localStorage.setItem('userlocalid','')
    }

    const AddtoCartHandler = (item) => {
        DispatchcartAction({type:'ADD',item:item})
    }

    const RemovefromcartHandler = (id) => {
        DispatchcartAction({type:'REMOVE',id:id})
    }
    // useEffect(() => {
    //   fetch('https://crudcrud.com/api/4075e82d7d9941969d0f9594c70a6964/enteredemail')
    // .then(res => res.json())
    // .then(data => setAPIData(data))
    // }, [])

    const CartContext = {
      token: token,
      isLoggedIn: userLoggedIn,
      Login: LoginHandler,
      logout: LogoutHandler,
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: AddtoCartHandler,
      removeItem: RemovefromcartHandler,
    };

    const showitem = (data) => {
      console.log(data)
   }

  return (
    <ContectData.Provider value={CartContext} showitem={showitem}>
      {props.children}
    </ContectData.Provider>
  )
}

export default ContextProvider