import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () =>{
    if(newTask.trim() !== ''){
      setTasks([...tasks,newTask]);
      setNewTask('');
    }
  };

  const handleInputChange = (event) =>{
    setNewTask(event.target.value);
  };

  const deleteTask = (taskDelete) => {
    const updatedTask = tasks.filter((task) => task !== taskDelete);
    setTasks(updatedTask);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="enter a task"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task,index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
