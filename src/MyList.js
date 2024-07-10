const MyList = ({addMeal, mealPlan, deleteItem, selectedDay, setSelectedDay}) => {
    return (
        <div>
            <h1>Weekly Meal Plan Ideas</h1>
            <button className="button-add" onClick={addMeal}>Add</button>
            
            {mealPlan.map (({title,id, mealForADay}) => (
                    <div className={`meal ${id === selectedDay ? "selected" : "default"}`} key={id} onClick={()=>{setSelectedDay(id)}}>
                        <p>{title}</p>
                        <p>{mealForADay.substring (0,50)}</p>
                        <button className="button-delete" onClick={() => deleteItem(id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}
export default MyList;