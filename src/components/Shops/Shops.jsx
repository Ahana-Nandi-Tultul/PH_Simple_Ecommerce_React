import React, { useEffect, useState } from 'react';
import './Shops.css';
import Product from '../Product/Product';
 

const Shops = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const addToCart = (id) => {
        console.log('clicked id', id);
    }
    return (
        <div className='shops-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product product ={product} key={product.id} addToCart={addToCart}></Product>)
                }
            </div>
            <div>
                <h1>Order Summary</h1>
            </div>
        </div>
    );
};

export default Shops;