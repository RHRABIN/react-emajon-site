import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (propos) => {

    const { handleRemoveProduct, product } = propos;

    const { name, img, price, shipping, quantity } = product;
    // console.log(propos.product)
    return (
        <div className="review-item">
            <div >
                <img src={img} alt="" />
                {/* <p >hello</p> */}
            </div>
            <div className='review-item-detail-container'>
                <div className="review-item-details">
                    <p className='product-name'>{name}</p>
                    <p>Price: $<span>{price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className='delete-button'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}> </FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;