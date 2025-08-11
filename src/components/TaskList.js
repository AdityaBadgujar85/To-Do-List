import React from 'react';
import TaskItem from './TaskItem';
import classes from './TaskList.module.css';

function TaskList({ tasks, toggleCompleted }) {
  return (
    <ul className={classes.taskList}>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleCompleted={() => toggleCompleted(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
