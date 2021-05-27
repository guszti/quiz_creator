import React, {FC, useState} from 'react';
import GuessButton from './GuessButton';
import EndScreen from './Endscreen';
import {Question} from "./QuizCreator";

type OwnProps = {
    questions: Question[];
    resetQuiz(): void;
};

const Quiz: FC<OwnProps> = ({questions, resetQuiz}) => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [result, setResult] = useState(0);
  
    const handleGuess = (id: number, guess: boolean) => {
        const isRight = questions[questionNumber].answers[id].isRight === guess;
        const valueToAdd = isRight ? 1 : -1;
        
        setScore(score + valueToAdd);
    }
    
    const isCorrect = () => {
      let count = questions[questionNumber].answers.filter((item) => item.isRight);

      return Number(score === count.length);
    }

    const submitQuestion = () => {
        setQuestionNumber(questionNumber + 1);
        setResult(result + isCorrect());
        setScore(0);
    }

    const retryQuiz = () => {
        setQuestionNumber(0);
        setResult(0);
        setScore(0);
    }
  
      return(
        <div className="container">
          {questionNumber < questions.length ?
            <form onSubmit={submitQuestion}>
              <br />
              <h1 className="alert alert-danger" style={{textAlign: "center"}}>{questions[questionNumber].title}</h1>
              {questions[questionNumber].answers.map((answer, index) =>
                <GuessButton key={answer.text + index + questionNumber} handleGuess={handleGuess} text={answer.text} id={index}/>
              )}
              <div>
                <input className="btn btn-primary" type="submit" value="Submit" />
              </div>
            </form>
          : 
            <EndScreen retryQuiz={retryQuiz} resetQuiz={resetQuiz} result={result} numberOfQuestions={questions.length} />
          }
        </div>
      );
  }

  export default Quiz;