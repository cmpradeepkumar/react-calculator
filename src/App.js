import React, {Component} from "react";
import "./style.css";

class App extends Component {
  constructor() {
    this.state = {result: 0};
    this.operator = '';
    this.tempOne = 0;
    this.tempTwo = 0;
    this.tempResult = 0;
  }
  addItem=(e)=>{
    console.log('tempOne :: '+this.tempOne);
    console.log('result :: '+this.state.result);
    console.log('operator :: '+this.operator);
    if(this.state.result === 0 || (this.tempOne === this.state.result) || this.tempResult !== 0){
    this.setState({result: e.target.value});
    this.tempResult = 0;
    } else {
    this.setState({result: this.state.result + e.target.value});
    }
  }
  add=()=>{
    if(this.tempResult !== 0)
      this.equals();

    if(this.operator !== '+'){
      this.operator = '+';
      this.tempOne = this.state.result;
    } else {
      this.tempTwo = this.state.result;
      this.equals();
    }
  }
  minus(){

  }
  clear=()=>{
    this.operator = '';
    this.tempOne = 0;
    this.tempTwo = 0;
    this.tempResult = 0;
    this.setState({result: 0});
  }
  equals=()=>{
    if(this.operator === '+'){
    var addition = '';
    if(this.tempResult === 0){
      if(this.tempTwo !== 0){
      addition = (Number(this.tempOne)+Number(this.tempTwo));
      this.setState({result: addition});    
      }
      else{ 
      addition = (Number(this.tempOne)+Number(this.state.result));
      this.setState({result: addition});
      }
    }
    this.tempResult = addition;
    this.operator = '';
    this.tempOne = 0;
    this.tempTwo = 0;  
  }
  }
  render() {
    return (
    <div className="base">
    <div className="calcResult">{this.state.result}</div>
    <div className="calcTable">      
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} value="7" className="buttonBlue">7</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="8" className="buttonBlue">8</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="9" className="buttonBlue">9</button></div>
        <div className="calcCell"><button onClick={this.add} className="buttonOrange">+</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} value="4" className="buttonBlue">4</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="5" className="buttonBlue">5</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="6" className="buttonBlue">6</button></div>
        <div className="calcCell"><button onClick={this.minus} className="buttonOrange">-</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} value="1" className="buttonBlue">1</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="2" className="buttonBlue">2</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="3" className="buttonBlue">3</button></div>
        <div className="calcCell"><button onClick={this.addItem} className="buttonOrange">*</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} value="0" className="buttonLarge buttonRed">0</button></div>
        <div className="calcCell"><button onClick={this.addItem} className="buttonBlue">.</button></div>        
        <div className="calcCell"><button onClick={this.addItem} className="buttonOrange">/</button></div>
      </div>
      <div className="calcRow">        
        <div className="calcCell"><button onClick={this.clear} className="buttonLarge buttonRed">Del</button></div>
        <div className="calcCell"><button onClick={this.addItem} className="buttonOrange">%</button></div>
        <div className="calcCell"><button onClick={this.equals} className="buttonRed">=</button></div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;