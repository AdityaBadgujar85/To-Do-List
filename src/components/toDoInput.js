import React, { useState } from 'react';
import classes from './ToDoInput.module.css';
import TaskList from './TaskList';

function ToDoInput() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const InputHandle = (e) => {
    setTask(e.target.value);
  };

  const SubmitHandle = (e) => {
    e.preventDefault();
    if (task.trim() === '') {
      alert('Please enter a task before adding!');
    } else {
      setTaskList((prevList) => [
        ...prevList,
        { text: task, completed: false }
      ]);
      alert('Task added successfully!');
      setTask('');
    }
  };

  const toggleCompleted = (index) => {
    setTaskList((prevList) =>
      prevList.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <form onSubmit={SubmitHandle} className={classes.form}>
        <input
          type="text"
          placeholder="Add Task to be Completed"
          className={classes.input}
          value={task}
          onChange={InputHandle}
        />
        <button className={classes.button}>Add Task</button>
      </form>
      <TaskList tasks={taskList} toggleCompleted={toggleCompleted} />
    </>
  );
}

export default ToDoInput;
