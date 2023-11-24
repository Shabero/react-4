import React, {useState} from 'react';
import Header from "../../Components/Header/Header";
import axios from "axios";
import MealList from "../../Components/MealList/MealList";

const SearchPage = () => {
    const [value, setValue] = useState([])
    const [name, setName] = useState('')
    const searchMeals = () => {
        axios(`https://www.themealdb.com/api/json/v2/1/search.php?s=${name}`)
            .then(({data}) => setValue(data.meals))
    }
    console.log(value)
    const handleGetValue = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    return (
        <>
            <Header />
            <div className={'container'}>
                <h2 className={'p-4'}><b>Search</b></h2>
                <div className={"d-flex align-items-center p-4"}>
                    <input type="text" className={"p-2 rounded-3 border-dark border-1"} onChange={handleGetValue}/>
                    <button className={"p-2 btn btn-outline-dark border-2"} onClick={searchMeals}>Search</button>
                </div>
                <MealList meals={value} />
            </div>
        </>
    )
}
export default SearchPage;