import React from 'react';
import './BirthdayCard.css'; // Assuming you will create a CSS file for specific styles

const BirthdayCard = ({ name, message, date }) => {
    return (
        <div className="birthday-card">
            <h1>Happy Birthday, {name}!</h1>
            <p>{message}</p>
            <p>Date: {date}</p>
        </div>
    );
};

export default BirthdayCard;