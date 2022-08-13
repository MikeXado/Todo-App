import "../App.scss";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, markDown } from "../redux/Todos/todo-actions";

function Todos({ noteItem, id }) {
  const dispatch = useDispatch();

  return (
    <div className="list-content__items">
      <div className="todo">
        <div className="list-content__checkbox">
          <label className="checkbox path">
            <input
              type="checkbox"
              className="checkbox"
              checked={noteItem.checkboxState}
              onChange={(e) => {
                e.target.checked = noteItem.checkboxState;
              }}
              onClick={() => {
                dispatch(markDown(id));
              }}
            />
            <svg viewBox="0 0 21 21">
              <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
            </svg>
          </label>
        </div>
        <div
          className="list-content__todo"
          style={{
            textDecoration: noteItem.isDone ? "line-through" : "none",
            opacity: noteItem.isDone ? "0.5" : "",
          }}
        >
          {noteItem.text}
        </div>
      </div>
      <button
        onClick={() => dispatch(removeTodo(id))}
        className="list-content__todo-remove"
      >
        <span></span>
      </button>
    </div>
  );
}

export { Todos };
