import { Question } from "./question_creator/types";

export type GlobalState = {
    isRunning: boolean;
    questions: Question[];
};
