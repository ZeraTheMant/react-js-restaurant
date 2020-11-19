import React from "react";
import './styles/shared_styles.css';
import HeaderNav from './components/HeaderNav.js';
import MainContent from './components/MainContent.js';

function App() {
    return (
        <div>
            <HeaderNav />
            <MainContent />
        </div>
    );
}

export default App;
