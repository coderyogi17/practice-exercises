import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

function App() {

  return (
    <>
      <div>
        <RecoilRoot>
         <Count  />
        </RecoilRoot>
      </div>
    </>
  )
}

function Count(){

  return<div>
 
  There are two components: 

  <div>
  <Buttons />
  <CountRendered  />
  </div>
  
  </div>
}
function CountRendered(){
  const count= useRecoilValue(countAtom)
  return<div>
    {count}
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer(){
  const isEven= useRecoilValue(evenSelector)
  return<div>
    {isEven ? "It is even" : ""}
  </div>
}
function Buttons(){
  const [count, setCount] = useRecoilState(countAtom)
  return<div>
  <button onClick={()=>setCount(count+1)}>Increase</button>
  <button onClick={()=>setCount(count-1)}>Decrease</button>
  </div>
}

export default App
