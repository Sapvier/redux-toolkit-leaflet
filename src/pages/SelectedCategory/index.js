import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import MealsList from "./MealsList";

const SelectedCategory = () => {
    const [meals, setMeals] = useState(null)
    const history = useHistory()
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${history.location.state}`)
            .then(r => r.json())
            .then(r => setMeals(r.meals))
    }, [])

    return (
        <div className="page-container">
            {meals && <MealsList meals={meals}/>}
        </div>
    );
};

export default SelectedCategory;