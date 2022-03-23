import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart} = props;

    // console.log(cart);

   let total = 0;
   let shipping = 0;
   let quantity = 0;

   for(const product of cart){
       quantity = quantity + product.quantity;
       total = total + product.price * product.quantity;
       shipping = shipping + product.shipping;
   }
   const tax = parseFloat((total * 10 / 100).toFixed(2));
   const grandTotal = total + shipping + tax;

    return (
        <div className="cart">
            <h2>Order Summary</h2>
                <p><strong>selected items : </strong>{quantity}</p>
                <p><strong>Total Price : </strong>$ {total}</p>
                <p><strong>Total Shipping Charge : </strong>$ {shipping}</p>
                <p><strong>Vat : </strong>$ {tax}</p>
                <h3><strong>Grand Total : </strong>$ {grandTotal}</h3>
                <div>
                    <a href="/order-rivew"><button className="btn-1">Check Cart </button></a>
                    <a href="/manage-history"><button className="btn-1">Rivew Order</button></a>
                </div>
        </div>
    );
};

export default Cart;