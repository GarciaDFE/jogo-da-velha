import React from "react";
import "./App.css";
import Logo from "./objects/logo"
import NavItem from "./objects/navItem"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <NavItem />
      </header>
    </div>
  );
}

export default App;
