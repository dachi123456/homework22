import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../store/todo/todo.slice";
const MainPage = () => {
  
  // const {color,toggleBg} = useColorThemeContext()

  const taskList1 = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTodo(taskId));
  };

  return (
    <div>
      {taskList1.map((task) => (
        <div key={task.id} style={{ border: "1px solid grey" }}>
          <p>task: {task.task}</p>
          <p>name: {task.firstName}</p>
          <p>lastName: {task.lastName}</p>
          <p>deadline: {task.deadline}</p>
          <button onClick={() => handleDelete(task.id)}>complete</button>
          <Link to={`/edit/${task.id}`}>edit</Link>
        </div>
      ))}
      {/* <p>{theme}</p> */}
    </div>
  );
};

export default MainPage;