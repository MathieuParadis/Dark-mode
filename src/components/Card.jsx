import React from 'react';

const Card = ({img, title, link}) => {
  return (
    <div className="card">
      <img class="card-img-top" src={img} alt="Card"/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <a class="card-link" href={link} target="blank">let's go check it</a>
      </div>
    </div>
  );
};

export default Card;