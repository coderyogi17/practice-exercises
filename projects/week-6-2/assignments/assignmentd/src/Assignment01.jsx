import { useState, memo, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState(0)
//so the main advantage is if you would created and used 
//it as component, that would re render evertime parent renders
//by useMemo it will only run when input changes since it not a component anymore and more of a retricted function
const CalculateFactororial =  useMemo(()=>{
  let value=1;
  for (let i=1; i<=input; i++) {
    value= value * i;
  }
  return value;
  
},[input])

  return (
    <>
      <input label="Input" type="text" id='number' onChange={(e)=>setInput(e.target.value)}>
      </input>
      <div>
        {CalculateFactororial}
       </div>
    </>
  )
}

export default App
