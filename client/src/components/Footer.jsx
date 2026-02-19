import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// Using FontAwesome icons via react-icons package
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    {/* 1. Brand & Social Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-logo-link">
                            <h2 className="footer-logo-text">Grand Terrace</h2>
                        </Link>
                        <p className="footer-desc">
                            Experience the epitome of luxury dining in the heart of Colombo.
                            Where culinary art meets sky-high views.
                        </p>

                        {/* Social Media Buttons */}
                        <div className="social-icons-wrapper">
                            <h5 className="social-heading">Follow Us</h5>
                            <div className="social-icons">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 2. Explore Links */}
                    <div className="footer-col links-col">
                        <h4>Explore</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/dining">Dining Collection</Link></li>
                            <li><Link to="/about">Our Story</Link></li>
                            <li><Link to="/contact">Reservations</Link></li>
                            <li><Link to="/events">Private Events</Link></li>
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div className="footer-col contact-col">
                        <h4>Contact Us</h4>
                        <div className="contact-item">
                            <span>Address</span>
                            <p>123 Luxury Avenue, Colombo 03, Sri Lanka</p>
                        </div>
                        <div className="contact-item">
                            <span>Email</span>
                            <p><a href="mailto:reservations@grandterrace.lk">reservations@grandterrace.lk</a></p>
                        </div>
                        <div className="contact-item">
                            <span>Phone</span>
                            <p><a href="tel:+94112345678">+94 11 234 5678</a></p>
                        </div>
                    </div>

                    {/* 4. Opening Hours */}
                    <div className="footer-col hours-col">
                        <h4>Opening Hours</h4>
                        <ul>
                            <li><span>Mon - Thu:</span> 10:00 AM - 11:00 PM</li>
                            <li><span>Fri - Sat:</span> 10:00 AM - 01:00 AM</li>
                            <li><span>Sunday:</span> 10:00 AM - 12:00 AM</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Grand Terrace. All Rights Reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <span className="separator">|</span>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
