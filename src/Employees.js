function Employees(props){
  return(
    <div>
      <h2 style={{background:"skyblue"}}>{props.name}</h2>
      <h3>{props.post}</h3>
      <h3>{props.others.add}</h3>
      <h3>{props.others.mobile}</h3>
    </div>
  )
}

export default Employees;
