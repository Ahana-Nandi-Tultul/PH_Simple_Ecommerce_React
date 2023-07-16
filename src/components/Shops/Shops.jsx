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
    useEffect(() => {
        const storedProducts = getStoredItem();
        let storedCart = [];
        for(const item in storedProducts){
            const addedProducts = products.find(product => product.id === item);
            if(addedProducts){
                addedProducts.quantity = storedProducts[item];
                storedCart.push(addedProducts);
            }
        }
        setCart(storedCart);
    }, [products]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToCart(product.id);

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