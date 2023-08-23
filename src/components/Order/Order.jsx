import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Order.css';
import { deleteShoppingCart, removeItems } from '../../utilities/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
    console.log(cart);
    
    const handleRemoveItemFromCart = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        setCart(remaining);
        removeItems(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    // console.log(cart);
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
                    handleClearCart={handleClearCart}>
                        <Link to="/checkout">
                            <button className='btn-procced-order'>
                                <span>Proceed Checkout</span>
                                <FontAwesomeIcon icon={faCreditCardAlt} /> 
                            </button>
                        </Link>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Order;