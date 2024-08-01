import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
  
    <HeaderWithButton/>
    <Header title="MyName"></Header>
    </div>
  )
}

function HeaderWithButton(){

  const [title, setTitle]= useState("MyName");
function handleClick(){
  setTitle(Math.random());
}
  return (
    <div>
      <button type="button" onClick={() => handleClick()}>Click me</button>
    <Header title={title}></Header>
    </div>)

}
function Header({title}){

  return<div>
  {title}
  </div>
}

export default App
