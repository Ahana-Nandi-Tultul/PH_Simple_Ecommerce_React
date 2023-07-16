import React from 'react';
import "./Cart.css";

const Cart = ({cart}) => {
    // const cart = props.cart; //option : 1
    // const {cart} = props; //option: 2

    let totalPrice = 0;
    let shippingTotal = 0
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        shippingTotal = shippingTotal + product.shipping;
    }
    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + shippingTotal + tax;
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${shippingTotal}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: {grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;