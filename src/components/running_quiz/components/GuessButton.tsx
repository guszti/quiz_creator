import * as React from "react";
import { memo, MouseEvent } from "react";
import "../../../App.css";
import { FC, useState } from "react";
import { setScore } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../redux/selectors";
import { getQuestionNumber, getScore } from "../redux/selectors";

type OwnProps = {
    id: number;
    text: string;
};

const GuessButton: FC<OwnProps> = ({ id, text }) => {
    const dispatch = useDispatch();

    const [isMarked, setIsMarked] = useState(false);

    const questions = useSelector(getQuestions);
    const questionNumber = useSelector(getQuestionNumber);
    const score = useSelector(getScore);

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIsMarked(!isMarked);

        const answer = questions[questionNumber].answers[id];
        const valueToAdd = answer.isRight === !isMarked ? 1 : -1;

        dispatch(setScore(score + valueToAdd));
    };

    return (
        <div>
            <button
                className={isMarked ? "btn btn-success" : "btn btn-secondary"}
                style={{ width: "100%", height: "90px" }}
                onClick={handleClick}
            >
                {text}
            </button>
            <br />
            <br />
        </div>
    );
};

export default memo(GuessButton);
