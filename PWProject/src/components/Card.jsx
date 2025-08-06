import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, to, Icon }) => {
  const navigate = useNavigate();

  return (
    <div className="home-card" onClick={() => navigate(to)}>
      {Icon && <Icon className="home-card-icon" />}
      <div className="home-card-content">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default Card;
