import React, { useState, useEffect } from "react";
import displayMobile from './display_mobile.js';
import ItemsSection from './ItemsSection.js';
import Cart from './Cart.js';
import '../styles/shop_section.css';

const categories = [
    'All Products',
    'Pizza',
    'Pasta',
    'Burgers',
    'Desserts',
    'Drinks'
];

function getPizzaItems() {
    return [
        {
            name: 'Hawaiian',
            img: '/images/hawaiian.jpg',
            price: 10, 
        },
        {
            name: 'Pepperoni',
            img: '/images/pepperoni.jpg',
            price: 17, 
        },
    ];
}

function getPastaItems() {
    return [
        {
            name: 'Spaghetti',
            img: '/images/spaghetti.jpg',
            price: 20, 
        },
        {
            name: 'White Sauce Pasta',
            img: '/images/whitepasta.jpg',
            price: 23, 
        },
    ];
}

function getBurgerItems() {
    return [
        {
            name: 'Chicken Burger',
            img: '/images/chickenburger.jpg',
            price: 25
        },
        {
            name: 'Cheeseburger',
            img: '/images/cheeseburger.jpg',
            price: 27
        },
    ]
}

function getDessertsItems() {
    return [
        {
            name: 'Halo-halo',
            img: '/images/halohalo.jpg',
            price: 50
        },
        {
            name: 'Flan',
            img: '/images/flan.jpg',
            price: 28
        },
    ]
}

function getDrinksItems() {
    return [
        {
            name: 'Root beer',
            img: '/images/rootbeer.jpg',
            price: 15
        },
        {
            name: 'Mango Juice',
            img: '/images/mango_juice.jpg',
            price: 8
        },
    ]
}


const CategoryItemsArray = [
    {
        name: 'All Products',
        items: getPizzaItems().concat(getPastaItems(), getBurgerItems(), getDessertsItems(), getDrinksItems()),
    },
    {
        name: 'Pizza',
        items: getPizzaItems(),
    },
    {
        name: 'Pasta',
        items: getPastaItems(),
    },
    {
        name: 'Burgers',
        items: getBurgerItems(),
    },
    {
        name: 'Desserts',
        items: getDessertsItems(),
    },
    {
        name: 'Drinks',
        items: getDrinksItems(),
    },
];

const ShopSection = () => {
    const [mobileCategories, setMobileCategories] = useState(displayMobile());
    const [wideScreenCategories, setWideScreenCategories] = useState(!mobileCategories);
    const [activeCategory, setActiveCategory] = useState(CategoryItemsArray[0]);
    const [cartContents, setCartContents] = useState([]);
    const [categoriesBar, setCategoriesBar] = useState(null);
    const [cart, setCart] = useState(null);
    
    const getExistingItemIndex = (existingObj) => {
        return cartContents.findIndex((obj) => {
            return obj.name === existingObj.name;
        });
    };
    
    const removeFromCart = (name) => {
        const newCartContents = cartContents.filter((val) => val.name != name);
        setCartContents(newCartContents);
    };
    
    const stickyToggle = (obj, classes) => {
        if (obj) {
            if (window.pageYOffset >= 60) {
                classes.forEach(className => {
                    obj.classList.add(className);
                });
            } else {
                classes.forEach(className => {
                    obj.classList.remove(className);
                });
            }
        }
    };
    
    window.addEventListener('scroll', () => {
        stickyToggle(categoriesBar, ["sticky", "stickybar"]);
        stickyToggle(cart, ["sticky"]);
    });
    
    const modifyCartContents = (existingItemIndex, existingObj, calcTotalItems, calcTotalPrice) => {
        let prevCartContents = [...cartContents];
        let itemToBeModified = Object.assign({}, prevCartContents[existingItemIndex]); 
   
        const additionalCost = itemToBeModified.pricePerUnit * existingObj.quantity;
        const totalItems = calcTotalItems(itemToBeModified, existingObj);
        const totalPrice = calcTotalPrice(itemToBeModified, additionalCost, totalItems);
        itemToBeModified.quantity = totalItems;
        itemToBeModified.price = totalPrice;
        
        prevCartContents[existingItemIndex] = itemToBeModified;
        setCartContents(prevCartContents);
    };
    
    const addCartContent = (newContent) => {
        if (newContent.quantity > 0){
            const existingItemIndex = getExistingItemIndex(newContent);
            
            if (existingItemIndex != -1) {
                const calcTotalItems = (item1, item2) => item1.quantity + item2.quantity;
                const calcTotalPrice = (item, addCost, totalItems) => parseFloat(parseFloat(item.price) + parseFloat(addCost)).toFixed(2);
                modifyCartContents(existingItemIndex, newContent, calcTotalItems, calcTotalPrice);           
                
            } else {
                setCartContents(cartContents.concat([newContent]));
            }    
        }
        
        alert(`Added ${ newContent.quantity } ${ newContent.name }s to your order.`)
    };
    
    const changeItemAmount = (item, change) => {
        const existingItemIndex = getExistingItemIndex(item);

        if (existingItemIndex != -1) {
            const calcTotalItems = (item1, item2) => item1.quantity += change;
            const calcTotalPrice = (item, addCost, totalItems) => Number(item.pricePerUnit * totalItems).toFixed(2);
            modifyCartContents(existingItemIndex, item, calcTotalItems, calcTotalPrice); 
        }        
    };

    const incrementItem = (item) => {
        changeItemAmount(item, 1);
    };
    
    const decrementItem = (item) => {
        if (item.quantity > 1) changeItemAmount(item, -1);
    };

    const categoriesDisplayScreenResizeStatus = () => {
        setMobileCategories(displayMobile());
    };
    
    useEffect(() => {
       setWideScreenCategories(!mobileCategories);   

    }, [mobileCategories]);
    
    useEffect(() => {
       setCategoriesBar(document.querySelector('#widescreen-display'));   
       setCart(document.querySelector('#cart-holder'));    
    })
    
    const getCategoryObj = (category) => {
        const categoryObj = CategoryItemsArray.filter((obj) => {
            return obj.name === category;
        })
        return categoryObj[0];
    }
    
    const changeSelectedCategory = (category) => {
        setActiveCategory(category);
    };
    
    const changeSelectedCategoryActions = (category) => {
       const categoryObj = getCategoryObj(category);
       changeSelectedCategory(categoryObj);
    }
    
    const renderCategoriesDisplay = (flag, map_func, html_func) => {
        if (flag) {
            const cat = categories.map(map_func);
            return html_func(cat);
        }
    }
    
    const renderMobileDisplayCategories = () => {
        const map_func = (step, move) => {           
            return (
                <option key={move}>{step}</option>
            );
        }
        
        const html_func = (categoriesOptions) => {
            return (
                <div id="mobile-display">
                    <h4>Select category:</h4>
                    <select 
                        value={activeCategory.name} 
                        onChange={(e) => changeSelectedCategoryActions(categories[e.target.selectedIndex])}
                    >
                        {categoriesOptions}
                    </select>
                </div>      
            );
        }

        return renderCategoriesDisplay(mobileCategories, map_func, html_func);
    };
    
    const renderWideScreenDisplayCategories = () => {
        if (wideScreenCategories) {
            const map_func = (step, move) => {
                const selectedClass = (step == activeCategory.name) ? 'selected' : '';
                
                return (
                    <li key={move} className={selectedClass} onClick={() => changeSelectedCategoryActions(step)}>{step}</li>
                );
            };
            
            const html_func = (categoriesOptions) => {
                return (
                    <div id="widescreen-display">
                        <ul>
                            {categoriesOptions}
                        </ul>
                    </div>
                );
            }
            
            return renderCategoriesDisplay(wideScreenCategories, map_func, html_func);
        }
    };
    
    window.addEventListener('resize', categoriesDisplayScreenResizeStatus);
    
    return (
        <section id="shop-container">
            <Cart
                cartContents={cartContents}  
                increment={incrementItem} 
                decrement={decrementItem}     
                removeFromCart={removeFromCart}            
            />      
    
            <div id="shop">
                <div id="categories-holder">
                    {renderMobileDisplayCategories()}           
                    {renderWideScreenDisplayCategories()}
                </div>
                
                <ItemsSection
                    activeCategory={activeCategory}
                    bog={5}
                    onClick={addCartContent}
                />          
            </div>
        </section>
    )
};

export default ShopSection;