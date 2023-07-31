import React from 'react';
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart, handleClearCart, children}) => {
    // const cart = props.cart; //option : 1
    // const {cart} = props; //option: 2

    let totalPrice = 0;
    let shippingTotal = 0;
    let quantity = 0;
    for(const product of cart){
        // if(!product.quantity){
        //     product.quantity = 1;
        // }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        shippingTotal = shippingTotal + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + shippingTotal + tax;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
            <button className='btn-clear-cart' onClick={handleClearCart}>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashAlt} /> 
            </button>
            {children}
        </div>
    );
};

export default Cart;