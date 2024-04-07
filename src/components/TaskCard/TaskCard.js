import React from 'react';
import './TaskCard.css';

const TaskCard = ({ task, removeTask }) => {

  const handleRemoveTask = () => {
    removeTask(task.id);
  }

  return (
    <div className="task-card">
      <button className="remove-task-button" onClick={handleRemoveTask}>X</button>
      <div className="task-card-header">
        <h3>{task.title}</h3>
      </div>
      <p>{task.description}</p>
    </div>
  );
}

export default TaskCard;