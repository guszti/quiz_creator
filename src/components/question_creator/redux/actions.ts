import { QuestionCreatorActions } from "./constants";
import { Answer } from "../types";

export const setTitle = (title: string) => ({
    type: QuestionCreatorActions.SetTitle,
    payload: {
        title,
    },
});

export const setAnswers = (answers: Answer[]) => ({
    type: QuestionCreatorActions.SetAnswers,
    payload: {
        answers,
    },
});

export const markAnswer = (index: number, markedAs: boolean) => ({
    type: QuestionCreatorActions.MarkAnswer,
    payload: {
        index,
        markedAs,
    },
});
