import React, { useState } from "react";
import "./App.css";
import InputCheckbox from "./objects/InputCheckbox";
import AboutGame from "./objects/AboutGame";
import HeaderGame from "./components/HeaderGame";
import HashtagGame from "./components/HashtagGame"
import HeaderAbout from "./components/HeaderAbout";
import ProfileUser from "./components/ProfileUser";
import HistoryGame from "./components/HistoryGame";


const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  
  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");

  return (
    <main id="main" className="app">
        <HeaderGame onClick={handleClickAdd}/>
        <HashtagGame />
        <InputCheckbox id="show" value="show" content="Mostrar eventos"/>
        <HistoryGame/>
        <AboutGame className={activeAbout}>
          <HeaderAbout onClick={handleClickRemove}/>
          <ProfileUser />
        </AboutGame>
    </main>
  )
};

export default App;
