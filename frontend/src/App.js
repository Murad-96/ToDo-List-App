import logo from './logo.svg';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState([])

  async function getList () { // async function returns a promise
    try {
      const url = "http://localhost:3001/api/todos";
      const response = await fetch(url);  // await pauses the execution of code until the promise resolves
      if (!response.ok){
        console.log("Failed to fetch the todo list")
      }
      const data = await response.json()
      console.log(`data: ${data}`)
      setToDo(data)
    }
    catch (e) {
      console.log(e)
    }
  }

  async function addTask (taskText) {
    try {
      console.log(`calling API with text ${taskText}`)
      const url = "http://localhost:3001/api/todos";
      const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: taskText })
      }
      )
      if (!response.ok) {
        console.log('Failed to add a task.')
      }
    }
    catch (e) {
      console.log(e)
    }
  }

  async function removeTask (id){
    try {
      console.log(`removing a task with id ${id}`)
      const url = `http://localhost:3001/api/todos/${new URLSearchParams(id)}`;
      console.log(`url: ${url}`)
      const response = await fetch ( url, {
        method: "DELETE"
        
      }
      )
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect( () => {
    getList()
  }, []) // empty dependency, without the useEffect will be fired all the time

  return (
    <div className="App">
      <header className="App-header">
        <h2>My to-do list</h2>
      </header>
      <div>
       <TodoList toDos={toDo} removeFn={removeTask}/>
       <AddTodoForm fn={addTask}/>
      </div>
    </div>
  );
}

export default App;
