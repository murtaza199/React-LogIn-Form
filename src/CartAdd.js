import React from 'react'
import {useState} from "react";

function CartAdd(){
  const[data,setData]=useState(0)
function add(){
  setData(data+1)
}
function remove(){
  setData(data-1)
}

  return(
    <div>
      <h1>My Cart</h1>
      <h2>{data}</h2>
      <button onClick={add}>Add Items</button>
      <button onClick={remove}>Remove Items</button>
    </div>
  )
}

export default CartAdd;
