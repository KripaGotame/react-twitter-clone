import React from 'react';

const ToDoItem = ({ task, onDelete, onUpdate }) => {
  return (
    <div className="todo-item">
      <p>{task}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onUpdate}>Update</button>
    </div>
  );
};

export default ToDoItem;
