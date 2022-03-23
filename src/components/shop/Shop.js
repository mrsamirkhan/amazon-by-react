import React, { useEffect, useState } from 'react';
import { getStoreCart } from '../../utilities/fakedb';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
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


    useEffect(()=>{
        const getStored = getStoreCart();
        const savedcart = [];
        for(const id in getStored){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = getStored[id];
                addedProduct.quantity = quantity;
                savedcart.push(addedProduct);
            }
        }

        setCart(savedcart);

    },[products])

    const addToCart =(product)=>{
        let newCart = [];
        const exists = cart.find(productt => productt.id === product.id);
        if(!exists){
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            const rest = cart.filter(producttt=> producttt.id !== product.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }


        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
               {
                   products.map(product =><Product key={product.id} product ={product} AddtoCart={addToCart}></Product>)
               }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;