import React, { useEffect, useState } from 'react';
import './Shops.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToCart, deleteShoppingCart, getStoredItem } from '../../utilities/db';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const Shops = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const totalProducts = useLoaderData().totalProducts;
   
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    const pageNumbers = [...Array(totalPages).keys()]

    // useEffect(() => {
    //     fetch('http://localhost:3000/products')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // }, []);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`http://localhost:3000/products?page=${currentPage}&limit=${itemsPerPage}`)
            const data = await res.json()
            setProducts(data);
        }
        fetchData()
    }, [currentPage, itemsPerPage])

    useEffect(() => {
        const storedProducts = getStoredItem();
        const ids = Object.keys(storedProducts);
        fetch('http://localhost:3000/productsById', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(ids)
        })
        .then(res => res.json())
        .then(cartProducts => {
            if(cartProducts){
                // console.log(cartProducts)
                let storedCart = [];
                for(const item in storedProducts){
                    const addedProducts = cartProducts.find(product => product._id === item);
                    if(addedProducts){
                        addedProducts.quantity = storedProducts[item];
                        storedCart.push(addedProducts);
                    }
                }
                setCart(storedCart);
            }
        })
    }, []);

    const handleAddToCart = (product) => {
        // const newCart = [...cart, product];
        let newCart = [];
        const exists = cart.find(pd => pd._id === product._id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
            
        }
        else{
            exists.quantity = exists.quantity + 1
            const remaining = cart.filter(pd => pd._id !== product._id);
            newCart = [...remaining, exists];
        }
        // console.log(newCart);
        setCart(newCart);
        addToCart(product._id);

    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    const options = [5, 10, 15, 20];
    const handleSelectChange = event => {
        setItemsPerPage(parseInt(event.target.value))
        setCurrentPage(0)
    }

    return (
        <>
            <div className='shops-container'>
                <div className='products-container'>
                    {
                        products.map(product => <Product 
                            product ={product} 
                            key={product._id} 
                            handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart 
                    cart={cart}
                    handleClearCart = {handleClearCart}>
                            <Link to="/order">
                                <button className='btn-procced-order'>
                                    <span>Review Order</span>
                                    <FontAwesomeIcon icon={faArrowRight} /> 
                                </button>
                            </Link>
                    </Cart>
                </div>
            </div>
            <div className='pagination'>
                {
                    pageNumbers.map(number => <button
                    key = {number} 
                    onClick={() => setCurrentPage(number)}
                    className={currentPage === number ? 'selected' : ''}
                    >
                        {number}
                    </button>)
                }
                <select value={itemsPerPage} onChange={handleSelectChange}>
                    {
                        options.map(op => <option 
                        key={op}
                        value={op}
                        >{op}</option>)
                    }
                    
                </select>
            </div>
        </>
    );
};

export default Shops;