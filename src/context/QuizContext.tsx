import React, { createContext, useReducer, ReactNode } from "react";

export interface Unit {
  id: number;
  name: string;
  description: string;
  quizzes: Quiz[];
}

export interface Quiz {
  id: number;
  name: string;
  description: string;
  questions: Question[];
}

interface Question {
  id: number;
  content: string;
  choice: string[];
  trueChoice: string;
  explaination?: string;
}

interface CourseState {
  course: { name: string; description: string; tag: string };
  units: Unit[];
  newUnit: { name: string; description: string };
  newQuiz: {
    name: string;
    description: string;
    id: number;
    questions: Question[];
  };
  newQuestion: Question;
  selectedUnitId: { name: string; id: number } | null;
  isEditingUnit: number | null;
  isEditingQuiz: number | null;
  isEditingQuestion: number | null;
}

type CourseAction =
  | { type: "ADD_UNIT"; payload: Unit }
  | { type: "ADD_QUIZ"; payload: Quiz }
  | { type: "ADD_QUESTION"; payload: Question }
  | { type: "DELETE_UNIT"; payload: number }
  | { type: "DELETE_QUESTION"; payload: number }
  | {
      type: "SET_COURSE";
      payload: { name: string; description: string; tag: string };
    }
  | { type: "SET_NEW_UNIT"; payload: { name: string; description: string } }
  | {
      type: "SET_NEW_QUIZ";
      payload: {
        name: string;
        description: string;
        id: number;
        questions: Question[];
      };
    }
  | {
      type: "SET_NEW_QUESTION";
      payload: {
        id: number;
        content: string;
        choice: string[];
        trueChoice: string;
        explaination?: string;
      };
    }
  | { type: "SET_SELECTED_UNIT"; payload: { name: string; id: number } | null }
  | { type: "SET_EDITING_UNIT"; payload: number | null }
  | { type: "SET_EDITING_QUIZ"; payload: number | null }
  | { type: "SET_EDITING_QUESTION"; payload: number | null }
  | { type: "UPDATE_UNITS"; payload: Unit[] }
  | {
      type: "UPDATE_UNIT";
      payload: {
        id: number | null;
        name: string;
        description: string;
        quizzes?: Quiz[];
      };
    }
  | {
      type: "UPDATE_QUIZ";
      payload: {
        unitId: number;
        quizId: number;
        name: string;
        description: string;
        questions: Question[];
      };
    }
  | {
      type: "RESET_QUIZ_FORM";
      payload?: null;
    };

const initialState: CourseState = {
  course: { name: "", description: "", tag: "" },
  units: [],
  newUnit: { name: "", description: "" },
  newQuiz: { name: "", description: "", id: 0, questions: [] },
  newQuestion: {
    id: 0,
    content: "",
    choice: ["", ""],
    trueChoice: "",
    explaination: "",
  },
  selectedUnitId: null,
  isEditingUnit: null,
  isEditingQuiz: null,
  isEditingQuestion: null,
};

const courseReducer = (
  state: CourseState,
  action: CourseAction
): CourseState => {
  switch (action.type) {
    case "SET_NEW_QUIZ":
      return { ...state, newQuiz: action.payload };
    case "SET_NEW_UNIT":
      return { ...state, newUnit: action.payload };
    case "SET_NEW_QUESTION":
      return { ...state, newQuestion: action.payload };
    case "SET_COURSE":
      return { ...state, course: action.payload };
    case "ADD_UNIT":
      return { ...state, units: [...state.units, action.payload] };
    case "ADD_QUIZ":
      return {
        ...state,
        units: state.units.map((unit) => {
          return unit.id === state.selectedUnitId?.id
            ? {
                ...unit,
                quizzes: [...unit.quizzes, { ...action.payload }],
              }
            : unit;
        }),
      };
    case "ADD_QUESTION":
      return {
        ...state,
        newQuiz: {
          ...state.newQuiz,
          questions: [...state.newQuiz.questions, action.payload],
        },
      };
    case "DELETE_UNIT":
      return {
        ...state,
        units: state.units.filter((u) => u.id !== action.payload),
      };
    case "DELETE_QUESTION":
      return {
        ...state,
        newQuiz: {
          ...state.newQuiz,
          questions: state.newQuiz.questions.filter(
            (q) => q.id != action.payload
          ),
        },
      };
    case "SET_SELECTED_UNIT":
      return { ...state, selectedUnitId: action.payload };
    case "SET_EDITING_UNIT":
      return { ...state, isEditingUnit: action.payload };
    case "SET_EDITING_QUIZ":
      return { ...state, isEditingQuiz: action.payload };
    case "SET_EDITING_QUESTION":
      return { ...state, isEditingQuestion: action.payload };
    case "UPDATE_UNIT":
      return {
        ...state,
        units: state.units.map((unit) =>
          unit.id === action.payload.id
            ? {
                ...unit,
                name: action.payload.name,
                description: action.payload.description,
                quizzes: action.payload?.quizzes ?? unit.quizzes,
              }
            : unit
        ),
      };
    case "UPDATE_UNITS":
      return {
        ...state,
        units: state.units,
      };
    case "UPDATE_QUIZ":
      return {
        ...state,
        units: state.units.map((unit) =>
          unit.id === action.payload.unitId
            ? {
                ...unit,
                quizzes: unit.quizzes.map((quiz) =>
                  quiz.id === action.payload.quizId
                    ? {
                        ...quiz,
                        name: action.payload.name,
                        description: action.payload.description,
                        questions: action.payload.questions,
                      }
                    : quiz
                ),
              }
            : unit
        ),
      };
    case "RESET_QUIZ_FORM":
      return {
        ...state,
        newQuiz: { name: "", description: "", id: 0, questions: [] },
        newQuestion: {
          id: 0,
          content: "",
          choice: [],
          trueChoice: "",
          explaination: "",
        },
        selectedUnitId: null,
        isEditingQuiz: null,
        isEditingQuestion: null,
      };
    default:
      return state;
  }
};

export const CourseContext = createContext<{
  state: CourseState;
  dispatch: React.Dispatch<CourseAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const CourseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(courseReducer, initialState);

  return (
    <CourseContext.Provider value={{ state, dispatch }}>
      {children}
    </CourseContext.Provider>
  );
};
