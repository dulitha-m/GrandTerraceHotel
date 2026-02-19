import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './DiningCarousel.css';

const DiningCarousel = ({ restaurants }) => {

    // Use useMemo to prevent re-filtering on every render
    const displayList = useMemo(() => {
        if (!restaurants || !Array.isArray(restaurants)) return [];

        const filtered = restaurants.filter(r =>
            r && r.name && !r.name.toLowerCase().includes('grand terrace')
        );

        if (filtered.length === 0) return [];

        // Duplicate the list enough times to fill a wide screen and allow for seamless scrolling
        // With 4 items, repeating 4 times = 16 items. Enough for 4k screens if needed.
        return [...filtered, ...filtered, ...filtered, ...filtered];
    }, [restaurants]);

    if (displayList.length === 0) return null;

    return (
        <div className="dining-carousel-section">
            <div className="carousel-header text-center">
                <span className="section-subtitle">Discover</span>
                <h2 className="section-title">Dine With Us</h2>
            </div>

            <div className="carousel-wrapper">
                <div className="carousel-track-animated">
                    {displayList.map((restaurant, index) => (
                        <div key={`${restaurant._id}-${index}`} className="dining-card">
                            <div className="card-bg" style={{ backgroundImage: `url(${restaurant.image})` }}></div>
                            <div className="card-overlay"></div>

                            <div className="card-content">
                                <span className="card-category">{restaurant.category || "Dining"}</span>
                                <h3 className="card-title">{restaurant.name}</h3>
                                <Link to={`/restaurant/${restaurant._id}`} className="btn-explore">Explore</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiningCarousel;
