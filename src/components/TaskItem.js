import React from 'react';
import classes from './TaskItem.module.css';

function TaskItem({ task, toggleCompleted }) {
  return (
  <div className={classes.mainContainer}>
    <li className={classes.taskItem}>
      <label className={classes.label}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleCompleted}
          className={classes.checkbox}
        />
        <span className={task.completed ? classes.completed : ''}>
          {task.text}
        </span>
      </label>
    </li>
    </div>
  );
}

export default TaskItem;
