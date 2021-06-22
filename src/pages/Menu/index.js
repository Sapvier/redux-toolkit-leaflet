import React, {useEffect} from 'react';
import "./styles.scss"
import Categories from "./components/Categories";
import {useDispatch, useSelector} from "react-redux";
import {saveCategories} from "../../reducers/categories/categoriesSlice";

const Menu = () => {
    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(r => r.json())
            .then(r => dispatch(saveCategories(r.categories.slice(0,12))))
    }, [])

    return (
        <div className="page-container">
            {!categories && <h5>Loading...</h5>}
            {categories && <Categories data={categories}/>}
        </div>
    );
}

export default Menu;
