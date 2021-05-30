import * as React from "react";
import { ChangeEvent, FC, FormEvent, memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAnswers, getTitle } from "../redux/selectors";
import { setAnswers, setTitle } from "../redux/actions";
import { addQuestion } from "../../redux/actions";
import AnswerListItem from "./AnswerListItem";

const QuestionForm: FC = () => {
    const dispatch = useDispatch();

    const title = useSelector(getTitle);
    const answers = useSelector(getAnswers);

    const [value, setValue] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value);

    const handleTitle = (e: FormEvent) => {
        e.preventDefault();

        if (!!value) {
            dispatch(setTitle(value));
            setValue("");
        }
    };

    const handleAnswer = (e: FormEvent) => {
        e.preventDefault();

        if (!!value) {
            dispatch(setAnswers([...answers, { text: value, isRight: false }]));
            setValue("");
        }
    };

    const saveQuestion = () => {
        const hasRightAnswer = !!answers.find((item) => item.isRight);

        if (hasRightAnswer) {
            dispatch(addQuestion({ title, answers }));
            dispatch(setTitle(""));
            dispatch(setAnswers([]));
            setValue("");
        } else {
            alert("Mark at least one good answer!");
        }
    };

    return (
        <div>
            <div>
                <form onSubmit={!!title ? handleAnswer : handleTitle}>
                    <input
                        className="form-control"
                        style={{ width: "100%" }}
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                    <input
                        className={!!title ? "btn btn-info" : "btn btn-danger"}
                        style={{ width: "100%" }}
                        type="submit"
                        value={!!title ? "Add an answer!" : "Add a question!"}
                    />
                </form>
            </div>{" "}
            <ul className="list-group">
                {answers.map((answer, i) => (
                    <AnswerListItem answer={answer} key={i} index={i} />
                ))}
            </ul>
            {answers.length >= 2 ? (
                <button
                    className="btn btn-success"
                    style={{ width: "100%" }}
                    onClick={saveQuestion}
                >
                    save question
                </button>
            ) : (
                ""
            )}
        </div>
    );
};

export default memo(QuestionForm);
