import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todo.slice";
import TodoForm from "../components/todoForm";
import useRequest from "../hooks/useRequest";

const CreatePage = () => {
  const { loading, sendRequest } = useRequest({ url: "/api/v1/Todolist", method: "POST" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (task, firstName, lastName, deadLine) => {
    sendRequest([{ task, firstName, lastName, deadLine }]).then(() => {
      dispatch(addTodo({
        task,
        firstName,
        lastName,
        deadline: deadLine
      }));
      navigate("/");
    });
  };

  if (loading) return <p>loading . . .</p>;
  return (
    <div>
      <TodoForm onFormSubmit={onFormSubmit} />
    </div>
  );
};

export default CreatePage;