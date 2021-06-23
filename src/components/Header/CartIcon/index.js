import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {getCartCount} from "../../../reducers/cart/selectors";

import "./styles.scss"

const CartIcon = () => {
    const cartCount = useSelector(getCartCount)
    const history = useHistory()

    const clickHandler = () => {
        history.push('/cart')
    }

    return (
        <div className="icon-wrapper" onClick={clickHandler}>
            <i className="fa fa-shopping-cart cart"/>
            <div className="icon-count">{cartCount}</div>
        </div>
    );
};

export default CartIcon;