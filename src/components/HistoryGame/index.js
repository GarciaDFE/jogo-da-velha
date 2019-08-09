import React from "react";
import "./styles.css"
import TagGame from "../../objects/TagGame"

const HistoryGame = ({ className }) => (
     <ol className="history-game">
          <li className={`action ${className}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action ${className}`}>
               <TagGame className="-end" content="Empate!"/>
          </li>
     </ol>
);

export default HistoryGame;