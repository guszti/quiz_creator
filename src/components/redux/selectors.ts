import { StoreState } from "../../rootReducer";

export const getIsRunning = (state: StoreState) => state.global.isRunning;

export const getQuestions = (state: StoreState) => state.global.questions;
