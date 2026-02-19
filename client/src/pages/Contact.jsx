import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message. We will get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-page">
            <header className="contact-header">
                <div className="overlay"></div>
                <div className="header-content animate-slide-up">
                    <span className="section-subtitle">Get in Touch</span>
                    <h1>Contact Us</h1>
                </div>
            </header>

            <div className="container contact-wrapper">
                <div className="contact-grid">
                    <div className="contact-info animate-slide-up delay-1">
                        <h2>Reservations & Inquiries</h2>
                        <p>We look forward to hosting you. For special events, private dining, or general questions, please reach out.</p>

                        <div className="info-block">
                            <h4>Address</h4>
                            <p>Grand Terrace, Level 1</p>
                            <p>123 Luxury Avenue, Colombo</p>
                        </div>

                        <div className="info-block">
                            <h4>Contact</h4>
                            <p><a href="mailto:info@grandterrace.lk">info@grandterrace.lk</a></p>
                            <p><a href="tel:+94112345678">+94 11 234 5678</a></p>
                        </div>

                        <div className="info-block">
                            <h4>Opening Hours</h4>
                            <p>Mon - Sun: 11:00 AM - 11:00 PM</p>
                        </div>
                    </div>

                    <div className="contact-form-container animate-slide-up delay-2">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
