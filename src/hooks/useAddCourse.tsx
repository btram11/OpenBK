import { Unit, Quiz } from "@/context/QuizContext";
export const useAddCourse = (context: any) => {
  const { state, dispatch } = context;

  const addUnit = () => {
    if (state.newUnit.name.trim()) {
      const unit = {
        id: state.units.length + 1,
        name: state.newUnit.name,
        description: state.newUnit.description,
        quizzes: [],
      };
      dispatch({ type: "ADD_UNIT", payload: unit });
      dispatch({
        type: "SET_NEW_UNIT",
        payload: { name: "", description: "" },
      });
    }
  };

  const editUnit = (unit: Unit) => {
    dispatch({ type: "SET_EDITING_UNIT", payload: unit.id });
    dispatch({
      type: "SET_NEW_UNIT",
      payload: { name: unit.name, description: unit.description },
    });
  };

  const saveUnitChanges = () => {
    dispatch({
      type: "UPDATE_UNIT",
      payload: {
        id: state.isEditingUnit,
        name: state.newUnit.name,
        description: state.newUnit.description,
      },
    });
    dispatch({ type: "SET_EDITING_UNIT", payload: null });
    dispatch({ type: "SET_NEW_UNIT", payload: { name: "", description: "" } });
  };

  const editQuiz = (quiz: Quiz) => {
    dispatch({ type: "SET_EDITING_QUIZ", payload: quiz.id });
    dispatch({
      type: "SET_NEW_QUIZ",
      payload: {
        name: quiz.name,
        description: quiz.description,
        id: quiz.id,
        questions: quiz.questions,
      },
    });
  };

  return { editQuiz, addUnit, editUnit, saveUnitChanges };
};

export const useAddQuiz = (context: any) => {
  const { state, dispatch } = context;

  const saveQuizChanges = (quizId: number) => {
    dispatch({
      type: "UPDATE_QUIZ",
      payload: {
        unitId: state.selectedUnitId!.id,
        quizId: quizId,
        name: state.newQuiz.name,
        description: state.newQuiz.description,
        questions: state.newQuiz.questions,
      },
    });
    dispatch({ type: "RESET_QUIZ_FORM" });
  };
  const addQuizToUnit = () => {
    if (!state.selectedUnitId || !state.newQuiz.name.trim()) return;
    const targetUnit = state.units.find(
      (unit: any) => unit.id === state.selectedUnitId?.id
    );
    const quizzesLength = targetUnit ? targetUnit.quizzes.length : 0;

    const quiz = {
      id: quizzesLength + 1,
      name: state.newQuiz.name,
      description: state.newQuiz.description,
      questions: state.newQuiz.questions,
    };
    dispatch({ type: "ADD_QUIZ", payload: quiz });
    dispatch({ type: "RESET_QUIZ_FORM" });
  };

  const saveQuestionChanges = () => {
    dispatch({
      type: "SET_NEW_QUIZ",
      payload: {
        ...state.newQuiz,
        questions: state.newQuiz.questions.map((question: any) => {
          return question.id === state.newQuestion.id
            ? { ...state.newQuestion }
            : question;
        }),
      },
    });
    dispatch({
      type: "SET_NEW_QUESTION",
      payload: {
        id: 0,
        content: "",
        choice: [],
        trueChoice: "",
        explaination: "",
      },
    });
    dispatch({ type: "SET_EDITING_QUESTION", payload: null });
  };

  const addQuestion = () => {
    const id = state.newQuiz.questions.length + 1;
    dispatch({
      type: "ADD_QUESTION",
      payload: {
        ...state.newQuestion,
        id: id,
      },
    });
    dispatch({
      type: "SET_NEW_QUESTION",
      payload: {
        id: 0,
        content: "",
        choice: [],
        trueChoice: "",
        explaination: "",
      },
    });
  };

  const addChoices = () => {
    console.log(state.newQuestion.choice.length, "length");
    if (
      state.newQuestion.choice.length >=
      Number(process.env.NEXT_PUBLIC_MAX_QUESTION_CHOICES)
    ) {
      alert("Max choices reached");
      return;
    }

    dispatch({
      type: "SET_NEW_QUESTION",
      payload: {
        ...state.newQuestion,
        choice: [...state.newQuestion.choice, ""],
      },
    });
  };

  return {
    addQuizToUnit,
    saveQuizChanges,
    addQuestion,
    saveQuestionChanges,
    addChoices,
  };
};
