const MyMealsAndIngridients = ({selectedDay, updatedDay}) => {
    const editMyMeals = (myInput, value) => {
        updatedDay({
            ...selectedDay,
            [myInput]: value
        })
    }
   

    if (!selectedDay) {
        return <p className="textFirst">Would you like to make a meal plan!</p>
    }
    return (
        <div className="whole-plan">
            <div className="meal-editing">
                <input 
                className="myInput" 
                type="text" 
                placeholder="Today is..." 
                id = "title"
                value = {selectedDay.title}
                onChange = {(e) => editMyMeals("title", e.target.value)}
                />

                <textarea 
                placeholder="Enter your meal plan here..."
                id = "mealForADay"
                value = {selectedDay.mealForADay}
                onChange={(e) => editMyMeals("mealForADay", e.target.value)}/>


                <textarea 
                placeholder="List of Ingredients"
                id = "ingridientsForADay"
                value = {selectedDay.ingridientsForADay}
                onChange={(e) => editMyMeals("ingridientsForADay", e.target.value)}/>


            </div>
        </div>
    )
}
export default MyMealsAndIngridients;