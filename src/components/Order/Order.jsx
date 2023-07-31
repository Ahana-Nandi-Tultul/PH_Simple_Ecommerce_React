import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Order = () => {
    const products = useLoaderData();
    console.log(products);
    return (
        <div>
            <h1>This is order page.</h1>
            <div className='shops-container'>
                <div className='products-container'>

                </div>
                <div className='cart-container'>
                    <Cart cart={[]}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;