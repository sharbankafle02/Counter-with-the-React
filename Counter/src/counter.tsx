import './App.css';
import {useState,useEffect} from 'react';
function Counter(){
    const [count,setCount]=useState<number>(0);
    useEffect(()=>{
        console.log("The count value id Changed: ",count);
    },[count])
    const increase=()=>{
        setCount(count+1);
    }
    const decrease=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }

    return <div className="main-container">
        <p className="count">{count}</p>
        <div className="button-container">
            <button className="increase-button" onClick={increase}>Increase</button>
            <button className="reset-button" onClick={reset}>Reset</button>
            <button className="decrease-button" onClick={decrease}>Decrease</button>
        </div>
    </div>
}
export  default Counter;