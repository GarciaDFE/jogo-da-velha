import React, { useState } from "react";
import "./App.css";
import CheckboxEvents from "./objects/CheckboxEvents"
import AboutGame from "./objects/AboutGame"
import HeaderGame from "./components/HeaderGame"
import HashtagGame from "./components/HashtagGame"
import HeaderAbout from "./components/HeaderAbout";
import ProfileUser from "./components/ProfileUser";


const App = () => {
  const [activeAbout, setActiveAbout] = useState("");
  const handleClickAdd = () => setActiveAbout("-active");
  const handleClickRemove = () => setActiveAbout("");
  
  return (
    <main className="app">
        <HeaderGame onClick={handleClickAdd}/>
        <HashtagGame />
        <CheckboxEvents id="show" value="show" content="Mostrar eventos"/>
        <AboutGame className={activeAbout}>
          <HeaderAbout onClick={handleClickRemove}/>
          <ProfileUser />
        </AboutGame>
    </main>
  )
};

export default App;
