import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios  from 'axios'
import './App.css'

function App() {
 const [selectedId, setSelectedId]=useState(1);

  return (
    <div>
      <button onClick={()=>{
    setSelectedId(1);
 }}>1</button>
      <button onClick={()=>{
    setSelectedId(2);
 }}>2</button>
      <button onClick={()=>{
    setSelectedId(3);
 }}>3</button>
      <button onClick={()=>{
    setSelectedId(4);
 }}>4</button>
      <Todo id={selectedId}/>
    </div>
  )

}


function Todo({id}){
  const [todo, setTodos] = useState({})
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id=" + id)
    .then(function(response){
      setTodos(response.data.todo)
      
    })
  }, [id])
  return<div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </div>

  

}
export default App
