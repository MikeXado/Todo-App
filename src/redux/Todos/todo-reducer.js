import * as actionTypes from "./todo-types";

const INITIAL_STATE = {
  todos: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload, isDone: false, checkboxState: false },
        ],
      };
    case actionTypes.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
      };
    case actionTypes.MARD_DOWN:
      const newTodos = [...state.todos];
      if (newTodos[action.payload.id].isDone === false) {
        newTodos[action.payload.id].isDone = true;
        newTodos[action.payload.id].checkboxState = true;
      } else {
        newTodos[action.payload.id].isDone = false;
        newTodos[action.payload.id].checkboxState = false;
      }
      return {
        ...state,
        todos: newTodos,
      };
    case actionTypes.REMOVE_COMPLETED:
      let done = state.todos.filter((todo) => todo.isDone === false);
      return {
        ...state,
        todos: done,
      };

    default:
      return state;
  }
};

export default todoReducer;
