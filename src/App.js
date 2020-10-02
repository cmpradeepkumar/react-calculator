import React, { useState } from "react";
import "./style.css";

export default function App() {
const [result, setResult] = useState(0);
const [added, setAdded] = useState(0);
const [minused, setMinused] = useState(0);
const [operator, setOperator] = useState('');
function addItem(e){
  if(result === 0)
    setResult(e.target.value);
  else if(added !== 0)
    setResult(e.target.value);
  else if(minused !== 0)
    setResult(e.target.value);
  else
    setResult(result+e.target.value);
}
function add(e) {
  added = (Number(result)+Number(added));
  setAdded(added);
  setResult(added);
  setOperator('+');
}
function minus(e) {
  if(minused !== 0)
    minused = (Number(minused)-Number(result));
  else
    minused = (Number(result)-Number(minused));
    setMinused(minused);
    setResult(minused);
    setOperator('-');
  }
function equals(e) {
  if(operator === '+')
    result = (Number(added)+Number(result));
  else if(operator === '-')
    result = (Number(minused)-Number(result));
  setResult(result);
  setAdded(0);
  setMinused(0);
}
function clear(e) {
  setResult(0);
  setAdded(0);
  setMinused(0);
}
  return (
    <div className="base">
    <div className="calcResult">{result}</div>
    <div className="calcTable">      
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} value="7" className="buttonBlue">7</button></div>
        <div className="calcCell"><button onClick={addItem} value="8" className="buttonBlue">8</button></div>
        <div className="calcCell"><button onClick={addItem} value="9" className="buttonBlue">9</button></div>
        <div className="calcCell"><button onClick={add} className="buttonOrange">+</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} value="4" className="buttonBlue">4</button></div>
        <div className="calcCell"><button onClick={addItem} value="5" className="buttonBlue">5</button></div>
        <div className="calcCell"><button onClick={addItem} value="6" className="buttonBlue">6</button></div>
        <div className="calcCell"><button onClick={minus} className="buttonOrange">-</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} value="1" className="buttonBlue">1</button></div>
        <div className="calcCell"><button onClick={addItem} value="2" className="buttonBlue">2</button></div>
        <div className="calcCell"><button onClick={addItem} value="3" className="buttonBlue">3</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">*</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} value="0" className="buttonLarge buttonRed">0</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">.</button></div>        
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">/</button></div>
      </div>
      <div className="calcRow">        
        <div className="calcCell"><button onClick={clear} className="buttonLarge buttonRed">Del</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">%</button></div>
        <div className="calcCell"><button onClick={equals} className="buttonRed">=</button></div>
      </div>
    </div>
    </div>
  );
}
