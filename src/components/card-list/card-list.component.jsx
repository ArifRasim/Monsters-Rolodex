import React from "react";
import {Card} from '../cards/card.component'
import "./card-list..component.css";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id}monster={monster}></Card>
      ))}
    </div>
  );
};
