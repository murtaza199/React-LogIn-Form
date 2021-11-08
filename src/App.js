import "./App.css";
import {useState} from "react"
function App(){
const[status,setStatus]=useState(false)
  return(
    <div class="App">{status?<h1>Hello World</h1>:null}

<button onClick={()=>setStatus(!status)}>Show/Hide</button>

    </div>
  )
}
  

export default App;
