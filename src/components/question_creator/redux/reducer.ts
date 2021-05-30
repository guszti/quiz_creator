import { QuestionCreatorState } from "../types";
import { markAnswer, setAnswers, setTitle } from "./actions";
import { QuestionCreatorActions } from "./constants";

const initialState: QuestionCreatorState = {
    title: "",
    answers: [],
};

type Actions = ReturnType<typeof setTitle> &
    ReturnType<typeof setAnswers> &
    ReturnType<typeof markAnswer>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case QuestionCreatorActions.SetTitle:
            return {
                ...state,
                title: action.payload.title,
            };
        case QuestionCreatorActions.SetAnswers:
            return {
                ...state,
                answers: action.payload.answers,
            };
        case QuestionCreatorActions.MarkAnswer:
            return {
                ...state,
                answers: state.answers.map((answer, index) => {
                    if (index === action.payload.index) {
                        return {
                            ...answer,
                            isRight: action.payload.markedAs,
                        };
                    }

                    return { ...answer };
                }),
            };
        default:
            return state;
    }
};
