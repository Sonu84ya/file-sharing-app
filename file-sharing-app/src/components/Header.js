import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a separate CSS file for header styles

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">File Sharing App</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/share">Share</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;