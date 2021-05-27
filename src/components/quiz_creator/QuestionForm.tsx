import * as React from 'react';
import {ChangeEvent, FC, useState} from "react";

type OwnProps = {
    setTitle(title: string): void;
    addAnswer(answer: string): void;
    title: string;
};

const QuestionForm: FC<OwnProps> =  ({setTitle, addAnswer, title}) => {
    const [value, setValue] = useState("");
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  
    const handleTitle = () => {
        if(!!value){
            setTitle(value);
        }
    }
  
    const handleAnswer = () => {
      if(!!value){
        addAnswer(value);
      }
    }
  
      const question = (     
        <div>
          <form onSubmit={handleTitle}>
            <input className="form-control" style={{width: '100%'}} type='text' value={value} onChange={handleChange} />
            <input className="btn btn-danger" style={{width: '100%'}} type='submit' value='Add a question!' />
          </form>
        </div>
      );
  
      const answer = (     
        <div>
          <form onSubmit={handleAnswer}>
            <input className="form-control" style={{width: '100%'}} type='text' value={value} onChange={handleChange} />
            <input className="btn btn-info" style={{width: '100%'}} type='submit' value='Add an answer!' />
          </form>
        </div>
      );
  
      return(
        <div>
          {title ? answer : question}
        </div>
      );
  }

  export default QuestionForm;