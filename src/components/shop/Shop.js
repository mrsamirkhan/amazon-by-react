import React, { useEffect, useState } from 'react';
import Card from '../card/Card';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products ,setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[]);

    const addToCart =(product)=>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
               {
                   products.map(product =><Product key={product.id} product ={product} AddtoCart={addToCart}></Product>)
               }
            </div>
            <div className="cart-container">
                <Card cart={cart}></Card>
            </div>
        </div>
    );
};

export default Shop;