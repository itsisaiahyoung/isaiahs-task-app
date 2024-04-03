import React from 'react';
import './TaskSection.css';
import TaskCard from '../TaskCard/TaskCard';

const TaskSection = ({ section, tasks, moveTask, addTaskToSection }) => {
  const addTask = () => {
    const title = prompt('Enter task title');
    const description = prompt('Enter task description');
    addTaskToSection(section, { title, description });
  };

  return (
    <div className="task-section">
      <h2>{section}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} moveTask={moveTask} />
      ))}
      <button className='add-task-button' onClick={addTask}>Add Task</button>
    </div>
  );
}

export default TaskSection;