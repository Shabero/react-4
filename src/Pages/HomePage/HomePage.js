import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import axios from "axios";
import MealList from "../../Components/MealList/MealList";

const HomePage = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({ data }) => setMeals(data.meals))
    },[])

    return (
        <>
            <div >
                <Header />
            </div>
            <div className={'container'}>
                <h1 className={'p-3'}>
                    <b>Meals</b>
                </h1>
                <MealList meals={meals}/>
            </div>
        </>
    )
}
export default HomePage