import React from 'react';
import './Card.css'; 

const Card = ({ imageUrl, title, description, author }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-author">By {author}</p>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
