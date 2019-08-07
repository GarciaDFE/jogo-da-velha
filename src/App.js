import React from "react";
import "./App.css";
import Checkbox from "./objects/Checkbox"
import About from "./objects/About"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag"

function App() {
  return (
    <div className="App">
        <Header />
        <Hashtag />
        <Checkbox id="show" value="show" content="Mostrar eventos"/>
        <About />
    </div>
  );
}

export default App;
