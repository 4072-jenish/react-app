import React, { useState } from "react";
import "./counter.css";

function Counter(){
     let [count, setCount] = useState(0);

    

    
    function onIncrement(){
       setCount (count + 1)
       console.log("Count incerement");
       
    }
    function onDecrement(){
        setCount(count - 1);
        console.log("Count decrement");
        
    }
    function onReset(){
        setCount(0);
        console.log("Count reset");
    }
    return (
        <div>
            <h1> -: Counter :-</h1>
           <div className="counter">
            <button onClick={onIncrement}>Increment</button>
            <h2>{count}</h2>
           <button onClick={onDecrement}>Decrement</button>
           </div>
            <button onClick={onReset}>Reset</button>
        </div>
    )

    }


  
    // return (
    //     <div>
    //         <h1>Counter</h1>
    //         <p>Count: {props.count}</p>
    //         <button onClick={props.onIncrement}>+</button>
    //         <button onClick={props.onDecrement}>-</button>
    //     </div>
    // );



export default Counter;