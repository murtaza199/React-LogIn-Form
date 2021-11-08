import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [game, setGame] = useState("");
  const [tnc, setTnc] = useState(false);
  function getData(e) {
    console.log(name,game,tnc)
    e.preventDefault();
  }
  return (
    <div class="App">
      <form onSubmit={getData}>
        <h2>Sports Club Form</h2>
        <input type="text" placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>
        <br />
        <br />
        <select onChange={(e)=>setGame(e.target.value)}>
          <option>Games</option>
          <option>Cricket</option>
          <option>Football</option>
          <option>Tennis</option>
        </select>
        <br />
        <br />
        <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/>
        <span>Agree Terms and Condition</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
