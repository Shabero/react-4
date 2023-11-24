import React, {useEffect, useState} from "react";
import axios from "axios";
import MealList from "../../Components/MealList/MealList";
import {useParams} from "react-router-dom";
import './style.css'
import Header from "../../Components/Header/Header";

const IngredientsPage = () => {
    const {name} = useParams()
    const [ingredient, setIngredient] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data}) => {
                setIngredient(data.meals)
            })
    }, []);


    return (
        <>
            <div>
                <Header />
            </div>
            <div className={'container'}>
                <div>
                    <div>
                        <h2 className={'name pt-5'}>{name}</h2>
                            <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
                    </div>
                    <MealList meals={ingredient}/>
                </div>
            </div>
        </>
    )
}

export default IngredientsPage