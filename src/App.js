import React, { useState } from "react";
import "./App.css";
import InputCheckbox from "./objects/InputCheckbox";
import AboutGame from "./objects/AboutGame";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame"
import HeaderAbout from "./components/HeaderAbout";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";
let numList = 0;

const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const [activeTag, setActiveTag] = useState("");
  
  const handleClickAddAbout = () => setActiveAbout("-active");
  const handleClickRemoveAbout = () => setActiveAbout("");
  const handleClickAddTag = () => setActiveTag(() => numList++);
    
  return (
    <main id="main" className="app">
        <HeaderGame onClick={handleClickAddAbout}/>
        <HashtagGame numList={handleClickAddTag}/>
        <InputCheckbox id="show" value="show" content="Mostrar eventos"/>
        <HistoryGame className={activeTag}/>
        <AboutGame className={activeAbout}>
          <HeaderAbout onClick={handleClickRemoveAbout}/>
          <ProfileUser />
        </AboutGame>
    </main>
  )
};

export default App;
