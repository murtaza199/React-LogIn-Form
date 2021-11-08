import "./App.css";
import {useState} from "react"
function App() {
const[data,setData]=useState(null)
const[print,setPrint]=useState(false)
  function typeData(val){
    setData(val.target.value)
    setPrint(false)
  }
  return (
    <div className="App">
      {print?
      <h2>{data}</h2>: null}
      <input type="text" onChange={typeData}></input>
      <button onClick={()=>setPrint(true)}>Print Data</button>
    </div>
  );
}

export default App;
