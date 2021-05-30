import * as React from "react";
import { FC } from "react";
import TitleBar from "./common/TitleBar";
import Quiz from "./running_quiz/Quiz";
import { useSelector } from "react-redux";
import { getIsRunning } from "./redux/selectors";
import QuestionCreator from "./question_creator/QuestionCreator";

const QuizCreator: FC = () => {
    const isRunning = useSelector(getIsRunning);

    return (
        <div>
            <TitleBar />
            {isRunning ? <Quiz /> : <QuestionCreator />}
        </div>
    );
};

export default QuizCreator;
