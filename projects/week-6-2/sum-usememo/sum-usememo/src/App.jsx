import { useEffect, useMemo, useState } from 'react'

import './App.css'

function App() {
  const [counter, setCounter] = useState(0);
  let [num, setNumber] = useState(0);
  //const [count, setCount]= useState(0)


  let sum= useMemo(()=>{
    let finalcount =0;
    for(let i=1; i<=num; i++){
      finalcount= finalcount+i;
    }
    //return finalcount;
    return finalcount;
    
  },[num]);
    
  // useEffect(()=>{
  //   let finalcount =0;
  //   for(let i=1; i<=num; i++){
  //     finalcount= finalcount+i;
  //   }
  //   setCount(finalcount);
  // },[num]);
    
    

  return (
    <>
     <label>
        Text input: <input name="myInput" style={{
          padding: 10,
          margin: 10
        }} type="text" placeholder="Enter a number" onChange={(e)=>{
          setNumber(e.target.value)
         
        }}/>
      </label>
      <br></br>
      <div>
        Sum is 1 to {num} is {sum}
      </div>
      <br></br>
      <button onClick={()=>setCounter(counter + 1)}>Counter ({counter})</button>
    </>
  )
}

export default App
