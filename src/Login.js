import { useState } from "react";
function Login() {

  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const[user,setUser]=useState("")
  const[pass,setPass]=useState("")
  function loginHandle(e) {
    e.preventDefault();
    if (user.length < 4 || pass.length < 4) {
        alert("inset correct value" );
      } else {
        alert("LoggedIn: Welcome "+ user);
      }
  }
  function userHandle(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item)
  }
  function passHandle(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPass(item)
  }
  return (
    <div>
      <h2>LogIn Page</h2>
      <form onSubmit={loginHandle}>
        <input type="text" placeholder="Enter User Id" onChange={userHandle} />
        {userErr?<span>Enter valid User Id</span>:null}
        <br />
        <br />
        <input type="password" placeholder="Enter Password" onChange={passHandle}/>
        {passErr?<span>Enter valid User Id</span>:null}
        <br />
        <br />
        <button type="submit">LogIn</button>
      </form>
    </div>
  );
}
export default Login;
