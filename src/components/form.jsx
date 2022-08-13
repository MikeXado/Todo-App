import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/Todos/todo-actions";

function Form(props) {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  return (
    <form
      className="form-input"
      onSubmit={(e) => {
        e.preventDefault();
        if (input !== "") {
          dispatch(addTodo(input));
        }
        setInput("");
      }}
    >
      <input
        autoFocus
        type="text"
        className="input"
        value={input}
        placeholder="enter task here..."
        onChange={(e) => {
          setInput(e.target.value);
          e.target.value = input;
        }}
      />
    </form>
  );
}

export { Form };
