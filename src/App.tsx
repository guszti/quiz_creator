import * as React from "react";
import "./App.css";
import QuizCreator from "./components/QuizCreator";
import { FC, memo } from "react";

const App: FC = () => <QuizCreator />;

export default memo(App);
