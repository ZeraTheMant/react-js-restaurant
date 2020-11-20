import React from "react";
import '../styles/home_info.css';

const HomeInfo = () => {
    return (
        <section id="home-info">
            <img src="/images/spag_homepage.jpg"/>
            
            <div id="info-text-container">
                <div>
                    <h2>Experience and develop your <span>Exquisite taste</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna elit, convallis eu massa ac, ultricies consectetur elit. Aenean accumsan venenatis dui sed pretium. Morbi vitae erat nec lectus vestibulum tincidunt. Mauris non pulvinar est. Aliquam eu fringilla libero. Ut aliquam fermentum feugiat. Donec in congue felis. Integer rutrum nisl nec ligula tempus, in euismod lacus ullamcorper.
                    </p>
                    <a href="/shop/">Make an order</a>
                </div>
            </div>
        </section>
    )
};

export default HomeInfo;