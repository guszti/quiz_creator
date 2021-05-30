import { StoreState } from "../../../rootReducer";

export const getScore = (state: StoreState) => state.quiz.score;

export const getQuestionNumber = (state: StoreState) =>
    state.quiz.questionNumber;

export const getResult = (state: StoreState) => state.quiz.result;
