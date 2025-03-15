// This is the simple counter component which test usage for the useState and useEffect things
import { useState } from "react";
import styles from './Counter.module.css'

const Counter =()=>{
    const [count,setCount]=useState(0);

    // handler functions

    const onDecrementHandler=(event)=>{
        if (count<=0) return
        setCount((prev)=>prev-1)
    }

    const onIncrementHandler=(event)=>{
        setCount((prev)=>prev+1)
    }

    const onResetHandler=(event)=>{
        setCount(0)
    }

    return (
        <div className={styles.counter_container}>
            <h1>Counter Machine Codings</h1>
            <h1>{count}</h1>
            <div className={styles.button_container}>
                <button onClick={onDecrementHandler}>Decrement</button>
                <button onClick={onIncrementHandler}>Increment</button>
                <button onClick={onResetHandler}>Reset</button>
            </div>
        </div>
    )
};


export default Counter