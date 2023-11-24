import React from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import MealPage from "./Pages/MealPage/MealPage";
import IngredientsPage from './Pages/IngredientPage/IngredientPage';


const  App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage /> }/>
                <Route path={"/search"} element={<SearchPage />} />
                <Route path={"/meal/:idMeal"} element={<MealPage />}/>
                <Route path={"/ingredient/:name"} element={ <IngredientsPage/> }/>
            </Routes>
        </>
    )
}

export default App