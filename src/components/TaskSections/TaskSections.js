import React, { useState } from 'react';
import './TaskSections.css';
import TaskSection from '../TaskSection/TaskSection';
import { v4 as uuidv4 } from 'uuid';


const TaskSections = () => {
  const [sections, setSections] = useState({});

  const addSection = (sectionName) => {
    setSections(prevSections => ({
      ...prevSections,
      [sectionName]: [],
    }));
  };

  const addTaskToSection = (sectionName, task) => {
    const taskWithId = { ...task, id: uuidv4() };
    setSections(prevSections => ({
      ...prevSections,
      [sectionName]: [...prevSections[sectionName], taskWithId],
    }));
  };

  const removeTaskFromSection = (sectionName, taskId) => {
    setSections(prevSections => ({
      ...prevSections,
      [sectionName]: prevSections[sectionName].filter(task => task.id !== taskId),
    }));
  }

  return (
    <div className="task-sections">
      {Object.entries(sections).map(([sectionName, tasks]) => (
        <TaskSection 
            key={sectionName} 
            section={sectionName} 
            tasks={tasks} 
            addTaskToSection={addTaskToSection}
            removeTaskFromSection={removeTaskFromSection}
            />
      ))}
      <button className='add-section-button' onClick={() => addSection(prompt('Enter section name'))}>
        Add Section
      </button>
    </div>
  );
}

export default TaskSections;