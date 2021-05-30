import * as React from "react";
import { FC } from "react";
import { setQuestionNumber, setResult, setScore } from "../redux/actions";
import { resetQuestions, setIsRunning } from "../../redux/actions";
import { useDispatch } from "react-redux";

type OwnProps = {
    result: number;
    numberOfQuestions: number;
};

const EndScreen: FC<OwnProps> = ({ result, numberOfQuestions }) => {
    const dispatch = useDispatch();

    const final = (result / numberOfQuestions) * 100;

    console.log(result, numberOfQuestions)
    
    const retryQuiz = () => {
        dispatch(setQuestionNumber(0));
        dispatch(setResult(0));
        dispatch(setScore(0));
    };

    const resetQuiz = () => {
        dispatch(setIsRunning(false));
        dispatch(resetQuestions());
    };

    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <h2 style={{ fontFamily: "helvetica" }}>Quiz has ended!</h2>
            <p style={{ fontFamily: "helvetica" }}>You've reached {final}%</p>
            <br />
            <button
                className="btn btn-danger float-left"
                style={{ width: "45%" }}
                onClick={resetQuiz}
            >
                Create new quiz
            </button>
            <button
                className="btn btn-info float-right"
                style={{ width: "45%" }}
                onClick={retryQuiz}
            >
                Try this one again
            </button>
        </div>
    );
};

export default EndScreen;
