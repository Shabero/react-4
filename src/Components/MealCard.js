import React from 'react';

const MealCard = ({meal}) => {
    return (
        <div className={'box'}>
            <img src={meal?.strMealThumb} alt=""/>
            <h5 className={'title'}>{meal?.strMeal}</h5>
            <p className={'description'}>{meal?.strCategory}</p>
        </div>
    )
}

export default MealCard;