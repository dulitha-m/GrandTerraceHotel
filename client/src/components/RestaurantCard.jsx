
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ name, description, image, cuisine, _id }) => {

    // Add hover state
    const [hovered, setHovered] = useState(false);

    return (
        <article className="restaurant-card"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>

            <div className="card-image-wrapper">
                <img src={image}
                    alt={name}
                    className="card-image"
                    loading="lazy" />
                <div className="card-overlay"></div>
                <span className="card-cuisine">{cuisine}</span>
            </div>

            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{description.substring(0, 100)}...</p>
                <div className="card-actions">
                    <Link to={`/restaurant/${_id}`} className="btn btn-primary btn-sm">Explore</Link>
                    <Link to="/contact" className="btn btn-outline btn-sm">Reserve</Link>
                </div>
            </div>
        </article>
    );
};

export default RestaurantCard;
