import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div>
            <div className='shops-container'>
                <div className='review-container'>
                    {
                        cart.map((product, idx) => <ReviewItems 
                        key = {idx}
                        product={product}></ReviewItems>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;