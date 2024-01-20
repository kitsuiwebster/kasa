import React from 'react';
import './index.scss';

function StarRating({ rating }) {
    const totalStars = 5;
    return (
        <div className="star-rating">
            {[...Array(totalStars)].map((_, index) => (
                <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>★</span>
            ))}
        </div>
    );
}

export default StarRating;