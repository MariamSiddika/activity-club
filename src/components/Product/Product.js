import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {product, handleActivity} = props;
    const { picture, age, time, title, about } = product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={picture} alt="" />
            </div>
            <div className='product-info'>
                <h2>{title}</h2>
                <p>{about.substring(0, 150)}</p>
                <h4>Age Limit: {age} years</h4>
                <h4>Time Required: {time}m</h4>
                <button onClick={() => handleActivity(product)} className='product-btn'>Add To List</button>
            </div>

        </div>
    );
};

export default Product;