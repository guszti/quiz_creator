import * as React from 'react';
import '../../App.css';
import {FC, useState} from "react";

type OwnProps = {
    id: number;
    handleGuess(id: number, guess: boolean): void;
    text: string;
};

const GuessButton: FC<OwnProps> = ({id, handleGuess, text}) =>  {
    const [isMarked, setIsMarked] = useState(false);
    
    const handleClick = () => {
      setIsMarked(!isMarked);
      handleGuess(id, isMarked);
    }
  
      return(

        isMarked
        ?
        <div><button className="btn btn-success" style={{width: "100%",height: "90px"}} onClick={handleClick}>{text}</button><br /><br /></div>
        :
        <div><button className="btn btn-secondary" style={{width: "100%",height: "90px"}} onClick={handleClick}>{text}</button><br /><br /></div>
      
        );
  }

  export default GuessButton;