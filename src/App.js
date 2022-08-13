import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import { Todos } from "./components/todos";
import { Form } from "./components/form";
import moment from "moment";
import { removeCompleted } from "./redux/Todos/todo-actions";
import store from "./redux/store";

store.subscribe(() => {
  localStorage.setItem("todoState", JSON.stringify(store.getState()));
});

function App() {
  const todoData = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  const today = moment().format("dddd , Do");
  const month = moment().format("MMMM");
  const [status, setStatus] = useState("all");
  const [filtred, setFiltred] = useState([]);

  const itemsLeft = todoData.filter((item) => {
    return item.isDone === false;
  });
  useEffect(() => {
    const active = todoData.filter((item) => {
      return item.isDone === false;
    });
    const completed = todoData.filter((item) => {
      return item.isDone === true;
    });
    if (status === "active") {
      setFiltred(active);
    } else if (status === "completed") {
      setFiltred(completed);
    } else {
      setFiltred(todoData);
    }
  }, [todoData, status]);

  return (
    <div className="App">
      <div className="todo__container">
        <div className="todo-content">
          <div className="todo-content__date date-content">
            <div className="date-content__date">
              <div className="date-content__today-date">{today}</div>
              <div className="date-content__month">{month}</div>
            </div>
          </div>
          <Form />
          <div className="todo-content__list list-content">
            {filtred.map((noteItem, index) => {
              return <Todos key={index} id={index} noteItem={noteItem} />;
            })}
            <div className="todo-content__buttons">
              <div className="todo-content__task-count">
                {itemsLeft.length} items left
              </div>
              <div className="todo-content__task-control">
                <button
                  className="all btn"
                  value="all"
                  onClick={(e) => {
                    setStatus(e.target.value);
                  }}
                  style={{
                    color: status === "all" ? "hsl(220, 98%, 61%)" : "",
                  }}
                >
                  All
                </button>
                <button
                  className="active btn"
                  value="active"
                  onClick={(e) => {
                    setStatus(e.target.value);
                  }}
                  style={{
                    color: status === "active" ? "hsl(220, 98%, 61%)" : "",
                  }}
                >
                  Active
                </button>
                <button
                  className="completed btn"
                  value="completed"
                  onClick={(e) => {
                    setStatus(e.target.value);
                  }}
                  style={{
                    color: status === "completed" ? "hsl(220, 98%, 61%)" : "",
                  }}
                >
                  Completed
                </button>
              </div>
              <button
                onClick={() => {
                  dispatch(removeCompleted());
                }}
                className="todo-content__clear-completed"
              >
                Clear Completed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
