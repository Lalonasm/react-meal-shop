import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart)
    // let total = [];
    // for (const category of cart) {
    //     total = [cart.strCategory];
    //     console.log(total)
    // }
    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Selected Meal :   {cart.length}</p>
            <p>Meal Name : {cart.strCategory}</p>
        </div>
    );
};

export default Cart;