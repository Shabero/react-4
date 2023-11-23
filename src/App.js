import React from 'react';
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";
import MealPage from "./Pages/MealPage";

const  App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage /> }/>
            <Route path={"/search"} element={<SearchPage />} />
            <Route path={"/meal/:idMeal"} element={<MealPage />}/>
        </Routes>
    )
}

export default App