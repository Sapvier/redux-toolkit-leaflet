import React from 'react';
import CartCard from "../../../components/CartCard";

const CartItems = ({cartItems}) => {
    return (
        <div>
            {cartItems.map(item =>
                <CartCard key={item.id} item={item}/>
            )}
        </div>
    );
}

export default CartItems;