import { useEffect, useRef } from "react";

//first example uses useRef as a DOM substitue
export function Assignment05(){
    const inputRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()

    },[inputRef]);
    const handleClick=()=>{
        inputRef.current.focus()
    }

    return(
        <div>
        <input ref= {inputRef} type="text"></input>
        <button OnClick={handleClick}>Clike me</button>
        </div>
    )

}