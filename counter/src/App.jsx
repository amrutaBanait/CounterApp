import React from "react";
import { useState } from "react";
import "./App.css";


const App = () => {
  const state = useState();


let [count, setCount] = useState(0)
const IncNum = () =>{
 setCount(count+1)

}
const DncNum = ()=>{
  setCount(count-1)
}

  return (
    <>
    <h1 className="heading">Hello I am Counter</h1>

    <div className="container">
    <button className="btn" onClick = {DncNum}>-</button>
    <h1 className="heading1"> {count} </h1>
 <button   className="btn1" onClick = {IncNum}>+</button>
    </div>
 <h2 className="count">The counter value: {count}</h2>
    </>
  );
}

export default App
