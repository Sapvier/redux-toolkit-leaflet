import React, {useState} from 'react';
import "./styles.scss"

const CartCard = ({item}) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="cart-card-wrapper" >
            {isLoading
                ? <img src="https://via.placeholder.com/300x200/FFF" width='300' height='175' alt="placeholder"/>
                : null}
            <img src={item.thumb} style={!isLoading ? {} : {display: 'none'}} width='300' height='200' alt="thumb" onLoad={()=> setIsLoading(false)}/>
            <h3>{item.title}</h3>
            <div>
                <button>&#8722;</button>
                <input value = {item.count} readOnly/>
                <button>&#43;</button>
            </div>
        </div>
    );
};

export default CartCard;