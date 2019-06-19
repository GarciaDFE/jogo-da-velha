import React from "react";
import "./App.css";
import Logo from "./objects/logo"
import NavItem from "./objects/navItem"
import Toggle from "./objects/toggle"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <NavItem />
        <Toggle />
      </header>
    </div>
  );
}

export default App;
