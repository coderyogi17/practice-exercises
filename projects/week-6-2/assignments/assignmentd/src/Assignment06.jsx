import { useRef, useState } from 'react';

export function Assignment06(){
    const [count, setCount]= useState(0);
    const numberOfRenders= useRef(0);

    const handleClick=()=>{
        numberOfRenders.current=numberOfRenders.current+1

        setCount(count+1);
    }


    return(
        <div>
            <p>This will return {numberOfRenders.current}</p>
            <p>This will count {count}</p>

            <button onClick={handleClick}>Click me</button>
        </div>
    )
}