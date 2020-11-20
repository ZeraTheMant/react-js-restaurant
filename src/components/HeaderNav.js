import React, { useState, useEffect } from "react";
import displayMobile from './display_mobile.js';

const HeaderNav = () => {
    const [button, setButton] = useState(displayMobile());
    const [navItems, setNavItems] = useState(!displayMobile());
    
    const navItemsDisplayStatus = () => {
        setNavItems(!navItems);
    };
    
    const buttonScreenResizeStatus = () => {
        setButton(displayMobile());
    };
    
    useEffect(() => {
       setNavItems(!button);   
    }, [button]);
    
    window.addEventListener('resize', buttonScreenResizeStatus);
    
    const renderMenuMobileButton = () => {
        if (button) {
            return (
                <div id="mobile-menu-btn" onClick={navItemsDisplayStatus}>
                    <div>&#9776;</div>
                </div>     
            );
        }
    };
    
    const renderNavItems = () => {
        if (navItems) {         
            return (
                <nav>  
                    <div id="nav-items-holder">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/shop/">Shop</a></li>
                        </ul>
                    </div>
                </nav>
            );
        }
    }
    
    return (
        <header>
            <div id="title-header">
                <div id="logo-holder">
                    <a href="#">
                    <img src="/images/logo.png"/>
                    <h1>My Favorite Restaurant</h1>
                    </a>
                </div>
                
                {renderMenuMobileButton()}
            </div>
            
            <div id="nav-holder">         
                {renderNavItems()}  
            </div>
        </header>
    )
};

export default HeaderNav;