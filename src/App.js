import React, { useState } from "react";
import "./style.css";

export default function App() {
  const result = useState(0);
  function addItem(e){
    e.preventDefault();
    console.log('addItem');
  }
  return (
    <div class="base">
    <div class="calcResult">{result}</div>
    <div class="calcTable">      
      <div class="calcRow">
        <div class="calcCell"><button onClick={addItem}>0</button></div>
        <div class="calcCell"><button onClick={addItem}>1</button></div>
        <div class="calcCell"><button onClick={addItem}>2</button></div>
        <div class="calcCell"><button onClick={addItem}>+</button></div>
      </div>
      <div class="calcRow">
        <div class="calcCell"><button onClick={addItem}>3</button></div>
        <div class="calcCell"><button onClick={addItem}>4</button></div>
        <div class="calcCell"><button onClick={addItem}>5</button></div>
        <div class="calcCell"><button onClick={addItem}>-</button></div>
      </div>
      <div class="calcRow">
        <div class="calcCell"><button onClick={addItem}>6</button></div>
        <div class="calcCell"><button onClick={addItem}>7</button></div>
        <div class="calcCell"><button onClick={addItem}>8</button></div>
        <div class="calcCell"><button onClick={addItem}>*</button></div>
      </div>
      <div class="calcRow">
        <div class="calcCell"><button onClick={addItem}>9</button></div>
        <div class="calcCell"><button onClick={addItem}>/</button></div>
        <div class="calcCell"><button onClick={addItem}>=</button></div>
        <div class="calcCell"><button onClick={addItem}>c</button></div>
      </div>
    </div>
    </div>
  );
}
