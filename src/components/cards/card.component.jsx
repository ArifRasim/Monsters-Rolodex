import React from "react";
import "./card.style.css"
export const Card = (props) => (
  <div className="card-container">
  <img  src={`https://robohash.org/${props.monster.id}?size=180x180`} alt={props.monster.id}></img>
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);
