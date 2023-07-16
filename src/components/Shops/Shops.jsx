import React, { useEffect, useState } from 'react';
import './Shops.css';
import Product from '../Product/Product';

 

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
            <div>
                <h1>Order Summary</h1>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shops;