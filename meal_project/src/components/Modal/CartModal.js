import { useContext } from 'react';
import classes from './CartModal.module.css';
import CardContext from '../../context/CardContext';

export default function CartModal({ onClose }) {
  const value = useContext(CardContext);

  const removeItemHandler = (id) => {
    value.removeItem(id);
  };

  const addItemHandler = (item) => {
    const newItem = { ...item, quantity: 1 };
    value.addItem(newItem);
  };

  return (
    <>
      {/* Backdrop */}
      <div className={classes.backdrop} onClick={onClose}></div>

      {/* Modal Box */}
      <div className={classes.modal}>
        {value.items.map(item => (
          <div key={item.id} className={classes.itemCard}>
            <div className={classes.itemDetails}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </div>

            <div className={classes.controls}>
              <button className={classes.button} onClick={() => removeItemHandler(item.id)}>-</button>
              <span>x{item.quantity}</span>
              <button className={classes.button} onClick={() => addItemHandler(item)}>+</button>
            </div>

            <div className={classes.totalPrice}>
              ${ (item.quantity * item.price).toFixed(2) }
            </div>
          </div>
        ))}

        <div className={classes.total}>
          <span>Total Amount</span>
          <span>${value.totalAmount.toFixed(2)}</span>
        </div>

        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onClose}>Cancel</button>
          <button className={classes.button} onClick={onClose}>Order</button>
        </div>
      </div>
    </>
  );
}
