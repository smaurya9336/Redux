import { useSelector, useDispatch } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";


export default function Todo(){
  const todos =  useSelector((state) => state.todos);
  console.log(todos);
  const dispatch= useDispatch();
  const clickHandler = (id) =>{
     dispatch(deleteTodo(id));
  }

  const markAsDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

    return(
        <>
        <AddForm />
        <h2>Todo List App</h2>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                  <span style={todo.isDone ? { textDecoration: "line-through", backgroundColor: "green" } : {}}>
              {todo.task}
            </span>
                <button onClick={() => clickHandler(todo.id)}>Delete</button>
                <button onClick={() => markAsDoneHandler(todo.id)}>Mark as Done</button>
                </li>

            ))}
        </ul>
        </>
    )
}