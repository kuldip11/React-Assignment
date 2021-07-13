import {useState} from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"

function App() {
  const [state, setState] = useState("text")
  const clickHandler = () => {
    if(state === "time"){
      setState("text")
    }
    else{
      setState("time")
    }
  }
  return (
    <div className="App">
      {state === "time" && <Child1 />}
      {state === "text" && <Child2 />}
      <button 
      onClick={clickHandler}
      style={{height:"30px", width:"50px", borderRadius:"5px", outline:"none", }}
      >{state}</button>
    </div>
  );
}

export default App;
