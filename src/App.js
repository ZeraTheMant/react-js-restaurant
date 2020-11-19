import React from "react";
import './styles/shared_styles.css';
import HeaderNav from './components/HeaderNav.js';
import MainContent from './components/MainContent.js';
import HomeInfo from './components/HomeInfo.js';
import Footer from './components/Footer.js';

function App() {
    return (
        <div>
            <HeaderNav />
            <MainContent />
            <HomeInfo />
            <Footer />
        </div>
    );
}

export default App;
