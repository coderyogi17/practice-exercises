import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return <div>
  <CardWrapper>
    hi there
    <CardWrapper>
      a second card inside primary card
    </CardWrapper>
    hi there
   </CardWrapper>
   <CardWrapper>
    hi there
   </CardWrapper>

  </div>
}

function CardWrapper({children}){
  return <div style={{ border: '2px solid black' , padding: '10px'}}>
  {children}
  </div>

}

// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }

// function TextComponent2(){
//   return <div>
//     this one will display somthing else
//   </div>
// }

export default App
