import * as React from 'react';
import Quiz from './Quiz';
import QuestionForm from './QuestionForm';
import Answer from './Answer';
import TitleBar from './TitleBar'
import {FC, useState} from "react";

export type Answer = {
    text: string;
    isRight: boolean;
};

export type Question = {
    title: string;
    answers: Answer[];
}

const QuizCreator: FC = ({}) => {
    const [title, setTitle] = useState("");
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [questions, setQuestions] = useState<Question[]>([]);
    const [isRunning, setIsRunning] = useState(false);
  
    const addAnswer = (answer: string) => {
      const newAnswer = {
        text: answer,
        isRight: false
      };
  
      setAnswers([...answers, newAnswer]);
    }
  
    const saveQuestion = () => {
      const rightAnswers = answers.filter((item) => item.isRight);
  
      if(!!rightAnswers.length){
          setQuestions([...questions, {title, answers}]);
          setTitle("");
          setAnswers([]);
      }else{
        alert('Mark at least one good answer!');
      }
    }
  
    const markAnswer = (marking: boolean, answerIndex: number) => {
      let newList = [...answers];
      newList[answerIndex].isRight = marking;
  
      setAnswers(newList);
    }

    const resetQuiz = () => {
        setIsRunning(false);
        setQuestions([]);
    }
    
      const save = (
          <button className="btn btn-success" style={{width: '100%'}} onClick={saveQuestion}>save question</button>
      );
  
      const run = (
        <div>
          <br />
          <button className="btn btn-outline-success" style={{width: '100%'}} onClick={() => setIsRunning(true)}>begin quiz</button>
          <br />
          <br />
        </div>
      );
  
      return(
        <div>
          <TitleBar />
          {isRunning ? <Quiz questions={questions} resetQuiz={resetQuiz} /> :
          <div className="container">
            {!!questions.length ? run : ''}
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            <QuestionForm title={title} setTitle={setTitle} addAnswer={addAnswer} />
            <ul className="list-group">
              {answers.map((a, i) =>
                <Answer answerText={a.text} key={i} index={i} markAnswer={markAnswer} />
              )}
            </ul>
            {answers.length >= 2 ? save : ''}
            {questions.map((item, i) => 
            <div key={i}>
              <br />
              <br/>
              <table style={{width: '100%', textAlign: 'center'}}>
                <tbody>
                  <tr className="table-danger"><th scope="row">{item.title}</th></tr>
                  {item.answers.map((item, j) => 
                    <tr key={j}>
                      {(item.isRight) ? <td  className="table-success">{item.text}</td> : <td className="table-secondary">{item.text}</td>}
                    </tr>
                  )}
                </tbody>
              </table>
              </div>
            )}
          </div>}
        </div>
      );
  }

  export default QuizCreator;