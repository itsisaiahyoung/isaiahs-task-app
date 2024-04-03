import React, { useState } from 'react';
import './TaskSections.css';
import TaskSection from '../TaskSection/TaskSection';

const TaskSections = () => {
  const [sections, setSections] = useState({});

  const addSection = (sectionName) => {
    setSections(prevSections => ({
      ...prevSections,
      [sectionName]: [],
    }));
  };

  const addTaskToSection = (sectionName, task) => {
    setSections(prevSections => ({
      ...prevSections,
      [sectionName]: [...prevSections[sectionName], task],
    }));
  };

  return (
    <div className="task-sections">
      {Object.entries(sections).map(([sectionName, tasks]) => (
        <TaskSection 
            key={sectionName} 
            section={sectionName} 
            tasks={tasks} 
            addTaskToSection={addTaskToSection}
            />
      ))}
      <button className='add-section-button' onClick={() => addSection(prompt('Enter section name'))}>
        Add Section
      </button>
    </div>
  );
}

export default TaskSections;