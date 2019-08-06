import React from "react";
import "./App.css";
import Label from "./objects/Label"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag"

function App() {
  return (
    <div className="App">
        <Header />
        <Hashtag />
        <Label content="Mostrar eventos"/>
    </div>
  );
}

export default App;
