import React, { useState } from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const taskName = prompt('Enter task name');
    setTasks([...tasks, taskName]);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const updateTask = (index) => {
    const taskName = prompt('Enter updated task name');
    const newTasks = [...tasks];
    newTasks[index] = taskName;
    setTasks(newTasks);
  };

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task, index) => (
        <ToDoItem
          key={index}
          task={task}
          onDelete={() => deleteTask(index)}
          onUpdate={() => updateTask(index)}
        />
      ))}
    </div>
  );
};

export default ToDoList;
