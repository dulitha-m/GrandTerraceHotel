import React, { useEffect } from 'react';
import './About.css';

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="about-page">
            {/* Parallax Header */}
            <header className="about-header parallax-bg">
                <div className="overlay"></div>
                <div className="header-content reveal-on-load">
                    <span className="section-subtitle">Our Legacy</span>
                    <h1>A Symphony of Taste</h1>
                </div>
            </header>

            <div className="container">
                {/* The Story Section */}
                <section className="about-story section">
                    <div className="story-grid">
                        <div className="story-image reveal-on-scroll">
                            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="Chef plating dish" />
                        </div>
                        <div className="story-text reveal-on-scroll">
                            <span className="section-subtitle">Since 1998</span>
                            <h2>The Art of Hospitality</h2>
                            <p>
                                At Grand Terrace, we believe dining is not just about food; it's about the emotion, the connection, and the memory.
                                Founded over two decades ago in the heart of Colombo, we set out to create a sanctuary where culinary excellence meets
                                unmatched luxury.
                            </p>
                            <p>
                                Our philosophy is simple: source the finest ingredients, hire the most passionate chefs, and serve every guest as if they were royalty.
                            </p>
                            <div className="signature">Grand Terrace</div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="about-values section">
                    <div className="text-center reveal-on-scroll">
                        <span className="section-subtitle">Our Pillars</span>
                        <h2>Excellence Standard</h2>
                    </div>

                    <div className="values-grid">
                        <div className="value-card reveal-on-scroll">
                            <div className="value-number">01</div>
                            <h3>Authenticity</h3>
                            <p>We honor the roots of every dish, preserving traditional flavors while presenting them with modern elegance.</p>
                        </div>
                        <div className="value-card reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
                            <div className="value-number">02</div>
                            <h3>Sourcing</h3>
                            <p>From the catch of the day to organic greens, 80% of our ingredients are sourced locally from sustainable partners.</p>
                        </div>
                        <div className="value-card reveal-on-scroll" style={{ transitionDelay: '0.4s' }}>
                            <div className="value-number">03</div>
                            <h3>Service</h3>
                            <p>Anticipating needs before they are spoken. Our service is intuitive, discreet, and always personal.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Chef's Quote / Vision */}
            <section className="vision-section section parallax-bg">
                <div className="vision-content text-center reveal-on-scroll">
                    <p className="quote">"We don't just cook food. We curate moments that linger on the palate and in the heart forever."</p>
                    <cite>- Executive Chef, Marco Reus</cite>
                </div>
            </section>
        </div>
    );
};

export default About;
