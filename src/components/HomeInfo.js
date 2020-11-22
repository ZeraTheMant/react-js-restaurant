import React from "react";
import '../styles/home_info.css';
import spag from '../images/spag_homepage.jpg';
import { Link } from "react-router-dom"; 

const HomeInfo = () => {
    return (
        <section id="home-info">
            <img src={spag}/>
            
            <div id="info-text-container">
                <div>
                    <h2>Experience and develop your <span>Exquisite taste</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna elit, convallis eu massa ac, ultricies consectetur elit. Aenean accumsan venenatis dui sed pretium. Morbi vitae erat nec lectus vestibulum tincidunt. Mauris non pulvinar est. Aliquam eu fringilla libero. Ut aliquam fermentum feugiat. Donec in congue felis. Integer rutrum nisl nec ligula tempus, in euismod lacus ullamcorper.
                    </p>
                    <Link to="/shop/">Make an order</Link>
                </div>
            </div>
        </section>
    )
};

export default HomeInfo;