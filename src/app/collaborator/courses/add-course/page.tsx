"use client";
import {
  CourseContext,
  CourseProvider,
  Unit,
  Quiz,
} from "@/context/QuizContext";
import { useAddCourse, useAddQuiz } from "@/hooks/useAddCourse";
import { useContext } from "react";

const AddCoursePage: React.FC = () => {
  return (
    <CourseProvider>
      <AddCourseForm />
    </CourseProvider>
  );
};

const AddCourseForm: React.FC = () => {
  const context = useContext(CourseContext);
  const { state, dispatch } = context;

  const { editQuiz, addUnit, editUnit, saveUnitChanges } =
    useAddCourse(context);

  if (state.selectedUnitId) return <AddQuizForm />;

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-xl">Add Course</h3>
        <button className="px-4 py-1 bg-gray-300 font-semibold rounded-2xl hover:bg-saffron-200 duration-200">
          Publish Course
        </button>
      </div>

      {/* Input Course */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-9">
          <input
            className="border p-2 rounded w-full"
            placeholder="Course Name"
            value={state.course.name}
            onChange={(e) =>
              dispatch({
                type: "SET_COURSE",
                payload: {
                  ...state.course,
                  name: e.target.value,
                },
              })
            }
          />
          <input
            className="border p-2 rounded w-full"
            placeholder="Course Tag"
            value={state.course.tag}
            onChange={(e) =>
              dispatch({
                type: "SET_COURSE",
                payload: {
                  ...state.course,
                  tag: e.target.value,
                },
              })
            }
          />
        </div>

        <textarea
          className="border p-2 rounded w-full min-h-40"
          placeholder="Course Description"
          value={state.course.description}
          onChange={(e) =>
            dispatch({
              type: "SET_COURSE",
              payload: {
                ...state.course,
                description: e.target.value,
              },
            })
          }
        />
      </div>

      {/* Add Unit */}
      <div className="flex flex-col gap-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Add Unit</h4>
        <div className="flex gap-2 mb-2 flex-wrap">
          <input
            type="text"
            placeholder="Unit Name"
            className="p-2 border rounded flex-shrink"
            value={state.newUnit.name}
            onChange={(e) =>
              dispatch({
                type: "SET_NEW_UNIT",
                payload: {
                  ...state.newUnit,
                  name: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            placeholder="Unit Description"
            className="p-2 border rounded flex-shrink"
            value={state.newUnit.description}
            onChange={(e) =>
              dispatch({
                type: "SET_NEW_UNIT",
                payload: {
                  ...state.newUnit,
                  description: e.target.value,
                },
              })
            }
          />
          {!state.isEditingUnit && (
            <button
              className="px-4 py-2 bg-dodger-blue-500 text-white rounded"
              onClick={addUnit}
            >
              Add Unit
            </button>
          )}
          {state.isEditingUnit && (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={saveUnitChanges}
            >
              Save
            </button>
          )}
        </div>
      </div>

      {/* List Units */}
      <div className="flex flex-col gap-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Unit List</h4>
        {state.units.map((unit) => (
          <div
            key={unit.id}
            className="border p-4 rounded flex flex-col gap-2 bg-gray-100"
          >
            <div className="flex justify-between items-center">
              <h5 className="font-semibold">Unit: {unit.name}</h5>
              <div className="flex gap-4 items-center">
                <div>
                  <button
                    className="text-blue-500 mr-2"
                    onClick={() => editUnit(unit)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => {
                      dispatch({
                        type: "DELETE_UNIT",
                        payload: unit.id,
                      });
                      dispatch({
                        type: "SET_EDITING_UNIT",
                        payload: null,
                      });
                      dispatch({
                        type: "SET_NEW_UNIT",
                        payload: { name: "", description: "" },
                      });
                    }}
                  >
                    Delete
                  </button>
                </div>

                {/* Nút Add Quiz bên cạnh */}
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={() => {
                    dispatch({
                      type: "SET_EDITING_UNIT",
                      payload: null,
                    });
                    dispatch({
                      type: "SET_SELECTED_UNIT",
                      payload: { name: unit.name, id: unit.id },
                    });
                    dispatch({
                      type: "SET_NEW_UNIT",
                      payload: { name: "", description: "" },
                    });
                  }}
                >
                  Add Quiz
                </button>
              </div>
            </div>

            {/* Quiz List */}
            {unit.quizzes.length > 0 && (
              <div className="mt-2 border-t pt-2">
                <h6 className="font-medium">Quizzes:</h6>
                <ul className="list-disc pl-5">
                  {unit.quizzes.map((quiz) => (
                    <li
                      key={quiz.id}
                      className="flex items-center h-fit w-full"
                    >
                      <div className="flex justify-between items-center w-full">
                        <span className="font-semibold ">
                          Quiz: {quiz.name}, with {quiz.questions.length}{" "}
                          {quiz.questions.length > 1 ? "questions" : "question"}
                        </span>
                        <div className="flex gap-4 items-center">
                          <button
                            className="text-blue-500 mr-2"
                            onClick={() => {
                              editQuiz(quiz);
                              dispatch({
                                type: "SET_SELECTED_UNIT",
                                payload: {
                                  name: unit.name,
                                  id: unit.id,
                                },
                              });
                            }}
                          >
                            Edit
                          </button>
                          <button
                            className="text-red-500"
                            onClick={() => {
                              const updatedQuizzes = unit.quizzes.filter(
                                (q) => q.id !== quiz.id
                              );
                              const updatedUnit = {
                                ...unit,
                                quizzes: updatedQuizzes,
                              };

                              dispatch({
                                type: "UPDATE_UNIT",
                                payload: updatedUnit,
                              });
                              dispatch({
                                type: "SET_EDITING_UNIT",
                                payload: null,
                              });
                              dispatch({
                                type: "SET_EDITING_QUIZ",
                                payload: null,
                              });
                              dispatch({
                                type: "SET_NEW_QUIZ",
                                payload: {
                                  name: "",
                                  description: "",
                                  id: 0,
                                  questions: [],
                                },
                              });
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const AddQuizForm: React.FC = () => {
  const context = useContext(CourseContext);
  const { state, dispatch } = context;
  const {
    addQuizToUnit,
    saveQuizChanges,
    addQuestion,
    saveQuestionChanges,
    addChoices,
  } = useAddQuiz(context);

  return (
    <div className="w-full p-8 drop-shadow h-fit min-h-full bg-white rounded-2xl flex flex-col gap-6">
      <span
        onClick={() => dispatch({ type: "RESET_QUIZ_FORM" })}
        className="select-none cursor-pointer"
      >
        Go back to add course
      </span>
      {/* Add Quiz */}
      {state.selectedUnitId && (
        <div className="flex flex-col gap-4 pt-4">
          {!state.isEditingQuiz && (
            <h4 className="font-semibold text-lg">
              Add Quiz for Unit {state.selectedUnitId.name}
            </h4>
          )}
          {state.isEditingQuiz && (
            <h4 className="font-semibold text-lg">Editing Quiz</h4>
          )}
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Quiz Name"
              className="p-2 border rounded"
              value={state.newQuiz.name}
              onChange={(e) =>
                dispatch({
                  type: "SET_NEW_QUIZ",
                  payload: {
                    name: e.target.value,
                    description: state.newQuiz.description,
                    id: 0,
                    questions: state.newQuiz.questions,
                  },
                })
              }
            />
            <input
              type="text"
              placeholder="Quiz Description"
              className="p-2 border rounded"
              value={state.newQuiz.description}
              onChange={(e) =>
                dispatch({
                  type: "SET_NEW_QUIZ",
                  payload: {
                    name: state.newQuiz.name,
                    description: e.target.value,
                    id: 0,
                    questions: state.newQuiz.questions,
                  },
                })
              }
            />
            {!state.isEditingQuiz && (
              <button
                className="px-4 py-2 bg-dodger-blue-500 text-white rounded"
                onClick={addQuizToUnit}
              >
                Add Quiz
              </button>
            )}
            {state.isEditingQuiz && (
              <button
                className="px-4 py-2 bg-green-500 text-white rounded"
                onClick={() => saveQuizChanges(state.newQuiz.id)}
              >
                Save
              </button>
            )}
          </div>
        </div>
      )}

      {/* Add Question */}
      <div className="flex flex-col gap-4 pt-4">
        {!state.isEditingQuestion && (
          <h4 className="font-semibold text-lg">Add Question</h4>
        )}
        {state.isEditingQuestion && (
          <h4 className="font-semibold text-lg">Editing Question</h4>
        )}
        <div className="flex gap-2 mb-2">
          <input
            type="text"
            placeholder="Question content"
            className="p-2 border rounded"
            value={state.newQuestion.content}
            onChange={(e) =>
              dispatch({
                type: "SET_NEW_QUESTION",
                payload: {
                  ...state.newQuestion,
                  content: e.target.value,
                },
              })
            }
          />
          <input
            type="text"
            placeholder="Question explaination"
            className="p-2 border rounded"
            value={state.newQuestion.explaination}
            onChange={(e) =>
              dispatch({
                type: "SET_NEW_QUESTION",
                payload: {
                  ...state.newQuestion,
                  explaination: e.target.value,
                },
              })
            }
          />
          {!state.isEditingQuestion && (
            <button
              className="px-4 py-2 bg-dodger-blue-500 text-white rounded"
              onClick={addQuestion}
            >
              Add Question
            </button>
          )}
          {state.isEditingQuestion && (
            <button
              className="px-4 py-2 bg-green-500 text-white rounded"
              onClick={() => saveQuestionChanges()}
            >
              Save
            </button>
          )}
        </div>
        <h5 className="font-semibold">Choices:</h5>
        {state.newQuestion.choice.map((choice, index) => (
          <label
            htmlFor={`choice-${index}`}
            key={index}
            className="flex items-center gap-2 mb-2 border rounded p-2"
          >
            <input
              type="text"
              placeholder={`Choice ${index + 1}`}
              className="p-2 border rounded flex-grow"
              value={choice}
              onChange={(e) =>
                dispatch({
                  type: "SET_NEW_QUESTION",
                  payload: {
                    ...state.newQuestion,
                    choice: state.newQuestion.choice.map(
                      (current: string, i: number) =>
                        i === index ? e.target.value : current
                    ),
                  },
                })
              }
            />
            <input
              id={`choice-${index}`}
              type="radio"
              name="trueChoice"
              checked={state.newQuestion.trueChoice === choice}
              onChange={() =>
                dispatch({
                  type: "SET_NEW_QUESTION",
                  payload: {
                    ...state.newQuestion,
                    trueChoice: choice,
                  },
                })
              }
            />
            <button
              className="text-red-500"
              onClick={() =>
                dispatch({
                  type: "SET_NEW_QUESTION",
                  payload: {
                    ...state.newQuestion,
                    choice: state.newQuestion.choice.filter(
                      (_: string, i: number) => i !== index
                    ),
                  },
                })
              }
            >
              Remove
            </button>
          </label>
        ))}
        <div className="w-full flex justify-center">
          <p
            className="hover:text-dodger-blue-500 duration-200 select-none cursor-pointer"
            onClick={addChoices}
          >
            + Add more choice
          </p>
        </div>
      </div>

      {/* List Units */}
      <div className="flex flex-col gap-4 border-t pt-4">
        <h4 className="font-semibold text-lg">Questions List</h4>
        {/* Show and manage questions */}
        {state.newQuiz.questions.length > 0 && (
          <ul className="mt-2 list-disc ">
            {state.newQuiz.questions.map((question) => (
              <div
                key={question.id}
                className="border p-4 rounded flex flex-col gap-2 bg-gray-100"
              >
                <div className="flex justify-between items-center">
                  <h5 className="font-semibold">
                    Question: {question.content}
                  </h5>
                  <div className="flex gap-4 items-center">
                    <div>
                      <button
                        className="text-blue-500 mr-2"
                        onClick={() => {
                          dispatch({
                            type: "SET_NEW_QUESTION",
                            payload: question,
                          });
                          dispatch({
                            type: "SET_EDITING_QUESTION",
                            payload: question.id,
                          });
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500"
                        onClick={() =>
                          dispatch({
                            type: "DELETE_QUESTION",
                            payload: question.id,
                          })
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default AddCoursePage;
