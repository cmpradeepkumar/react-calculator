import React, { useState } from "react";
import "./style.css";

export default function App() {
  const result = useState(0);
  function addItem(e){
    e.preventDefault();
    console.log('addItem');
  }
  return (
    <div className="base">
    <div className="calcResult">{result}</div>
    <div className="calcTable">      
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">7</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">8</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">9</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">+</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">4</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">5</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">6</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">-</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">1</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">2</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">3</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">*</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={addItem} className="buttonLarge buttonRed">0</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonBlue">.</button></div>        
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">/</button></div>
      </div>
      <div className="calcRow">        
        <div className="calcCell"><button onClick={addItem} className="buttonLarge buttonRed">Del</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonOrange">%</button></div>
        <div className="calcCell"><button onClick={addItem} className="buttonRed">=</button></div>
      </div>
    </div>
    </div>
  );
}
