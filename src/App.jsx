import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [allNames, setAllNames] = useState([]);
  
  const addName = (name) =>{
    console.log(name);
    setAllNames([...allNames, name]);
  }

  const display = allNames.map(name=>
    <li>{name}</li>
  );

  return (
    <>
      <label htmlFor="">Enter your name: </label> 
      <input type="text" value={name}
        onChange={e=>{
          setName(e.target.value);
        }}
      /> <br /><br />
      <button onClick={()=>{
        addName(name);
        setName('');
        }
      }>Add</button>


      <ul> {display} </ul>      

      <h3>Name Count : {allNames.length}</h3>
    </>
  )
}

export default App
