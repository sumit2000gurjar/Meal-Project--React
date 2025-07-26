import React, { useContext } from 'react'

import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CardContext from '../../context/CardContext'

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CardContext);
  console.log("Crtctx value", cartCtx.totalQuantity);
  return (
   <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
  <CartIcon/>
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{cartCtx.totalQuantity ||0}</span>
   </button>
  )
}

export default HeaderCartButton;
