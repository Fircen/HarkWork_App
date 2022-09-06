import React, { useState, } from 'react';
import From from './component/Form'
import "./App.css"
import ToDoList from './component/ToDoList';
export default function App() {
  const [inputText, setInputText] = useState('')

  /*
    useEffect(() => {
      async function getData() {
        const response = await fetch(
          '/api/v1/task'
        )
        let data = await response;
  
        console.log(data)
      }
      getData()
    }, [])
  */




  return (
    <div className='App'>
      <header>
        <h1>Task</h1>
      </header>
      <From inputText={inputText} setInputText={setInputText} />
      <ToDoList />
    </div>
  )
}

