import React, { useState } from "react";
import '../styles/items_section.css';

const Item = (props) => {
    return (
        <div className="shop-item" key={props.move}>
            <img src={props.img}/>
            <div>
                <div>
                    <h3>{props.name}</h3>
                    <p>₱ {props.price.toFixed(2)}</p>
                </div>
                
                <div>
                    <input type="number" min="0" placeholder="Amount"/>
                    <button type="button">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

const ItemsSection = (props) => {
    const createItems = () => {
        const items = props.activeCategory.items;
        const itemHTML = items.map((step, move) => {
            return (
                <Item
                    name={step.name}
                    img={step.img}
                    price={step.price}
                    key={move}
                />
            );
        });
        return itemHTML;
    };
    
    return (
        <div id="items-container">
            {createItems()}
        </div>
    )
};

export default ItemsSection;