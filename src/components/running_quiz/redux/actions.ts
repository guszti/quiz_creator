import { QuizActions } from "./constants";

export const setQuestionNumber = (questionNumber: number) => ({
    type: QuizActions.SetQuestionNumber,
    payload: {
        questionNumber,
    },
});

export const setResult = (result: number) => ({
    type: QuizActions.SetResult,
    payload: {
        result,
    },
});

export const setScore = (score: number) => ({
    type: QuizActions.SetScore,
    payload: {
        score,
    },
});
