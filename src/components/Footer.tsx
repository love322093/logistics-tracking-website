import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', background: '#f1f1f1' }}>
            <p>&copy; {new Date().getFullYear()} Logistics Tracking. All rights reserved.</p>
            <p>Follow us on:</p>
            <div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;