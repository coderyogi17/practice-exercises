import { useCallback, useState, memo} from "react";

//create a counter component with increment and decrement
//pass these functions to a child component which has buttons
//to perform increment and decrement

export function Assignment04(){
    const [counter, setCounter] = useState(0);

    const handleIncrement= useCallback(()=>{
        setCounter(function(counter){
            return counter+1;
        })

    },[])

    const handleDecrement=useCallback(()=>{
        setCounter(counter=> counter -1);
    },[])

    return<div>
        <p>Count : {counter}</p>
        <div>
        <CounterButtons onIncrement = {handleIncrement} onDecrement = {handleDecrement}/>
        </div>
    </div>
}

const CounterButtons = memo(({onIncrement, onDecrement})=>{
    return <div>
    <button onClick={onIncrement}>Counter Increment</button>
    <button onClick={onDecrement}>Count Decrement</button>
    </div>

});

