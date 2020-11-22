import React, { useState } from "react";
import '../styles/items_section.css';

const Item = (props) => {
    const [itemAmount, setItemAmount] = useState(0);
    
    const amountChange = (e) => {
        setItemAmount(e.target.value);
    }
    
    const createItemObj = () => {
        const quan = Number(itemAmount);
        const price = Number(props.price).toFixed(2)
        setItemAmount(0);
        return {
            name: props.name,
            pricePerUnit: price,
            img: props.img,
            price: Number((quan * price).toFixed(2)).toFixed(2),
            quantity: quan
        }
    }
    
    return (
        <div className="shop-item" key={props.move}>
            <img src={props.img}/>
            <div>
                <div>
                    <h3>{props.name}</h3>
                    <p>₱ {props.price.toFixed(2)}</p>
                </div>
                
                <div>
                    <input type="number" min="0" value={itemAmount} onChange={amountChange} placeholder="Amount"/>
                    <button type="button" onClick={() => props.onClick(createItemObj())}>Add to cart</button>
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
                    onClick={props.onClick}
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