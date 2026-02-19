import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantSlider.css';

const RestaurantSlider = ({ restaurants }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((current) =>
            current === restaurants.length - 1 ? 0 : current + 1
        );
    };

    const prevSlide = () => {
        setActiveIndex((current) =>
            current === 0 ? restaurants.length - 1 : current - 1
        );
    };

    // Auto-advance
    useEffect(() => {
        const interval = setInterval(nextSlide, 6000); // 6s per slide
        return () => clearInterval(interval);
    }, [activeIndex, restaurants.length]);

    if (!restaurants || restaurants.length === 0) return null;

    return (
        <div className="restaurant-slider">
            <div className="slider-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                {restaurants.map((restaurant, index) => (
                    <div
                        key={restaurant._id}
                        className={`slide ${index === activeIndex ? 'active' : ''}`}
                    >
                        {/* Background with slight zoom effect on active */}
                        <div className="slide-image-wrapper">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="slide-image"
                                loading={index <= 1 ? 'eager' : 'lazy'}
                            />
                            {/* Gradient Overlay */}
                            <div className="overlay" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent 60%)', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}></div>
                        </div>

                        {/* Content */}
                        <div className="slide-content">
                            <span className="slide-category">{restaurant.category || "Venue"}</span>
                            <h2 className="slide-title">{restaurant.name}</h2>
                            <p className="slide-description">{restaurant.description}</p>
                            <div className="btn-group">
                                <Link to={`/restaurant/${restaurant._id}`} className="btn btn-primary">Discover</Link>
                                <Link to="/contact" className="btn btn-outline" style={{ marginLeft: '1rem' }}>Reserve</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <div className="slider-dots">
                {restaurants.map((_, idx) => (
                    <div
                        key={idx}
                        className={`dot ${idx === activeIndex ? 'active' : ''}`}
                        onClick={() => setActiveIndex(idx)}
                    ></div>
                ))}
            </div>

            {/* Arrows */}
            <div className="slider-controls">
                <button className="slider-btn prev" onClick={prevSlide} aria-label="Previous Slide">
                    &#8592;
                </button>
                <button className="slider-btn next" onClick={nextSlide} aria-label="Next Slide">
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default RestaurantSlider;
