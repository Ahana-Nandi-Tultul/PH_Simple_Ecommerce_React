import React from 'react';
import './Product.css';

const Product = (props) => {
    const {id, img, name, price, seller, ratings} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price: ${price}</p>
                <p style={{marginBottom: "0px"}}>Manufracture: {seller}</p>
                <p style={{marginTop: "0px"}}>Ratting: {ratings} stars</p>
            </div>
            <button onClick={() => addToCart(id)} className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;