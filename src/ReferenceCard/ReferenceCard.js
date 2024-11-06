// src/components/ReferenceCard.js
import React from "react";
import "./ReferenceCard.css";

const ReferenceCard = ({ image, name, title, company, text }) => {
  return (
    <div className="reference-card">
      <div className="reference-profile">
        <img src={image} alt={name} className="profile-image" />
        <div className="profile-info">
          <h3>{name}</h3>
          <p className="title">{title}</p>
          <p className="company">{company}</p>
        </div>
      </div>
      <p className="reference-text">{text}</p>
    </div>
  );
};

export default ReferenceCard;





