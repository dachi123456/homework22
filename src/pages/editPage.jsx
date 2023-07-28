import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";
import { useDispatch } from "react-redux";
import TodoForm from "../components/todoForm";

const EditPage = () => {
  const { taskId } = useParams();
  const { error, loading, response } = useFetch({ url: `/api/v1/Todolist/${taskId}`, method: "GET" });
  const { sendRequest } = useRequest({ url: `/api/v1/Todolist/${taskId}`, method: "PUT" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFormSubmit = (task, firstName, lastName, deadline) => {
    sendRequest({ task, firstName, lastName, deadline })
      .then(() => {
        dispatch(({
          id: taskId,
          task,
          firstName,
          lastName,
          deadline
        }));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  if (loading && !response) return <p>loading . . .</p>;
  if (error || !response) return <p>Error</p>;
  return (
    <TodoForm
      onFormSubmit={onFormSubmit}
      task={response.task}
      firstName={response.firstName}
      lastName={response.lastName}
      deadline={response.deadline}
    />
  );
};

export default EditPage;