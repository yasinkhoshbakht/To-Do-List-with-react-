import React from "react";
import "./ToDoItem.css";

function ToDoItem({ task, toggleTaskCompletion, deleteTask }) {
  return (
    <li className={`todoItem ${task.completed ? "completed" : ""}`}>
      <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
