import React from "react";
import "./characterCard.css";
import CharacterCardsDef from "./CharacterCardsDef";

class CharacterCards extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <section id="character-cards">
        {data.map((item, index) => (
          <CharacterCardsDef key={item.name} data={item} index={index} />
        ))}
      </section>
    );
  }
}

export default CharacterCards;
