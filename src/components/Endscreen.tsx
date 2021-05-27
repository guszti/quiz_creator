import * as React from 'react';
import {FC} from "react";

type OwnProps = {
    retryQuiz(): void;
    resetQuiz(): void;
    result: number;
    numberOfQuestions: number;
};

const EndScreen: FC<OwnProps> = ({resetQuiz, retryQuiz, result, numberOfQuestions}) => {
    const final = result / numberOfQuestions * 100;

    return(
      <div style={{textAlign: "center"}}>
        <br />
        <h2 style={{fontFamily: 'helvetica'}}>Quiz has ended!</h2>
        <p style={{fontFamily: 'helvetica'}}>You've reached {final}%</p>
        <br />
        <button className="btn btn-danger float-left" style={{width: '45%'}} onClick={resetQuiz} >Create new quiz</button><button className="btn btn-info float-right" style={{width: '45%'}} onClick={retryQuiz}>Try this one again</button>
      </div>
    );
}

  export default EndScreen;