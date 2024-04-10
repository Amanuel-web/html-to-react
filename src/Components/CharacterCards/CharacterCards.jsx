import React from "react";
import "./characterCard.css";

class CharacterCards extends React.Component {
  render() {
    const { cardItems } = this.props;

    return (
      <section id="character-cards">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className={`${index % 2 === 0 ? "card light" : "card dark"}`}
          >
            <div className="card-titles">
              <h3>{item.name}</h3>
              <h4>{item.nickName || ""}</h4>
            </div>
            <img src={item.imageUrl} alt="" />
            <p>{item.background}</p>
          </div>
        ))}
      </section>
    );
  }
}

export default CharacterCards;
