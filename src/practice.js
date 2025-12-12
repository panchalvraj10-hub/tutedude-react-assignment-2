import React, { useState } from "react";
import "./App.css";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTask = () => {
        if(task.trim() === ''){
            alert("Please Enter Your Task!!");
            return;
        }

        const newTodo = {
        id:Date.now(),
        Text: task,
        completed:false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    alert("Task Added Successfully!!")
    };

}
export default practice