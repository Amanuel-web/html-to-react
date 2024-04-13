import CharacterCards from "./CharacterCards";
import React from "react";
import "./characterCard.css";

function CharacterCardsDef({ data, index }) {
  const { name, nickName, imageUrl, background } = data;
  return (
    <div key={name} className={`card${index % 2 === 0 ? " light" : " dark"}`}>
      <div className="card-titles">
        <h3>{name}</h3>
        <h4>{nickName || ""}</h4>
      </div>
      <img src={imageUrl} alt="" />
      <p>{background}</p>
    </div>
  );
}

export default CharacterCardsDef;
