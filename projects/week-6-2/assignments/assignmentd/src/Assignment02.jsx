import { useState, memo, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  const lines=1000
  const words=["it", "form", "record","some","random", "sentences","on", "page"]
  const page=[];
  for (let i =0; i<lines; i++){
    let sentence="";
    for (let j =0; j< words.length; j++){
      sentence+=words[Math.floor(words.length * Math.random())];
      sentence+=" "
    
    }

    page.push(sentence);
  }

 

 export function Assignment02(){
    const [sentences, setSentences] = useState(page);
    const [filter, setFilter] = useState("");

    const filteredSentences = useMemo(()=>{
        sentences.filter(x => x.includes(filter));
    },[sentences, filter])
  
  return (
    <div>
      <input label="Input" type="text" id='text' onChange={(e)=>setFilter(e.target.value)}>
      </input>
      <div>
        {filteredSentences.map(word => <div>{word}</div>)}
       </div>
    </div>
  )
}



