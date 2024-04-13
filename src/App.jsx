import "./reset.css";
import React from "react";
import Header from "./Components/Header/Header";
import CharacterRating from "./Components/CharacterRating/CharacterRating";
import { data } from "./constant/fma-data";
import CharacterCards from "./Components/CharacterCards/CharacterCards";

function App() {
  return (
    <>
      <Header />
      <CharacterRating cardItems={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;
