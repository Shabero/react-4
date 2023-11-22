import React from 'react';
import HomePage from "./Pages/HomePage";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage";

const  App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage /> }/>
            <Route path={"/search"} element={<SearchPage />} />
        </Routes>
    )
}

export default App