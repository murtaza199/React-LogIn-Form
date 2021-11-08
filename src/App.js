import Employees from "./Employees";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Employees
        name="Murtaza"
        post="Engineer"
        others={{ add: "Delhi", mobile: "0000" }}
      />
      <Employees
        name="Hassan"
        post="Developer"
        others={{ add: "Bangluru", mobile: "1111" }}
      />
      <Employees
        name="Ansari"
        post="Tester"
        others={{ add: "Pune", mobile: "2222" }}
      />
    </div>
  );
}

export default App;
