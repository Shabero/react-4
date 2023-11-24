import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import IngredientList from "../../Components/IngredientList/IngredientList";
import Loader from "../../Components/Loader/Loader";
import Header from "../../Components/Header/Header";
import "./style.css";


const MealPage = () => {
    const {idMeal} = useParams()
    const [meal, setMeal] = useState({})
    const [ingredients, setIngredients] = useState([]);

    const filterIngredients = (meal) => {
        const newIngredients = [];
        for (const key in meal) {
            if (key.startsWith('strIngredient') && meal[key] !== null && meal[key] !== '') {
                const ingredientNumber = key.slice(13);
                const measure = meal[`strMeasure${ingredientNumber}`];
                newIngredients.push({
                    ingredient: meal[key],
                    measure: measure || ''
                });
            }
        }
        setIngredients(newIngredients);
    };

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then(({data}) => {
                filterIngredients(data.meals[0])
                setMeal(data.meals[0])
            })
    }, [idMeal]);

    if (!meal.idMeal || !ingredients.length) {
        return <Loader />
    } else {
        return (
           <>
                <div>
                    <Header />
                </div>
                <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="box">
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="box">
                                                    <h2 className={'text-center '}>{meal.strMeal}</h2>
                                                </div>
                                            </div>
                                            <div className="col-7">
                                                <div className="box">
                                                    <p className={'pb-4'}>{meal.strInstructions}</p>
                                                    <iframe className="rounded-3"
                                                        src={`https://www.youtube.com/embed/${meal.strYoutube?.slice(meal.strYoutube.indexOf('=')+1)}`}
                                                        frameBorder="0"></iframe>
                                                </div>
                                            </div>
                                            <div className="col-5">
                                                <div className="box">
                                                    <img src={meal.strMealThumb} className="main-img" alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="box">
                                        <IngredientList ingredients={ingredients}/>
                                    </div>
                                </div>
                            </div>
                        </div>
           </> 
        )
    }
}

export default MealPage;