import React from 'react'
import classes from './Header.module.css'
import meal  from '../../assets/food.jpg'
import HeaderCartButton from './HeaderCartButton'
import { useState } from 'react'
import CartModal from '../Modal/CartModal'

const Header = () => {

 const[showCart, setShowCart] = useState(false);
  const openCartHandler =()=>{
    setShowCart(true);
  }

  const closeCartHandler=()=>{
    setShowCart(false);
  }

  return (
  <React.Fragment>
    <header className={classes.header}>
<h1>Meals🥗</h1>
<HeaderCartButton onClick={openCartHandler} />
</header>
 {showCart && <CartModal onClose={closeCartHandler} />}
<div className={classes['main-image']}>
    <img src={meal} alt="a table full of meal"/>

</div>

  </React.Fragment>      

  )
}

export default Header

