import React from 'react';
import MealCard from "./MealCard";


const MealList = ({meals,value}) => {
    if (!meals) {
        return (
            <div className={'d-flex justify-content-center'}>
                <h2 className={'text-black '}>
                    Not Found!
                </h2>
            </div>
        )
    }

    return (
        <div className={'row'}>
            {
                meals.map(meal =>
                    <div
                        key = {meal.idMeal}
                        className = {'col-4'}
                    >
                        <MealCard meal = {meal} />
                    </div>
                )
            }
        </div>
    )
}

export default MealList