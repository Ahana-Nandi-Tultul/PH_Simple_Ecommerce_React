import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css';
import { deleteShoppingCart, removeItems } from '../../utilities/db';

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    
    const handleRemoveItemFromCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeItems(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    console.log(cart);
    return (
        <div>
            <div className='shops-container'>
                <div className='review-container'>
                    {
                        cart.map((product, idx) => <ReviewItems 
                        key = {idx}
                        product={product}
                        handleRemoveItemFromCart = {handleRemoveItemFromCart}></ReviewItems>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart 
                    cart={cart}
                    handleClearCart={handleClearCart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;