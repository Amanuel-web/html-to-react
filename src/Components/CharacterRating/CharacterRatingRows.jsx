import React from "react";

function CharacterRatingRows({ character, index }) {
  return (
    <tr className={`${index % 2 === 0 ? "light" : "dark"}`}>
      <td>{character.name}</td>
      <td>
        {Array.isArray(character.skillset)
          ? character.skillset.join(", ")
          : character.skillset}
      </td>
      <td>{character.votes}</td>
    </tr>
  );
}

export default CharacterRatingRows;
