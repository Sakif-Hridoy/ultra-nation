import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const cart = props.cart;
    let totalPopulation = 0;

    for (let i = 0; i< cart.length; i++) {
        const country = cart[i];
        totalPopulation = totalPopulation + country.population;
        
    }
    return (
        <div>
            <h4>This is Cart:{props.cart.length}</h4>
            <h4>Total Population:{totalPopulation}</h4>
        </div>
    );
};

export default Cart;