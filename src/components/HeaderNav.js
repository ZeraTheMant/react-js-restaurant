import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import displayMobile from './display_mobile.js';
import logo from '../images/logo.png'; 

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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/shop/">Shop</Link></li>
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
                    <Link to="/">
                    <img src={logo}/>
                    <h1>My Favorite Restaurant</h1>
                    </Link>
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