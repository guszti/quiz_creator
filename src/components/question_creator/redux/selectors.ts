import { StoreState } from "../../../rootReducer";

export const getTitle = (state: StoreState) => state.questionCreator.title;

export const getAnswers = (state: StoreState) => state.questionCreator.answers;
