import React from "react";
import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "susi",
    description: "spices fish and vegies...",
    price: 22.09,
  },
  {
    id: "m2",
    name: "burger",
    description: " burger spices fish and vegies...",
    price: 22.39,
  },
  {
    id: "m3",
    name: "Pasta",
    description: " Pasta spices fish and vegies...",
    price: 13.9,
  },
  {
    id: "m4",
    name: "Green bowl",
    description: "Green bowl spices fish and vegies...",
    price: 12.6,
  },
];

const AvailableMeals = () => {
    const mealsList=DUMMY_MEALS.map((meal)=>( 
    <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name} 
        description={meal.description}
        price={meal.price}/>))
   
  return( <section className={classes.meals}>
    <Card><ul>{mealsList} </ul></Card> 
   
  
  </section>)
 
};

export default AvailableMeals;
