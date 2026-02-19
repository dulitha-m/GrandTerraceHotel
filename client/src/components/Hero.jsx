import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = ({ title, subtitle, image, images = [], showActions = true }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Combine single image prop into array if needed
    const heroImages = images.length > 0 ? images : (image ? [image] : []);

    useEffect(() => {
        if (heroImages.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000); // 6 seconds per slide

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const [scrolled, setScrolled] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Parallax logic
    const opacity = Math.max(0, 1 - scrolled / 700);
    const transform = `translateY(${scrolled * 0.4}px)`;

    return (
        <header className="hero-fullscreen">
            <div className="hero-background-wrapper" style={{ opacity: opacity, transform: transform }}>
                {heroImages.map((img, index) => (
                    <div
                        key={index}
                        className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
            </div>

            {/* Darker overlay for text readability */}
            <div className="hero-overlay"></div>

            <div className="hero-content-container reveal-on-load">
                <span className="hero-overline text-gold">{subtitle}</span>
                <h1 className="hero-headline">{title}</h1>

                {showActions && (
                    <div className="hero-ctas">
                        <Link to="/dining" className="btn btn-primary">Discover Dining</Link>
                        <Link to="/contact" className="btn">Reserve Table</Link>
                    </div>
                )}
            </div>

            <div className="scroll-hint">
                <span className="sr-only">Scroll Down</span>
                <div className="line"></div>
            </div>
        </header>
    );
};

export default Hero;
