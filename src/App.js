import "./App.css";
import {useState} from "react"
function App() {
const[data,setData]=useState(null)
  function typeData(val){
    setData(val.target.value)
  }
  return (
    <div className="App">
      <h2>{data}</h2>
      <input type="text" onChange={typeData}></input>
    </div>
  );
}

export default App;
