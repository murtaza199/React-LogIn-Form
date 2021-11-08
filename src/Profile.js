import {useState} from "react"
function Profile(){
const[loggedin,setLoggedin]=useState(0)

    return(
<div>
 {loggedin===1?
            <h1>Welcome Murtaza</h1>
            :loggedin===2?<h1>Welcome Hassan</h1>
            :loggedin===3?<h1>Welcome Ansari</h1>
            :<h1>Welcome User3</h1>}
<button onClick={()=>setLoggedin(loggedin+1)}>Next users</button>
<button onClick={()=>setLoggedin(loggedin-1)}>Prev users</button>
<button onClick={()=>setLoggedin(0)}>Reset users</button>

</div>

    )
}
export default Profile;