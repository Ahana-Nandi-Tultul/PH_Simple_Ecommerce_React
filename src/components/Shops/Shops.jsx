import React, { useEffect, useState } from 'react';
import './Shops.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToCart, deleteShoppingCart, getStoredItem } from '../../utilities/db';

 

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
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
            
        }
        else{
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd => pd.id !== product.id);
            newCart = [...remaining, exists];
        }
        console.log(newCart);
        setCart(newCart);
        addToCart(product.id);

    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
                <Cart 
                cart={cart}
                handleClearCart = {handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Shops;