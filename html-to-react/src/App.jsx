import "./App.css";
import Nav from "./NavComp";
import Characters from "./CharacterComp";
import { data } from "./fma-data";
import Cards from "./Cards";
function App() {
  return (
    <>
      <Nav></Nav>
      <Characters></Characters>
      <Cards cardItems={data}></Cards>
    </>
  );
}

export default App;
