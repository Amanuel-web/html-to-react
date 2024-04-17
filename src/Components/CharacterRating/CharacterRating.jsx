import React from "react";
import "./characterRating.css";
import CharacterRatingRow from "./CharacterRatingRows.jsx";
import { data } from "../../constant/fma-data.ts";

function CharacterRating() {
  const topFiveItems = data.sort((a, b) => b.votes - a.votes).slice(0, 5);
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topFiveItems.map((character, index) => (
            <CharacterRatingRow
              character={character}
              index={index}
              key={character.name}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CharacterRating;
