import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Product from '../Product/Product';
import Time from '../Time/Time';
import User from '../User/User';
import './Cart.css'
const Cart = () => {
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState(0);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCart(data));
    }, [])

    const handleActivity = (product) => {
        //console.log(product);
        const newTime = time + product.time;
        setTime(newTime);
        
    }

    return (
        <div className='cart-container'>
            <div>
                <Header></Header>
                <h2 className='cart-header'>Select Your Actvity Package</h2>
                
                    <div className='cart-item'>
                        {
                            cart.map(product =>
                                <Product product={product} key={product.id} handleActivity = {handleActivity}></Product>
                            )
                        }
                    </div>
                
            </div>
            <div>
               <div className='cart-activity'>
               <User></User>
               <Time time = {time}></Time>
               </div>
            </div>
        </div>
    );
};

export default Cart;