
import { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

import MyList from './MyList';
import MyMealsAndIngridients from './MyMealsAndIngridients';

function App() {
  const [mealPlan,setMealPlan] = useState(
    localStorage.mealPlan ? JSON.parse(localStorage.mealPlan) : []);
  const [selectedDay, setSelectedDay] = useState(false);


 useEffect(()=>{
  localStorage.setItem("mealPlan", JSON.stringify(mealPlan))
 },[mealPlan]);

  const addMeal = () => {
    const newMeal = {   
      title: "Today is...",
      id: uuidv4(),
      mealForADay: "",
      ingridientsForADay: ""
    }
    setMealPlan([newMeal, ...mealPlan])
    console.log(newMeal)
  }

  const deleteItem = (mealId) => {    
    setMealPlan( mealPlan.filter (({id}) => id !== mealId))
  }

  const updatedDay = (myUpdatedMeal) => {
    const updatedMeals = mealPlan.map ((mealPlan) => {
      if (mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlan(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlan.find (({id}) => id === selectedDay)
  }
  return (
    <div className='container'>
     <MyList addMeal = {addMeal} 
            mealPlan = {mealPlan} 
            deleteItem = {deleteItem} 
            selectedDay = {selectedDay} 
            setSelectedDay = {setSelectedDay}/>
     <MyMealsAndIngridients selectedDay = {getActiveMeal()} updatedDay = {updatedDay}/>
    </div>
  );
}

export default App;
