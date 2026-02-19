import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import './RestaurantDetail.css';

const RestaurantDetail = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0); // Start at top

        api.get(`/restaurants/${id}`)
            .then(response => {
                setRestaurant(response.data);
                setLoading(false);
            })
            .catch(error => {
                // Fallback logic
                const fallbackData = getFallbackData(id);
                setRestaurant(fallbackData);
                setLoading(false);
            });
    }, [id]);

    const getFallbackData = (id) => {
        const allRestaurants = [
            {
                _id: '1',
                name: "Grand Terrace",
                description: "Experience the epitome of luxury dining with our diverse international cuisine. From breakfast buffets to elegant dinners, enjoy a view that matches the taste.",
                cuisine: "International Buffet",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80",
                menus: [
                    { name: "Signature Breakfast", description: "A widespread international breakfast.", price: 25 },
                    { name: "Seafood Platter", description: "Fresh catch of the day grilled to perfection.", price: 45 }
                ]
            },
            {
                _id: '2',
                name: "Governor's Bar",
                description: "A classic bar setting offering the finest spirits and cocktails in a sophisticated atmosphere. Perfect for evening relaxation.",
                cuisine: "Bar & Lounge",
                image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=1200&q=80",
                menus: [
                    { name: "Old Fashioned", description: "Classic whiskey cocktail.", price: 15 },
                    { name: "Club Sandwich", description: "Traditional club sandwich with fries.", price: 18 }
                ]
            },
            {
                _id: '3',
                name: "Governor's Mic Karaoke",
                description: "Unleash your inner star at our karaoke lounge. Fun, music, and great drinks await you and your friends.",
                cuisine: "Entertainment & Drinks",
                image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=1200&q=80",
                menus: [
                    { name: "Party Platter", description: "Assorted finger foods for groups.", price: 30 },
                    { name: "Pitcher of Beer", description: "Choice of local or imported beer.", price: 20 }
                ]
            },
            {
                _id: '4',
                name: "Istanbul Nights",
                description: "Transport yourself to Turkey with authentic flavors, spices, and a vibrant atmosphere. A culinary journey awaits.",
                cuisine: "Turkish",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
                menus: [
                    { name: "Mixed Grill", description: "Lamb chops, chicken shish, and adana kebab.", price: 35 },
                    { name: "Baklava", description: "Traditional sweet pastry.", price: 10 }
                ]
            },
            {
                _id: '5',
                name: "Tap Bar",
                description: "A casual spot for craft beers and bar bites. Great for catching up with friends or watching the game.",
                cuisine: "Pub & Grill",
                image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=1200&q=80",
                menus: [
                    { name: "Craft Burger", description: "Juicy beef patty with special sauce.", price: 16 },
                    { name: "Fish & Chips", description: "Beer battered fish with chunky chips.", price: 18 }
                ]
            }
        ];
        return allRestaurants.find(r => r._id === id);
    };

    if (loading) return <div className="loading-container">Loading...</div>;
    if (!restaurant) return <div className="error-container">Restaurant not found</div>;

    return (
        <div className="restaurant-detail">
            {/* Immersive Hero */}
            <div className="detail-hero" style={{ backgroundImage: `url(${restaurant.image})` }}>
                <div className="overlay"></div>
                <div className="detail-content animate-slide-up">
                    <span className="cuisine-tag">{restaurant.cuisine}</span>
                    <h1>{restaurant.name}</h1>
                    <div className="detail-actions">
                        <Link to="/contact" className="btn btn-primary">Book Now</Link>
                        <button className="btn btn-outline ml-2">Download Menu</button>
                    </div>
                </div>
            </div>

            <div className="container content-wrapper">
                {/* Description & Info */}
                <div className="description-section">
                    <span className="section-subtitle">About The Experience</span>
                    <h2>A Taste of Luxury</h2>
                    <p>{restaurant.description}</p>

                    <div className="info-grid">
                        <div className="info-item">
                            <h4>Opening Hours</h4>
                            <p>Daily: 11:00 AM - 11:00 PM</p>
                        </div>
                        <div className="info-item">
                            <h4>Dress Code</h4>
                            <p>Smart Casual</p>
                        </div>
                        <div className="info-item">
                            <h4>Location</h4>
                            <p>Lobby Level, Grand Terrace</p>
                        </div>
                    </div>
                </div>

                {/* Menu Highlight */}
                <div className="menu-section">
                    <h3>Signature Menu</h3>
                    <div className="menu-list">
                        {restaurant.menus && restaurant.menus.length > 0 ? (
                            restaurant.menus.map((item, index) => (
                                <div key={index} className="menu-item">
                                    <div className="menu-info">
                                        <h4>{item.name}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="menu-price">${item.price}</div>
                                </div>
                            ))
                        ) : (
                            <p>Menu details coming soon.</p>
                        )}
                    </div>
                    <div className="menu-footer">
                        <button className="btn btn-dark btn-small">View Full Menu</button>
                    </div>
                </div>
            </div>

            {/* Gallery Section Reuse Image */}
            <div className="gallery-section">
                <div className="container">
                    <h3 className="section-title text-center">Gallery</h3>
                    <div className="gallery-grid">
                        <img src={restaurant.image} alt="Gallery 1" />
                        <img src={restaurant.image} alt="Gallery 2" style={{ filter: 'brightness(0.8)' }} />
                        <img src={restaurant.image} alt="Gallery 3" style={{ filter: 'sepia(0.5)' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetail;
