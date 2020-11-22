import React, { useState } from "react";

const Cart = (props) => {
    const [clickedStatus, setClickedStatus] = useState(false);
    
    const getNumOfCartItems = () => {
        if (props.cartContents.length > 0){
            const totalQuanObj =  props.cartContents.reduce((acc, currVal) => {
                return {quantity: acc.quantity + currVal.quantity}
            });

            return totalQuanObj.quantity;
        } else {
            return 0
        }
    };
    
    const toggleCartItemsListDisplay = () => {
        setClickedStatus(!clickedStatus);
    };
    
    const renderSubtotal = () => {
        const totalPriceObj =  props.cartContents.reduce((acc, currVal) => {
            return {price: (parseFloat(acc.price) + parseFloat(currVal.price)).toFixed(2)}
        });
        
        return (
            <li>
                <span id="subtotal-title">Subtotal</span>
                <span>₱{totalPriceObj.price}</span>
            </li>
        )
    };
    
    const getCartItemsJSX = () => {
        if (props.cartContents.length > 0){ 
            const cartItems = props.cartContents.map((step, move) => {
                return (
                    <li key={move}>
                        <img src={step.img} className="item-img"/>
                        <div>
                            <div className="increment-order" onClick={() => props.increment(step)}>&#11014;</div>
                            <span>{step.quantity}</span>
                            <div className="decrement-order" onClick={() => props.decrement(step)}>&#11015;</div>
                        </div>
                        <span>{step.name}</span>
                        <span className="remove-item" onClick={() => props.removeFromCart(step.name)}>❎</span>
                        <span>₱{step.price}</span>
                    </li>
                );
            });
            
            return (
                <ul>
                    {cartItems}
                    {renderSubtotal()}
                    <div>
                        <button type="button" id="checkout-btn">Checkout</button>
                    </div>
                </ul>
            );
        } else {
            return ( <h4>Your cart is empty.</h4> );
        }
    };
    
    const renderCartItemsList = () => {
        if (clickedStatus) {
            return (
                <div id="cart-items-list-container">
                    <div id="cart-items-list">
                        {getCartItemsJSX()}
                    </div>
                </div>
            );
        }
    };
  
    return (
        <div id="cart-holder">
            <div id="cart" onClick={toggleCartItemsListDisplay}>
                <h1>Cart ({getNumOfCartItems()})</h1>    
            </div>
            
            {renderCartItemsList()}    
        </div>
    );
};

export default Cart;