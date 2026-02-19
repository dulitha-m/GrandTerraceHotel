import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Scroll threshold 50 to hide top bar
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

            {/* Top Info Bar - Hides on Scroll */}
            {!scrolled && (
                <div className="top-bar">
                    <div className="top-bar-container">
                        <div className="top-info">
                            <span>📍 123 Luxury Avenue, Colombo</span>
                            <span>📞 +94 11 234 5678</span>
                            <span>🕒 Daily 11:00 AM - 11:00 PM</span>
                        </div>
                        <div className="top-socials">
                            <a href="#" aria-label="Facebook">FB</a>
                            <a href="#" aria-label="Instagram">IG</a>
                            <a href="#" aria-label="Twitter">TW</a>
                        </div>
                    </div>
                </div>
            )}

            <div className="nav-wrapper">
                {/* Logo */}
                <div className="nav-left">
                    <Link to="/" className="nav-logo">
                        GRAND TERRACE
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Navigation Links */}
                <div className={`nav-center ${menuOpen ? 'show' : ''}`}>
                    <ul className="nav-links">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
                        <li><NavLink to="/dining" className={({ isActive }) => isActive ? 'active' : ''}>Venues</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>Story</NavLink></li>
                        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink></li>
                    </ul>
                    {/* Mobile CTA (only visible in mobile drawer if needed) */}
                    <div className="mobile-cta-wrapper">
                        <Link to="/contact" className="btn btn-primary">Book Now</Link>
                    </div>
                </div>

                {/* Desktop Call To Action */}
                <div className="nav-right desktop-only">
                    <Link to="/contact" className="nav-book-link">Book Now</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
