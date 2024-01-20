import React, { useState } from 'react';
import './index.scss';

function Photo({ imageSrcs, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const hasImages = imageSrcs && imageSrcs.length > 0;

    const handleNext = () => {
        if (hasImages) {
            setCurrentIndex((currentIndex + 1) % imageSrcs.length);
        }
    };

    const handlePrev = () => {
        if (hasImages) {
            setCurrentIndex((currentIndex - 1 + imageSrcs.length) % imageSrcs.length);
        }
    };

    if (!hasImages) {
        return <div>Aucune photo disponible.</div>;
    }

    return (
        <div className="photo">
            <button className="photo-button photo-button-prev" onClick={handlePrev}>&lt;</button>
            <img className="photo-file" src={imageSrcs[currentIndex]} alt={title} />
            <button className="photo-button photo-button-next" onClick={handleNext}>&gt;</button>
        </div>
    );
}

export default Photo;
