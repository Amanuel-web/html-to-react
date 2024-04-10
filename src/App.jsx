import "./App.css";
import React from "react";
import Header from "./Components/Header/Header";
import CharacterRating from "./Components/CharacterRating/CharacterRating";
import { data } from "./Components/Header/fma-data";
import CharacterCards from "./Components/CharacterCards/CharacterCards";

function App() {
  return (
    <>
      <Header />
      <CharacterRating cardItems={data} />
      <CharacterCards cardItems={data} />
    </>
  );
}

export default App;
