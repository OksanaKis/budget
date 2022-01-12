import React from 'react';
import '../../Main.css';

const Cards = ({show}) => {
    console.log("Cards")
    return (
        <div className={show ? 'transform' : 'full'}>
            Cards
        </div>
    );
};

export default Cards;