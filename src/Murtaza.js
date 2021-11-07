import React from 'react'
import {useState} from "react";

function Murtaza(
    
) {
    const [data, setData] = useState("Arshad");
  function updateData() {
    setData("Murtaza");
  }
    return (
        <div>
           <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button> 
        </div>
    )
}

export default Murtaza
