import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'

const Dashboard = lazy(()=> import('./components/Dashboard'))
const Landing = lazy(()=> import ('./components/Landing'))


function App() {
  return (
    <div>
    
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={<Loader />}><Dashboard /></Suspense>}></Route>
          <Route path="/" element={<Suspense fallback={<Loader />}><Landing /></Suspense>}></Route>
        </Routes>
        </BrowserRouter>

    </div>
  )
}

function Loader(){
  return(
    <>
    Loading...
    </>
  )
}

function Appbar(){
  const navigate= useNavigate();
return(
      <div>
        <button onClick={()=>{
          navigate("/")
        }}>Location</button>
         <button onClick={()=>{
          navigate("/dashboard")
        }}>Dashboard</button>
      </div>
)
}
export default App
