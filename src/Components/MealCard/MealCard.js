import React from 'react';
import {Link} from "react-router-dom";

const MealCard = ({meal}) => {
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h5 className={'title'}>
                <Link to={`/meal/${meal?.idMeal}`}>
                    {meal?.strMeal}
                </Link>
            </h5>
            <p className={'description'}>{meal?.strCategory}</p>
        </div>
    )
}

export default MealCard;