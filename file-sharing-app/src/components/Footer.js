import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file for footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} File Sharing App. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="/privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;