import React from 'react';
import './Card.css';

const Card = ({cart}) => {
    return (
        <div>
            <h2>Order Summary</h2>
                <p><strong>selected items : </strong>{cart.length}</p>
                <p><strong>Total Price : </strong>{cart.length}</p>
                <p><strong>Total Shipping Charge : </strong>{cart.length}</p>
                <p><strong>Vat : </strong>{cart.length}</p>
                <h3><strong>Grand Total : </strong>{cart.length}</h3>
        </div>
    );
};

export default Card;