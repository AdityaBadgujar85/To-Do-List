import React from 'react';
import ToDoInput from './components/toDoInput';
import './App.css';
function App() {
  return (
    <div className='App'>
      <h1 style={{ textAlign: 'center' }}>My ToDo List</h1>
      <ToDoInput />
    </div>
  );
}

export default App;
