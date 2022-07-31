function Form(props) {
  return (
    <form className="form-input" onSubmit={props.submitForm}>
      <input
        autoFocus
        type="text"
        className="todo-content__input"
        placeholder="Type a task"
      />
    </form>
  );
}

export { Form };
