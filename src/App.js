import React from "react";
import logo from "./img/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://collabcode.training/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <nav>
          <ul>
            <li className="navItem">Sobre</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
