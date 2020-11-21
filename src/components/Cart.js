import React, { useState } from "react";

const Cart = (props) => {    
    return (
        <div id="cart">
            <h1>Cart ({props.cartContents.length})</h1>
        </div>
    )
};

export default Cart;