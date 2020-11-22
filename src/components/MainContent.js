import React from "react";
import '../styles/main_content.css';
import banner from '../images/banner_pic.jpg'; 

const MainContent = () => {
    return (
        <main>
            <section id="banner-holder">
                <img src={banner}/>
                <div id="banner-grey-shadow"></div>
                
                <div id="banner-text-container">
                    <h1>Welcome</h1>
                    <p>To My Favorite Restaurant</p>
                    <a href="/shop/">Make an order</a>
                </div>
            </section>
        </main>
    )
};

export default MainContent;