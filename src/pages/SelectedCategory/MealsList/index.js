import React from 'react';
import Card from "../../../components/Card";

const MealsList = ({meals}) => {
    return (
        <div>
            {meals.map(item => {
                    const {strMeal, idMeal, strMealThumb} = item
                    return <Card key={idMeal} item={{
                        id: idMeal,
                        title: strMeal,
                        thumb: strMealThumb
                    }}/>
                }
            )}
        </div>
    );
};

export default MealsList;