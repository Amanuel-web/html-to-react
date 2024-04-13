import { data } from "../../constant/fma-data";
import React from "react";

function CharacterRatingRow({ data, index }) {
  const sortedItems = data.slice(0, 5).sort((a, b) => b.votes - a.votes);

  return sortedItems.map((item, index) => (
    <tr key={index} className={`${index % 2 === 0 ? "light" : "dark"}`}>
      <td>{item.name}</td>
      <td>
        {Array.isArray(item.skillset)
          ? item.skillset.join(", ")
          : item.skillset}
      </td>
      <td>{item.votes}</td>
    </tr>
  ));
}

export default CharacterRatingRow;
