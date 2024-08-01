

import {  useEffect, useState } from 'react';
import './App.css'
import { Todos } from './components/Todo';
import { CreateTodo } from './components/CreateTodo';

function App() {
  const [todos, setTodos] = useState([]);
  const POLLING_INTERVAL = 5000;
     useEffect(()=> {
      setInterval(()=>{
        fetch("https://sum-server.100xdevs.com/todos")
          .then(async (res)=>{
            const json = await res.json();
            setTodos(json.todos);
          })
        }, POLLING_INTERVAL)
     },[]) 

  
   return   <div>
        <CreateTodo></CreateTodo>
        <Todos todos= {todos}> </Todos >
      </div>
  
  
}

export default App
