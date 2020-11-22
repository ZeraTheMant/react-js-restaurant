import React from "react";
import '../styles/main_content.css';
import banner from '../images/banner_pic.jpg'; 
import { Link } from "react-router-dom";

const MainContent = () => {
    return (
        <main>
            <section id="banner-holder">
                <img src={banner}/>
                <div id="banner-grey-shadow"></div>
                
                <div id="banner-text-container">
                    <h1>Welcome</h1>
                    <p>To My Favorite Restaurant</p>
                    <Link to="/shop/">Make an order</Link>
                </div>
            </section>
        </main>
    )
};

export default MainContent;