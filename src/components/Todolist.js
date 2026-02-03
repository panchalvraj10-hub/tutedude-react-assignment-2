import React, { useState } from "react";
import '../App.css';

function ListApp() {
  const [input, setInput] = useState(""); //to store text which is typed by user in input field
  const [list, setList] = useState([]); // to store all tasks to todo list
  const [done, setDone] = useState([]); // to store completed status for each task 

  const addList = () => {
    if (input === "") {
      alert("Please Enter Task"); // to show alert if input is empty and user click on add button
      return;
    }

    setList([...list, input]); // add new task to list 
    setDone([...done, false]); // for new task its value should be incompleted
    setInput(""); // clear input field
  };

  return (
    <div>
      <div className="textbox">
        <input
        value={input} // get input from user
        onChange={(e) => setInput(e.target.value)} // to update input status when user write something
        placeholder="Enter Task" 
      />

      <button onClick={addList}>Add</button> {/* to add the task to list entered by user*/}
      </div>

      <ul className="display">
        {list.map((item, index) => ( //check all tasks one by one
          <li key={index}> {/* one task from list */} 
            <input
              type="checkbox" // to complete task
              checked={done[index]} // if its true then checkbox will be checked
              onChange={() => setDone(
                  done.map((task, i) => // this will go through done array 
                    i === index ? !task : task // if index matches then it will change true to false or false to true
                  )
                )}
            />
            <span className="task-text">{item}</span> {/* to display task list */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListApp;