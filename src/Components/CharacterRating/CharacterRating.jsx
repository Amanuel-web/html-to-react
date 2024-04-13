import React from "react";
import "./characterRating.css";
import CharacterRatingRow from "./CharacterRatingRow.jsx";
import { data } from "../../constant/fma-data.ts";

function CharacterRating() {
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
          <CharacterRatingRow data={data} />
        </tbody>
      </table>
    </section>
  );
}

export default CharacterRating;
