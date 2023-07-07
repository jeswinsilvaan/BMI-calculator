
import './App.css';
import React,{useState} from "react";

function App() {

  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState('');
  const[message,setMessage]=useState('');

  let calcBmi = (e)=>{
    e.preventDefault();
    if(weight===0 || height===0)
    {
      alert('Please Enter A Valid Weight & Height')
    }
    else{
      let bmi=(weight/(height*height))
      setBmi(bmi.toFixed(1))
      if(bmi<=18)
      {
        setMessage('you are underweight')
      }
      else if(bmi>18 && bmi<25)
      {
        setMessage('congrats you are healthy')
      }
      else if(bmi>=25 && bmi<30)
      {
        setMessage('you are overweight')
      }

      else if(bmi>=30 && bmi<40)
      {
        setMessage('you are obesity')
      }
      else{
        setMessage('you are severe obesity')
      }
    }

  }
  let reload=()=>{
    window.location.reload();
  }


  return (
    <div className="background">
    <div className="App">
    <div className="container" >
      <h2>BMI CALCULATOR</h2>
      <form onSubmit={calcBmi}>
        <div>
          <lable>Weight (Kg):</lable>
          <input type="text" placeholder="Enter weight value" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div>
          <lable>Height (m):</lable>
          <input type="text" placeholder="Enter height value" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div>
          <button className="btn" type="submit">
            submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            reload
          </button>
        </div>
        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <h4>{message}</h4>
        </div>
      </form>
    </div>
    </div></div>
  );
}

export default App;
