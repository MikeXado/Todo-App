import React, { useState, useEffect } from "react";
import "./App.scss";
import { Todos } from "./components/todos";
import { Form } from "./components/form";
import { Popup } from "./components/popup";
import moment from "moment";

function App() {
  const [state, setState] = useState(() => {
    const saved = localStorage.getItem("todos");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || [
        {
          text: "Drink Water",
          isDone: false,
          checkState: false,
        },
      ]
    );
  });

  const [buttonPopup, setButtonPopup] = useState(false);
  const today = moment().format("dddd , Do");
  const month = moment().format("MMMM");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const addTodo = (text, isDone, checkState) => {
    const todo = [...state, { text, isDone, checkState }];
    setState(todo);
  };

  const markTodo = (index) => {
    const newTodos = [...state];
    if (newTodos[index].isDone === false) {
      newTodos[index].isDone = true;
      newTodos[index].checkState = true;
    } else {
      newTodos[index].isDone = false;
      newTodos[index].checkState = false;
    }
    setState(newTodos);
  };

  const removeTodo = (id) => {
    setState((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const input = document.querySelector(".todo-content__input");
    const text = input.value;
    let isDone = false;
    let checkState = false;
    console.log(e);
    if (text !== "") {
      addTodo(text, isDone, checkState);
      setButtonPopup(false);
    }
    input.value = "";
  };

  const done = state.filter((obj) => {
    return obj.isDone === false;
  });

  const removeIsDone = (e) => {
    e.preventDefault();
    setState(done);
  };

  return (
    <div className="App">
      <div className="todo__container">
        <div className="todo-content">
          <div className="todo-content__date date-content">
            <div className="date-content__date">
              <div className="date-content__today-date">{today}</div>
              <div className="date-content__month">{month}</div>
            </div>
            <div className="date-content__task-count">
              <span className="tasks-count">{done.length}</span> Tasks
            </div>
          </div>
          <div className="todo-content__horizontal-line"></div>
          <div className="todo-content__clear-completed" onClick={removeIsDone}>
            completed clear
          </div>
          <div className="todo-content__list list-content">
            {state.map((noteItem, index) => {
              return (
                <Todos
                  key={index}
                  id={index}
                  isDone={noteItem.isDone}
                  checkState={noteItem.checkState}
                  todo={noteItem.text}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                />
              );
            })}
          </div>
          <Popup trigger={buttonPopup} setState={setButtonPopup}>
            <Form submitForm={submitForm} deleteDone={removeIsDone} />
          </Popup>
          <div
            className="todo-content__button"
            onClick={() => {
              setButtonPopup(true);
            }}
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
