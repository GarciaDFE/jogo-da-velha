import React, { useState } from "react";
import "./App.css";
import AboutGame from "./objects/AboutGame";
import InputCheckbox from "./objects/InputCheckbox";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame"
import HeaderAbout from "./components/HeaderAbout";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [activeHistory, setActiveHistory] = useState("");
  const [activeTag, setActiveTag] = useState("");
  
  const handleClickAddAbout = () => setActiveAbout("-active");
  const handleClickRemoveAbout = () => setActiveAbout("");
  
  const handleClickAddTag = () => setActiveTag("-active");

  const handleClick = () => {
    if (activeHistory) {
      setActiveHistory("")
    } else {
      setActiveHistory("-active")
    }
  }

  return (
    <main id="main" className="app">
        <HeaderGame onClick={handleClickAddAbout}/>
        <div className="group">
          <HashtagGame onClick={handleClickAddTag}/>
          <InputCheckbox 
            onClick={handleClick} 
            id="show" 
            value="show" 
            content="Mostrar eventos"/>
        </div>
        <HistoryGame className={activeHistory} activeTag={activeTag}/>
        <AboutGame className={activeAbout}>
          <HeaderAbout onClick={handleClickRemoveAbout}/>
          <ProfileUser />
        </AboutGame>
    </main>
  )
};

export default App;
