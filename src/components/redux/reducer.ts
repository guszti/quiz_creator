import { GlobalState } from "../types";
import { QuizCreatorActions } from "./constants";
import { addQuestion, setIsRunning, resetQuestions } from "./actions";

const initialState: GlobalState = {
    isRunning: false,
    questions: [],
};

type Actions = ReturnType<typeof setIsRunning> &
    ReturnType<typeof resetQuestions> &
    ReturnType<typeof addQuestion>;

export const reducer = (state = initialState, action: Actions) => {
    switch (action.type) {
        case QuizCreatorActions.SetIsRunning:
            return {
                ...state,
                isRunning: action.payload.isRunning,
            };
        case QuizCreatorActions.ResetQuestions:
            return {
                ...state,
                questions: [],
            };
        case QuizCreatorActions.AddQuestion:
            return {
                ...state,
                questions: [...state.questions, action.payload.question],
            };
        default:
            return state;
    }
};
