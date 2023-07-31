import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div>
            <h1>This is order page.</h1>
            <div className='shops-container'>
                <div className='products-container'>
                    <h4>Orders number: {cart.length}</h4>
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;