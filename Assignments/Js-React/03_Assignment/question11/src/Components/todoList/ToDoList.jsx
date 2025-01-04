// import React, { useState } from "react";

// function ToDoList() {
//   const [newTask, setNewTask] = useState("");
//   const [tasks, setTasks] = useState([]);
  
//   const handleInputChange = (event) =>{
//     setNewTask(event.target.value);
//   };

//   const handleAddTask = () =>{
//     if(newTask.trim() !== ''){
//       setTasks([...tasks,newTask]);
//       setNewTask('');
//     }
//   };

//   const deleteTask = (taskDelete) => {
//     const updatedTask = tasks.filter((task) => task !== taskDelete);
//     setTasks(updatedTask);
//   };

//   return (
//     <div className="container">
//       <input
//         type="text"
//         placeholder="enter a task"
//         value={newTask}
//         onChange={handleInputChange}
//       />

//       <button onClick={handleAddTask}>Add Task</button>

//       <ul>
//         {tasks.map((task,index) => (
//           <li key={index}>
//             {task}
//             <button onClick={() => deleteTask(task)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDoList;

import React, { useState } from 'react'

function ToDoList() {

  const [newTask, setNewTask] = useState('');
  const [tasks,setTasks] = useState([]);

  const inputHandler = (event) =>{
    setNewTask(event.target.value)
  }

  const AddTaskHandler = () =>{
    if(newTask.trim() !== ''){
      setTasks([...tasks,newTask])
      setNewTask('')
    }
  }

  const deleteTask = (task) =>{
    const updatedTasks = tasks.filter((Element) => Element !== task);
    setTasks(updatedTasks);
  }

  return (
    <div>
      <input 
        type="text"
        placeholder='Enter task'
        value={newTask}
        onChange={inputHandler} 
      />

      <button onClick={AddTaskHandler}>Add Task</button>

      <ul>
        {tasks.map((task,index) =>(
          <li key={index}>
            {task}
            <button onClick={() =>deleteTask(task)}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  )
}

export default ToDoList