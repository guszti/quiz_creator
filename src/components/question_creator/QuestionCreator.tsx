import * as React from "react";
import { FC } from "react";
import QuestionForm from "./components/QuestionForm";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../redux/selectors";
import { getTitle } from "./redux/selectors";
import { setIsRunning } from "../redux/actions";

const QuestionCreator: FC = () => {
    const dispatch = useDispatch();

    const questions = useSelector(getQuestions);
    const title = useSelector(getTitle);

    const startQuiz = () => dispatch(setIsRunning(true));

    return (
        <div className="container">
            {!!questions.length && (
                <div>
                    <br />
                    <button
                        className="btn btn-outline-success"
                        style={{ width: "100%" }}
                        onClick={startQuiz}
                    >
                        begin quiz
                    </button>
                    <br />
                    <br />
                </div>
            )}
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            <QuestionForm />
            {questions.map((question, index) => (
                <div key={index}>
                    <br />
                    <br />
                    <table style={{ width: "100%", textAlign: "center" }}>
                        <tbody>
                            <tr className="table-danger">
                                <th scope="row">{question.title}</th>
                            </tr>
                            {question.answers.map((answer, j) => (
                                <tr key={j}>
                                    <td
                                        className={
                                            answer.isRight
                                                ? "table-success"
                                                : "table-secondary"
                                        }
                                    >
                                        {answer.text}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default QuestionCreator;
