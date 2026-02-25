import { createContext, useReducer } from "react";
import questions from "../../data/questions";

// constante que determina os estágios do quiz
const STAGES = ["Start", "Playing", "End"];

//  reducer gerencia estados complexos do quiz
const initialState = {
  gameStage: STAGES[0],
  questions,
};

// state: comça com o initialSate e depois será modificado, action: ação que o usuário irá realizar
const quizReducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_STAGE":
      return {
        ...state,
        gameStage: STAGES[1],
      };
    default:
      return state;
  }
};

export const QuizContext = createContext({});

export const QuizProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QuizContext.Provider value={useReducer(quizReducer, initialState)}>
      {children}
    </QuizContext.Provider>
  );
};
