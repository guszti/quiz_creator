import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuessButton from "./components/GuessButton";
import EndScreen from "./components/Endscreen";
import { getQuestions } from "../redux/selectors";
import { getQuestionNumber, getResult, getScore } from "./redux/selectors";
import { setQuestionNumber, setResult, setScore } from "./redux/actions";

const Quiz: FC = () => {
    const dispatch = useDispatch();

    const questions = useSelector(getQuestions);
    const questionNumber = useSelector(getQuestionNumber);
    const score = useSelector(getScore);
    const result = useSelector(getResult);

    const isCorrect = () => {
        let count = questions[questionNumber].answers.filter(
            (item) => item.isRight
        );

        return Number(score === count.length);
    };

    const submitQuestion = () => {
        dispatch(setQuestionNumber(questionNumber + 1));
        dispatch(setResult(result + isCorrect()));
        dispatch(setScore(0));
    };

    return (
        <div className="container">
            {questionNumber < questions.length ? (
                <form onSubmit={submitQuestion}>
                    <br />
                    <h1
                        className="alert alert-danger"
                        style={{ textAlign: "center" }}
                    >
                        {questions[questionNumber].title}
                    </h1>
                    {questions[questionNumber].answers.map((answer, index) => (
                        <GuessButton
                            key={answer.text + index + questionNumber}
                            text={answer.text}
                            id={index}
                        />
                    ))}
                    <div>
                        <input
                            className="btn btn-primary"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
            ) : (
                <EndScreen
                    result={result}
                    numberOfQuestions={questions.length}
                />
            )}
        </div>
    );
};

export default Quiz;
