import * as React from "react";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { markAnswer } from "../redux/actions";
import { Answer } from "../types";

type OwnProps = {
    answer: Answer;
    index: number;
};

const AnswerListItem: FC<OwnProps> = ({ index, answer }) => {
    const dispatch = useDispatch();

    const handleCheck = () => {
        dispatch(markAnswer(index, !answer.isRight));
    };

    return (
        <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
        >
            {answer.text}
            <input
                type="checkbox"
                onChange={handleCheck}
                value={Number(answer.isRight)}
            />
        </li>
    );
};

export default AnswerListItem;
