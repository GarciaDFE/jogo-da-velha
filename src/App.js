import React from "react";
import "./App.css";
import CheckboxEvents from "./objects/CheckboxEvents"
import AboutGame from "./objects/AboutGame"
import HeaderGame from "./components/HeaderGame"
import HashtagGame from "./components/HashtagGame"
import HeaderAbout from "./components/HeaderAbout";

function App() {
  return (
    <div className="App">
        <HeaderGame />
        <HashtagGame />
        <CheckboxEvents id="show" value="show" content="Mostrar eventos"/>
        <AboutGame>
          <HeaderAbout />
        </AboutGame>
    </div>
  );
}

export default App;
