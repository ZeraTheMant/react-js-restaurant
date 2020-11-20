import React, { useState, useEffect } from "react";
import displayMobile from './display_mobile.js';
import ItemsSection from './ItemsSection.js';
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
    
    const categoriesDisplayScreenResizeStatus = () => {
        setMobileCategories(displayMobile());
    };
    
    useEffect(() => {
       setWideScreenCategories(!mobileCategories);   
    }, [mobileCategories]);
    
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
        <section id="shop">
            <div id="categories-holder">
                {renderMobileDisplayCategories()}           
                {renderWideScreenDisplayCategories()}
            </div>
            
            <ItemsSection
                activeCategory={activeCategory}
                bog={5}
            />
        </section>
    )
};

export default ShopSection;