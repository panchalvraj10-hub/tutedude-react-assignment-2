import React, { useState } from "react";
import "./App.css";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") {
      alert("❗ Please enter a task");
      return;
    }

    alert("✔ Task added successfully!");

    const newTodo = { 
      id: Date.now(), 
      text: task, 
      completed: false 
    };

    setTodos(prev => [...prev, newTodo]);
    setTask("");
  };

  const toggleComplete = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="container">
      <h2>Assignment 2 To Do App</h2>

      <div className="input-section">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            <label>{todo.text}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Todo;