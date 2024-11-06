// ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ image, title, technologies, detailLink, isExpanded, onToggle }) => {
  return (
    <div className={`project-card ${isExpanded ? 'expanded' : ''}`}>
      <img src={image} alt={title} className="project-card-image" />
      <div className="project-card-content">
        <h3 className="project-title">{title}</h3>
        <p className="technologies-title">Technologies:</p>
        <p className="technologies-list">{technologies}</p>
        <div className="project-card-buttons">
          <button className="source-code-button">Source code</button>
          <button
            className="project-detail-button"
            onClick={onToggle}
          >
            {isExpanded ? "- Hide details" : "+ Project detail"}
          </button>
        </div>
        {isExpanded && (
          <div className="project-description">
            <p>{detailLink}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
