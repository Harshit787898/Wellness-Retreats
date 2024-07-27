import React from 'react';

function RetreatCard({ retreat }) {
  return (
    <div className="retreat-card">
      <img src={retreat.image} alt={retreat.title} className="retreat-image" />
      <div className="retreat-info">
        <h2 className="retreat-title">{retreat.title}</h2>
        <p className="retreat-description">{retreat.description}</p>
        <p className="retreat-date">Date: {retreat.date}</p>
        <p className="retreat-location">Location: {retreat.location}</p>
        <p className="retreat-price">Price: ${retreat.price}</p>
      </div>
    </div>
  );
}

export default RetreatCard;