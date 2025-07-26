import React, { useContext, useState } from "react";
import classes from "./MealsItem.module.css";
import CardContext from "../../../context/CardContext";

const MealItem = (props) => {
  const value = useContext(CardContext);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const price = `$${props.price.toFixed(2)}`;
  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
  };
  const onAddButtonClick = (qty) => {
    const item = {
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      quantity: Number(qty),
    };

    value.addItem(item); // yahi data context me jaayega

    setShowNotification(true);

    // ✅ Hide after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    // ✅ Reset quantity to 1
    setQuantity(1);
  };

  return (
    <li
      className={classes.meal}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div>
          <label htmlFor={`quantity_${props.id}`}>Quantity:</label>
          <input
            id={`quantity_${props.id}`}
            type="number"
            min={1}
            max={3}
            value={quantity}
            onChange={quantityChangeHandler}
            style={{ width: "60px", marginLeft: "0.5rem" }}
          />
        </div>
        <button
          className={classes.button}
          onClick={() => onAddButtonClick(quantity)}
        >
          + Add
        </button>

        {showNotification && (
          <div className={classes.notification}>
            ✅ Your item is added to cart!
          </div>
        )}
      </div>
    </li>
  );
};

export default MealItem;
