// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  const names = ["GsRagul", "Prassana", "Victor", "Ashok", "Sathya"]
  const user = [
    {
      name: "Vassan",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj4j7VUgFw1Djx2KOQtqIHnHCPy_lL35Q5Q&usqp=CAU"
    },
    {
      name: "Vishnu",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU"
    },
    {
      name: "Charlis",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU"
    },
    {
      name: "Clady",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU"
    },
    {
      name: "Vivak",
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6K1J-byWbN0Cd1hIAEt0tmhDWyhuJhClmg&usqp=CAU"
    }
  ]
  return (
    <div className="App">
      {/* <Welcome name="Ashok" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoj4j7VUgFw1Djx2KOQtqIHnHCPy_lL35Q5Q&usqp=CAU" />
      <Welcome name="kumar" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7njl1_cq_4eXYQlyaSvQM7eiionn-35yupg&usqp=CAU" />
      <Welcome name="Ak" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy6K1J-byWbN0Cd1hIAEt0tmhDWyhuJhClmg&usqp=CAU" /> */}
      {
        names.map((n) => <Msg name={n} />)
      }
      {
        user.map((n) => <Welcome name={n.name} pic={n.pic} />)
      }
      {/* <Color /> */}
    </div>
  );
}


function Counter() {
  const [like, setLike] = useState(0)
  const [disLike, setDisLike] = useState(0)
  return <>
    <button onClick={() => { setLike(like + 1) }} >👍{like}</button>
    <button onClick={function () { setDisLike(disLike + 1) }}>👎{disLike}</button>
  </>
}

function Welcome(props) {
  return <>
    <img className="Profile_pic" src={props.pic} alt={props.name}></img>
    <h1>Hello,{props.name}</h1>
    <Counter />
    <Color />

  </>
}
function Color() {
  const [color, setColor] = useState("")
  const styles = {
    background: color,
    fontSize: "40px"
  }
  const types = "text"
  return <>
    <input style={styles} type={types} placeholder="Enter color" onChange={(event) => setColor(event.target.value)} value={color} />
  </>
}

function Msg(props) {
  return <>
    <h1>Hello! {props.name}🎇✨🎊🎉</h1>
  </>
}
export default App;