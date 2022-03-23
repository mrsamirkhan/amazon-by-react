import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // const {addToCart, product} = props;
    const {img, name, ratings, price, seller} = props.product; 

    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6 className='product-name'>{name}</h6>
            <p>Price: {price}</p>
            <p>Seller: {seller}</p>
            <p>Ratings: {ratings}</p>
            <button onClick={()=>props.AddtoCart(props.product)} className='button'>Add To Cart
            <p><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
            </button>
        </div>
    );
};

export default Product;