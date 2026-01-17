import React from "react";
import ListApp from "./components/Todolist";
import './App.css';

function App() {
  return (
    <div className="main">
      <h1>Assignment 2</h1>
      <div className="todo">
        <h2>Todo List</h2>
        <ListApp />
      </div>
    </div>
  );
}

export default App;