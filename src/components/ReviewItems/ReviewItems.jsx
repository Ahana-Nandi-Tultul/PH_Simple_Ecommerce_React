import React from 'react';
import './ReviewItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItems = ({product}) => {
    const {id, img, name, price, quantity} = product
    console.log(product)
    return (
        <div className='review-item'>
            <img className='item-img' src={img} alt="" />
            <div className='review-details'>
                <p className='item-title'>{name}</p>
                <p>Price: <span className='item-info'>${price}</span></p>
                <p>Quantity: <span className='item-info'>{quantity}</span></p>
            </div>
            <button className='btn-delete'>
            <FontAwesomeIcon className='trash-icon' icon={faTrashAlt} />  
            </button>
        </div>
    );
};

export default ReviewItems;