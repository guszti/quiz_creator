import { QuizState } from "../types";
import { setQuestionNumber, setResult, setScore } from "./actions";
import { QuizActions } from "./constants";

const initialState: QuizState = {
    result: 0,
    questionNumber: 0,
    score: 0,
};

type Actions = ReturnType<typeof setResult> &
    ReturnType<typeof setQuestionNumber> &
    ReturnType<typeof setScore>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case QuizActions.SetQuestionNumber:
            return {
                ...state,
                questionNumber: action.payload.questionNumber,
            };
        case QuizActions.SetScore:
            return {
                ...state,
                score: action.payload.score,
            };
        case QuizActions.SetResult:
            return {
                ...state,
                result: action.payload.result,
            };
        default:
            return state;
    }
};
