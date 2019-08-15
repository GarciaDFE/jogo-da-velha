import React from "react";
import "./styles.css";
import TagGame from "../../objects/TagGame";

const HistoryGame = ({ className="", activeTag="" }) => (
     <ol className={`history-game ${className}`}>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${activeTag}`}>
               <TagGame className="-end" content="Empate!"/>
          </li>
     </ol>
);

export default HistoryGame;