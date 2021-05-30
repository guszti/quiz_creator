export type QuestionCreatorState = {
    title: string;
    answers: Answer[];
};

export type Question = {
    title: string;
    answers: Answer[];
};

export type Answer = {
    text: string;
    isRight: boolean;
};
