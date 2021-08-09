import React from 'react';
import Card from './Card';

const Works = () => {
  const works = [
    {img: "https://media.istockphoto.com/vectors/word-bubble-in-pop-art-comics-style-vector-id913062266?k=6&m=913062266&s=612x612&w=0&h=Wq6hYzoDlKdKi8fgh86d7sBzpsvUKfpZsac7sq7bW7I=", title: "Gossip project", link: "https://gossip-project-mat-edition.herokuapp.com/"},
    {img: "https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", title: "Eventbrite", link: "https://eventbrite-devise-mat.herokuapp.com/"},
    {img: "https://images.pexels.com/photos/2518078/pexels-photo-2518078.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", title: "FeedTruck", link: "https://feedtruck.herokuapp.com/"},
  ]

  return (
    <div className="works">
      <h1>Project</h1>
      <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez 
        The Hacking Project, et d'autres sont des projets personnels.</p>
        <ul class="works-list">
          {works.map((work) => {
            return (
              <li class="work-bullet">
                <Card img={work.img} title={work.title} link={work.link} />
              </li>
            )
          })}
        </ul>
    </div>
  );
};

export default Works;