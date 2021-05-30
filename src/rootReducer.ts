import { combineReducers } from "@reduxjs/toolkit";
import { reducer as global } from "./../src/components/redux/reducer";
import { reducer as questionCreator } from "./../src/components/question_creator/redux/reducer";
import { reducer as quiz } from "./../src/components/running_quiz/redux/reducers";

export const rootReducer = combineReducers({
    global,
    questionCreator,
    quiz,
});

export type StoreState = ReturnType<typeof rootReducer>;
