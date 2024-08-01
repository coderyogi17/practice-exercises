/* eslint-disable react/jsx-key */
import { useState } from 'react'

import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    id:1,
    title: "gym",
    description: "go to gym everyday"
  },{
    id:2,
    title: "gym",
    description: "go to gym everyday"
  },{
    id:3,
    title: "gym",
    description: "go to gym everyday"
  }])

  function addNewTodo(){
    setTodos([...todos,{
      id:4,
      title: "another topic",
      description: Math.random()
    }])
  }
  return (
    <>
    <button onClick={addNewTodo}>Click</button>
      {todos.map(todo=> <Todo title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}){
  return<div>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </div>
}

export default App
