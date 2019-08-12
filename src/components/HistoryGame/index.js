import React from "react";
import "./styles.css"
import TagGame from "../../objects/TagGame"

const HistoryGame = () => (
     <ol className="history-game">
          <li className={`action -active`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou O"/>
          </li>
          <li className={`action -active`}>
               <TagGame content="Adicionou X"/>
          </li>
          <li className={`action -active`}>
               <TagGame className="-end" content="Empate!"/>
          </li>
     </ol>
);

export default HistoryGame;