import React from "react";
import '../styles/main_content.css';

const MainContent = () => {
    return (
        <main>
            <section id="banner-holder">
                <img src="/images/banner_pic.jpg"/>
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