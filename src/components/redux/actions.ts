import { QuizCreatorActions } from "./constants";
import { Question } from "../question_creator/types";

export const setIsRunning = (isRunning: boolean) => ({
    type: QuizCreatorActions.SetIsRunning,
    payload: {
        isRunning,
    },
});

export const resetQuestions = () => ({
    type: QuizCreatorActions.ResetQuestions,
});

export const addQuestion = (question: Question) => ({
    type: QuizCreatorActions.AddQuestion,
    payload: {
        question,
    },
});
