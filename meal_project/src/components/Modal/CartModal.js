import { useContext, useEffect, useRef, useState } from "react";
import classes from "./CartModal.module.css";
import CardContext from "../../context/CardContext";
import OrderSubmittedModel from "./OrderSubmittedModel";

export default function CartModal({ onClose }) {
  const value = useContext(CardContext);

  const city = useRef();
  const address = useRef();
  const phone = useRef();
  const pincode = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const addressValue = address.current.value;
    const cityValue = city.current.value;
    const phoneValue = phone.current.value;
    const pincodeValue = pincode.current.value;
    if (!addressValue || !cityValue || !phoneValue || !pincodeValue) {
      alert("Please fill in all fields.");
      return;
    }
    const orderData = {
      address: addressValue,
      city: cityValue,
      phone: phoneValue,
      pincode: pincodeValue,
      items: value.items,
      totalAmount: value.totalAmount,
    };

    await fetch(
      "https://meal-project-db-default-rtdb.asia-southeast1.firebasedatabase.app/orderAdress.json",
      {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    setIsFormSubmitted(true);
    value.clearCart();
  };

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
        {isFormSubmitted ? (
          <OrderSubmittedModel
            onClose={onClose}
            setIsFormSubmitted={setIsFormSubmitted}
          />
        ) : value.items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2>Please add some item in cart</h2>
            <button className={classes.button} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            {value.items.map((item) => (
              <div key={item.id} className={classes.itemCard}>
                <div className={classes.itemDetails}>
                  <span>{item.name} </span>
                  <span>
                    <img
                      src={item.imageurl}
                      alt={item.name}
                      className={classes.imgurl}
                    />
                  </span>

                  <span>${item.price.toFixed(2)}</span>
                </div>

                <div className={classes.controls}>
                  <button
                    className={classes.button}
                    onClick={() => removeItemHandler(item.id)}
                  >
                    -
                  </button>
                  <span>x{item.quantity}</span>
                  <button
                    className={classes.button}
                    onClick={() => addItemHandler(item)}
                  >
                    +
                  </button>
                </div>

                <div className={classes.totalPrice}>
                  ${(item.quantity * item.price).toFixed(2)}
                </div>
              </div>
            ))}

            <div className={classes.total}>
              <span>Total Amount</span>
              <span>${value.totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.adressForm}>
              <form onSubmit={onFormSubmit}>
                <label htmlFor="address">Enter your address :</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required 
                  ref={address}
                  maxLength={100}
                />
                <label type="text" id="city" name="city" required>
                  Enter Your City :
                </label>
                <input type="text" id="city" name="city" required ref={city}
                maxLength={30} />
                <label htmlFor="phone">Enter your phone number :</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  ref={phone}
                  maxLength={10}
                />
                <label htmlFor="pincode">Enter your pincode :</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  required
                  ref={pincode}
                  maxLength={6}
                />
                <div className={classes.actions}>
                  <button className={classes["button--alt"]} onClick={onClose}>
                    Cancel
                  </button>
                  <button className={classes.button} type="submit">
                    Order
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  );
}
