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
    <h1 className="heading"> {count} </h1>
    <button   className="btn" onClick = {IncNum}>INC</button>
 <button   className="btn1" onClick = {DncNum}>DNC</button>
    </>
  );
}

export default App
