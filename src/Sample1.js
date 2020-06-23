import React,{useState} from 'react';

let Sample1=()=>{
    const [count,changeCount]=useState(0);
    let increment=()=>{
        setCount(count+1)
    }
    return (
        <div style={{border:"1px solid #ddd", padding:"1%",textAlign:"center"}}>
        <h2> {count} </h2>
        <button onClick={increment}> Increment </button>
        </div>
    )
}

export default Sample1;
