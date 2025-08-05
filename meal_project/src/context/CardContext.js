import { createContext } from "react";


const CardContext = createContext({
  items: [],
  totalAmount: 0,
  totalQuantity:0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},  
});

export default CardContext;