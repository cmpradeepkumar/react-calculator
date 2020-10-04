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
  operation=(e)=>{
    if(this.tempResult !== 0)
      this.equals();

    if(this.operator === ''){
      this.operator = e.target.value;
      this.tempOne = this.state.result;
      if(this.operator === '%')
        this.equals();
    } else {
      this.tempTwo = this.state.result;
      this.equals();
    }
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
    var added = '';
    if(this.tempResult === 0){
      if(this.tempTwo !== 0){
      added = (Number(this.tempOne)+Number(this.tempTwo));
      }
      else{ 
      added = (Number(this.tempOne)+Number(this.state.result));      
      }
    this.setState({result: added});
    this.tempResult = added;
    }
    }
    
    if(this.operator === '-'){
    var substracted = '';
    if(this.tempResult === 0){
      if(this.tempTwo !== 0){
      substracted = (Number(this.tempOne)-Number(this.tempTwo));
      }
      else{ 
      substracted = (Number(this.tempOne)-Number(this.state.result));
      }
    this.setState({result: substracted});
    this.tempResult = substracted;
    }
    }

    if(this.operator === '*'){
    var multiplied = '';
    if(this.tempResult === 0){
      if(this.tempTwo !== 0){
      multiplied = (Number(this.tempOne)*Number(this.tempTwo));
      }
      else{ 
      multiplied = (Number(this.tempOne)*Number(this.state.result));
      }
    console.log('parseFloat(multiplied) :: '+multiplied);
    this.setState({result: parseFloat(multiplied)});
    this.tempResult = multiplied;
    }     
    }

    if(this.operator === '/'){
    var divided = '';
    if(this.tempResult === 0){
      if(this.tempTwo !== 0){
      divided = (Number(this.tempOne)/Number(this.tempTwo));
      }
      else{ 
      divided = (Number(this.tempOne)/Number(this.state.result));
      }
    this.setState({result: divided});
    this.tempResult = divided;
    }     
    }

    if(this.operator === '%'){
    var percent = '';
    if(this.tempResult === 0){
      percent = (Number(this.tempOne)/100);
    this.setState({result: percent});
    this.tempResult = percent;
    }     
    }
    this.operator = '';
    this.tempOne = 0;
    this.tempTwo = 0; 
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
        <div className="calcCell"><button onClick={this.add} className="buttonOrange" value="+">+</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} value="4" className="buttonBlue">4</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="5" className="buttonBlue">5</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="6" className="buttonBlue">6</button></div>
        <div className="calcCell"><button onClick={this.minus} className="buttonOrange" value="-">-</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} value="1" className="buttonBlue">1</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="2" className="buttonBlue">2</button></div>
        <div className="calcCell"><button onClick={this.addItem} value="3" className="buttonBlue">3</button></div>
        <div className="calcCell"><button onClick={this.operation} className="buttonOrange" value="*">*</button></div>
      </div>
      <div className="calcRow">
        <div className="calcCell"><button onClick={this.addItem} className="buttonLarge buttonRed" value="0">0</button></div>
        <div className="calcCell"><button onClick={this.addItem} className="buttonBlue" value=".">.</button></div>        
        <div className="calcCell"><button onClick={this.operation} className="buttonOrange" value="/">/</button></div>
      </div>
      <div className="calcRow">        
        <div className="calcCell"><button onClick={this.clear} className="buttonLarge buttonRed">Del</button></div>
        <div className="calcCell"><button onClick={this.operation} className="buttonOrange" value="%">%</button></div>
        <div className="calcCell"><button onClick={this.equals} className="buttonRed">=</button></div>
      </div>
    </div>
    </div>
  );
  }
}

export default App;