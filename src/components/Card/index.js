import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

import {addToCart} from "../../reducers/cart/cartSlice";

import "./styles.scss"

const Card = ({item, ...props}) => {
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory()
    const dispatch = useDispatch()

    const clickHandler = () => {
        if (history.location.pathname === '/') {
            history.push({
                pathname: `/category/${item.title}`,
                state: item.title
            })
        }
    }
    const buyClickHandler = (e) => {
        e.preventDefault()
        if (history.location.pathname !== '/') {
            dispatch(addToCart({...item, count: 1}))
        }
    }

    return (
        <div className="card-wrapper" onClick={clickHandler}>
            {isLoading
                ? <img src="https://via.placeholder.com/300x200/FFF" width='300' height='175' alt="placeholder"/>
                : null}
            <img src={item.thumb} style={!isLoading ? {} : {display: 'none'}} width='300' height='200' alt="thumb" onLoad={()=> setIsLoading(false)}/>
            <h3>{item.title}</h3>
            <p>{props.description}</p>
            {history.location.pathname !== '/' ? <button onClick={buyClickHandler}>Buy</button> : null}
        </div>
    );
};

export default Card;

