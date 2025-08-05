import { useReducer } from "react";

import CardContext from "./CardContext";


const cartReducer = (state, action) => {
  // ✅ Add Item
  if (action.type === 'Add_Item') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    // console.log("existingItemIndex",existingItemIndex);
    const existingItem = state.items[existingItemIndex];
    // console.log("existingItem",existingItem)
    let updatedItems;

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
    const updatedTotalQuantity = Number(state.totalQuantity) + Number(action.item.quantity);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalQuantity:updatedTotalQuantity
    };
  }

  // ❌ Remove Item
  if (action.type === 'REMOVE_ITEM') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingItemIndex];

    if (!existingItem) return state; // safety

    let updatedItems;

    if (existingItem.quantity === 1) {
      // 👋 Remove the item completely
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      // ➖ Decrease quantity
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    const updatedTotalAmount = state.totalAmount - existingItem.price;
    const updatedTotalQuantity = Number(state.totalQuantity) - 1;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
       totalQuantity:updatedTotalQuantity
    };
  }

  if (action.type === 'CLEAR_CART') {
    return defaultCartState;
  
  }

  return state;
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};


const CartProvider =({ children })=>{
    const[cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartState);

  const addItemToCartHandler=(item)=>{
   dispatchCartAction({type:'Add_Item' , item:item})
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR_CART' });
  }

  const cartContextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalQuantity:cartState.totalQuantity,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,

  };

  return (
    <CardContext.Provider value={cartContextValue}>
      {children}
    </CardContext.Provider>
  );
  }


 



export default CartProvider;