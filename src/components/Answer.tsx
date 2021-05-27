import * as React from 'react';
import {FC, useState} from "react";

type OwnProps = {
  markAnswer(marking: boolean, answerIndex: number): void;
  answerText: string;
  index: number;
};

const Answer: FC<OwnProps> = ({markAnswer, index, answerText}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
    markAnswer(isChecked, index);
  }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
          {answerText}<input type="checkbox" onChange={handleCheck} />
        </li>
    );
}

export default Answer;