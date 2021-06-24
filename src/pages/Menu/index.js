import React, {useEffect} from 'react';
import "./styles.scss"
import Categories from "./components/Categories";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories, saveCategories} from "../../reducers/categories/categoriesSlice";

const Menu = () => {
    const categories = useSelector((state) => state.categories.categories)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className="page-container">
            {!categories && <h5>Loading...</h5>}
            {categories && <Categories data={categories}/>}
        </div>
    );
}

export default Menu;
