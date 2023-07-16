import React, { useEffect, useState } from 'react';
import './Shops.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToCart, getStoredItem } from '../../utilities/db';

 

const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToCart(product.id);
        console.log(getStoredItem());
    }

    return (
        <div className='shops-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product 
                        product ={product} 
                        key={product.id} 
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shops;