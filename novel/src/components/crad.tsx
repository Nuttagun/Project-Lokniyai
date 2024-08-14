import React from 'react';
import './card.css';

interface CardProps {
    card: {
        name: string;
        imgUrl: string;
        views: string;
        like: string;
    };
}

const Card: React.FC<CardProps> = ({ card }) => {
    return (
        <div className='Mcard'>
            <img id='Mcard' src={card.imgUrl} alt={card.name} />
            <div className='tailbox'>
                <span id='htailb'><b>{card.name}</b></span>
                <div className='pb'>
                    <img id="ieyeb" src="/src/assets/0eye.png" alt="eye" />
                    <span id='view_likeb'>{card.views}</span>
                    <img id="ieyeb" src="/src/assets/0heart.png" alt="heart" />
                    <span id='view_likeb'>{card.like}</span>
                </div>
            </div>   
        </div>
    );
};

export default Card;
