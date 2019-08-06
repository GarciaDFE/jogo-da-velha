import React from "react";
import "./App.css";
import Checkbox from "./objects/Checkbox"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag"

function App() {
  return (
    <div className="App">
        <Header />
        <Hashtag />
        <Checkbox id="show" value="show" content="Mostrar eventos"/>
    </div>
  );
}

export default App;
