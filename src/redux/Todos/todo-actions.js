import * as actionTypes from "./todo-types";

export const addTodo = (todo) => {
  return {
    type: actionTypes.ADD_TODO,
    payload: todo,
  };
};
export const removeTodo = (itemID) => {
  return {
    type: actionTypes.REMOVE_TODO,
    payload: {
      id: itemID,
    },
  };
};

export const markDown = (itemID) => {
  return {
    type: actionTypes.MARD_DOWN,
    payload: {
      id: itemID,
    },
  };
};

export const removeCompleted = () => {
  return {
    type: actionTypes.REMOVE_COMPLETED,
  };
};
