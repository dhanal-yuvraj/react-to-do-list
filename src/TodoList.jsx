import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let newTask = () => {
    setTodos((prev) => [
      ...prev,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let upperCaseOne = (id) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        }
        return todo;
      })
    );
  };

  let upperCaseAll = () => {
    setTodos((prev) =>
      prev.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  return (
    <div>
      <input
        placeholder="Enter your task"
        value={newTodo}
        onChange={updateTodoValue}
      />
      <button onClick={newTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
                opacity: todo.isDone ? 0.6 : 1,
              }}
            >
              {todo.task}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            &nbsp;&nbsp;
            <button onClick={() => upperCaseOne(todo.id)}>Mark Done</button>
          </li>
        ))}
      </ul>

      <button onClick={upperCaseAll}>Mark All Done</button>
    </div>
  );
}
