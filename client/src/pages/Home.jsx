import React, { useEffect, useState } from 'react';
import api from '../api';
import Hero from '../components/Hero';
import DiningCarousel from '../components/DiningCarousel';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    // Observer for scroll animations
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        setTimeout(() => {
            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        }, 100);

        return () => observer.disconnect();
    }, [restaurants]);

    useEffect(() => {
        const fetchRestaurants = async () => {
            const fallback = getFallbackData();
            setRestaurants(fallback);

            try {
                const response = await api.get('/restaurants');
                if (response.data && response.data.length > 0) {
                    setRestaurants(response.data);
                }
            } catch (error) {
                // Keep fallback
            }
        };

        fetchRestaurants();
    }, []);

    const getFallbackData = () => {
        return [
            {
                _id: '1',
                name: "Grand Terrace",
                description: "Experience the epitome of luxury dining.",
                cuisine: "Buffet",
                category: "All-Day Dining",
                image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80"
            },
            {
                _id: '2',
                name: "Governor's Bar",
                description: "Fine spirits and cocktails.",
                cuisine: "Bar",
                category: "Fine Spirits",
                image: "https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80"
            },
            {
                _id: '3',
                name: "Governor's Karaoke",
                description: "Unleash your inner star.",
                cuisine: "Entertainment",
                category: "Private Lounge",
                image: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&w=800&q=80"
            },
            {
                _id: '4',
                name: "Istanbul Nights",
                description: "Authentic Turkish flavors.",
                cuisine: "Turkish",
                category: "Shisha Lounge",
                image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
            },
            {
                _id: '5',
                name: "Tap Bar",
                description: "Craft beers and bar bites.",
                cuisine: "Pub",
                category: "Craft Brews",
                image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&w=800&q=80"
            }
        ];
    };

    const heroImages = [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=1920&q=80"
    ];

    return (
        <div className="home-page">
            <Hero
                title="Grand Terrace"
                subtitle="A Legacy of Luxury Dining"
                images={heroImages}
                showActions={true}
            />

            {/* Dining Carousel */}
            <section className="dining-carousel-container">
                <DiningCarousel restaurants={restaurants} />
            </section>
        </div>
    );
};

export default Home;
