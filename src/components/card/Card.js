import React from 'react';
import './Card.css';

const Card = (props) => {

    const {cart} = props;

    // console.log(cart);

   let total = 0;
   let shipping = 0;

   for(const product of cart){
       total = total + product.price;
       shipping = shipping + product.shipping;
   }
   const tax = (total * 10 / 100).toFixed(2);

    return (
        <div className="cart">
            <h2>Order Summary</h2>
                <p><strong>selected items : </strong>{cart.length}</p>
                <p><strong>Total Price : </strong>$ {total}</p>
                <p><strong>Total Shipping Charge : </strong>$ {shipping}</p>
                <p><strong>Vat : </strong>$ {tax}</p>
                <h3><strong>Grand Total : </strong>{cart.length}</h3>
                <div>
                    <a href="/order-rivew"><button className="btn-1">Check Cart</button></a>
                    <a href="/manage-history"><button className="btn-1">Rivew Order</button></a>
                </div>
        </div>
    );
};

export default Card;