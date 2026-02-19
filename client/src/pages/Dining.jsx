import React, { useEffect, useState } from 'react';
import api from '../api';
import { Link } from 'react-router-dom';
import './Dining.css';

const Dining = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [activeFilter, setActiveFilter] = useState('All');

    const filters = ['All', 'Restaurant', 'Bar', 'Cafe'];

    useEffect(() => {
        // Fetch restaurants
        api.get('/restaurants')
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setRestaurants(response.data);
                } else {
                    setFallbackData();
                }
            })
            .catch(error => {
                setFallbackData();
            });
    }, []);

    const setFallbackData = () => {
        setRestaurants([
            {
                _id: '1',
                name: "Grand Terrace",
                description: "Experience the epitome of luxury dining with our diverse international cuisine. From breakfast buffets to elegant dinners.",
                cuisine: "International Buffet",
                category: "Restaurant",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
                location: "Lobby Level",
                hours: "6:00 AM - 11:00 PM"
            },
            {
                _id: '2',
                name: "Governor's Bar",
                description: "A classic bar setting offering the finest spirits and cocktails in a sophisticated atmosphere.",
                cuisine: "Bar & Lounge",
                category: "Bar",
                image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
                location: "First Floor",
                hours: "5:00 PM - 2:00 AM"

            },
            {
                _id: '3',
                name: "Governor's Mic Karaoke",
                description: "Unleash your inner star at our karaoke lounge. Make memories with friends and family.",
                cuisine: "Entertainment",
                category: "Bar",
                image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1200&q=80",
                location: "First Floor",
                hours: "7:00 PM - 3:00 AM"
            },
            {
                _id: '4',
                name: "Istanbul Nights",
                description: "Transport yourself to Turkey with authentic flavors, spices, and a vibrant atmosphere.",
                cuisine: "Turkish",
                category: "Restaurant",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
                location: "Rooftop",
                hours: "6:00 PM - 12:00 AM"
            },
            {
                _id: '5',
                name: "Tap Bar",
                description: "A casual spot for craft beers and bar bites. Great for catching up with friends.",
                cuisine: "Pub & Grill",
                category: "Bar",
                image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=1200&q=80",
                location: "Ground Floor",
                hours: "11:00 AM - 12:00 AM"
            }
        ]);
    };

    const filteredRestaurants = activeFilter === 'All'
        ? restaurants
        : restaurants.filter(r => r.category === activeFilter);

    return (
        <div className="dining-page">
            <header className="dining-header">
                <div className="dining-header-content">
                    <h1>Dining</h1>
                    <p>Indulge in an array of culinary delights at Grand Terrace. From authentic local flavors to international gastronomies, our venues offer a world of taste.</p>
                </div>
            </header>

            <div className="container">
                {/* Filter Bar */}
                <div className="dining-filter-bar">
                    {filters.map(filter => (
                        <button
                            key={filter}
                            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Restaurant List Layout */}
                <div className="dining-list">
                    {filteredRestaurants.map((restaurant) => (
                        <div key={restaurant._id} className="dining-item">
                            <div className="dining-item-image">
                                <img src={restaurant.image} alt={restaurant.name} loading="lazy" />
                            </div>
                            <div className="dining-item-content">
                                <div className="dining-meta">
                                    <span className="dining-cuisine">{restaurant.cuisine}</span>
                                </div>
                                <h2>{restaurant.name}</h2>
                                <p className="dining-description">{restaurant.description}</p>

                                <div className="dining-details">
                                    <div className="detail-row">
                                        <span className="label">Location:</span>
                                        <span className="value">{restaurant.location || "Main Wing"}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="label">Opening Hours:</span>
                                        <span className="value">{restaurant.hours || "11:00 AM - 11:00 PM"}</span>
                                    </div>
                                </div>

                                <div className="dining-actions">
                                    <Link to={`/restaurant/${restaurant._id}`} className="btn btn-primary">Find Out More</Link>
                                    <Link to="/contact" className="btn btn-outline">Reserve A Table</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dining;
