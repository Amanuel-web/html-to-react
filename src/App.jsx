import "./reset.css";
import React from "react";
import Header from "./components/Header/Header";
import CharacterRating from "./components/CharacterRating/CharacterRating";
import { data } from "./constant/fma-data";
import CharacterCards from "./components/CharacterCards/CharacterCards";

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
