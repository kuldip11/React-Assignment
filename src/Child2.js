import logo from './logo.svg';
import './App.css';
import React , {useState, useEffect} from 'react'

const Child2 = () => {

  const [time, setTime] = useState("")

  const currentTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString()
    return time;
  }

  useEffect(() => {
    if(time!==""){
      var update = setInterval(() => {
        let time = currentTime();
        setTime(time)
        },1000)
        return () => clearInterval(update)
    }  
  },[time])

  useEffect(() => {
    let time = currentTime();
    setTime(time)
  }, [])


  return (
    <div style={{height:"20vh", textAlign:"center", fontSize:"45px"}}>{time}</div>  
  );
}

export default Child2;
