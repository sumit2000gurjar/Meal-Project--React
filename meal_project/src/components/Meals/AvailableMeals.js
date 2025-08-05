import React, { useEffect } from "react";
import classes from './AvailableMeals.module.css'
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = () => {
  const [meals,setMeals]= React.useState([]);

  useEffect(() => {
  fetch("https://meal-project-db-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json")
    .then(res => res.json())
    .then(data => {
      // console.log(" Data: ", data); 
      const loadedMeals = [];

      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
          imageurl: data[key].imageurl,
        });
      }

      setMeals(loadedMeals);
    });
}, []);


    const mealsList=meals.map((meal)=>( 

    <MealItem 
        key={meal.id}
        id={meal.id}
        name={meal.name} 
        imageurl={meal.imageurl} 
        description={meal.description}
        price={meal.price}/>
        
      ))
   
  return( <section className={classes.meals}>
    <Card><ul>{mealsList} </ul></Card> 
   
  
  </section>)
 
};

export default AvailableMeals;
