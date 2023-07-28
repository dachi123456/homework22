import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todo.slice";

const TodoForm = ({ onFormSubmit, task, firstName, lastName, deadline }) => {
  const taskRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const deadlineRef = useRef();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(
      taskRef.current.value,
      firstNameRef.current.value,
      lastNameRef.current.value,
      deadlineRef.current.value
    );
  };

  const handleFormSubmit = () => {
    const newTodo = {
      task: taskRef.current.value,
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      deadline: deadlineRef.current.value,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="task..."
        ref={taskRef}
        defaultValue={task}
      />
      <input
        type="text"
        placeholder="firstName"
        ref={firstNameRef}
        defaultValue={firstName}
      />
      <input
        type="text"
        placeholder="lastName"
        ref={lastNameRef}
        defaultValue={lastName}
      />
      <input
        type="text"
        placeholder="deadline"
        ref={deadlineRef}
        defaultValue={deadline}
      />
      <button type="submit" onClick={handleFormSubmit}>
        submit
      </button>
    </form>
  );
};

export default TodoForm;