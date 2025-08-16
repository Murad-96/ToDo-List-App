import logo from './logo.svg';
import './App.css';
import './components/TodoList';
import TodoList from './components/TodoList';
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
      console.log(data)
      setToDo(data)
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
       
      </div>
    </div>
  );
}

export default App;
