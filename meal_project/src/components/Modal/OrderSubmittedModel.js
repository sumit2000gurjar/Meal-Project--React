import React from 'react'
import styles from './CartModal.module.css';

const OrderSubmittedModel = ({onClose ,setIsFormSubmitted}) => {


    const onOrderClose = () => {
      setIsFormSubmitted(false);
       onClose();
    }


  return (
    <div>

  <div >
    <>
      <h1>Order Submitted Successfully!</h1>
      <p>Thank you for your order</p>
      <button   className={styles.button} onClick={onOrderClose}>Close</button>
    </>
  </div>
  
    
    </div>
  )
}

export default OrderSubmittedModel