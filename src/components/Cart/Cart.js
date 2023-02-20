import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Header from '../Header/Header';
import Product from '../Product/Product';
import './Cart.css'
const Cart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])
    return (
        <div className='cart-container'>
            <div>
                <Header></Header>
                <h2 className='cart-header'>Select Your Actvity Package</h2>
                
                    <div className='cart-item'>
                        {
                            cart.map(product =>
                                <Product product={product} key={product.id}></Product>
                            )
                        }
                    </div>
                
            </div>
            <div className='cart-activity'>
                <Activity></Activity>
            </div>
        </div>
    );
};

export default Cart;