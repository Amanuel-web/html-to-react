import React from "react";
import "./characterRating.css";

function CharacterRating({ cardItems }) {
  const sortedItems = cardItems.sort((a, b) => b.votes - a.votes);

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

        {sortedItems.slice(0, 5).map((item, index) => (
          <tr key={index} className={`${index % 2 === 0 ? "light" : "dark"}`}>
            <td>{item.name}</td>
            <td>
              {Array.isArray(item.skillset)
                ? item.skillset.join(", ")
                : item.skillset}
            </td>
            <td>{item.votes}</td>
          </tr>
        ))}
      </table>
    </section>
  );
}

export default CharacterRating;
