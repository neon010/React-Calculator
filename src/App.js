import React from "react"
import './App.css';

const numbers = [
  {
    id: "seven",
    value: 7,
    key:21
  },
  {
    id: "eight",
    value: 8,
    key:22
  },
  {
    id: "nine",
    value: 9,
    key: 23
  },
  {
    id: "four",
    value: 4,
    key: 24
  },
  {
    id: "five",
    value: 5,
    key: 25
  },
  {
    id: "six",
    value: 6,
    key: 26
  },
  {
    id: "one",
    value: 1,
    key: 27
  },
  {
    id: "two",
    value: 2,
    key: 28
  },
  {
    id: "three",
    value: 3,
    key: 29
  },
  {
    id: "zero",
    value: 0,
    key: 30
  },
  {
    id: "decimal",
    value: ".",
    key: 31
  },
];
const operators = [
  {
    id:"plus",
    value: "+",
    key: 11
  },
  {
    id: "minus",
    value: "-",
    key: 12
  },
  {
    id:"multiply",
    value: "*",
    key: 13
  },
  {
    key: "divide",
    value: "/",
    key: 14
  }
];
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentValue: 0,
      prevValue: "",
      formulaValue: "",
      operation: ""
    }
  }
  handleNumber = (event) => {
    let {currentValue} = this.state;
    //console.log(!isNaN(currentValue));
    if(currentValue){

    }
    if(!isNaN(Number(currentValue))){
      if (currentValue === 0) {
        this.setState({
          currentValue: event.target.innerText
      })
      } else {
        this.setState({
          currentValue: currentValue + event.target.innerText
      })
      }
    }else{
      this.setState({
        currentValue: currentValue.slice(0,-1)
    })
    }    
  }
  handleOperation = (event) => {
    let {currentValue, formulaValue} = this.state;
    if(formulaValue === ""){
      this.setState({
        currentValue: 0,
        formulaValue: currentValue + event.target.innerText 
        //operation: event.target.innerText
      })
    }else{
      this.setState({
        formulaValue: formulaValue + currentValue + event.target.innerText,
        currentValue: 0
      })
    }
  }
  handleInitialize = () => {
    this.setState({
      currentValue: 0,
      formulaValue: 0
    })
  }
  handleClear =() => {
    let {currentValue} = this.state;
    if(currentValue === "") {
      this.setState({
        currentValue: 0
      })
    } else {
      this.setState({
        currentValue: currentValue.slice(0, -1)
      })
    }

  }
  handleEqual =() =>{
    let {formulaValue, currentValue} = this.state;
    this.setState({
      formulaValue: eval(formulaValue+currentValue),
      currentValue: 0  
    })
  }
  render(){
    return (
      <div id="app">
          <div id="formula" className="formula">{this.state.formulaValue}</div>
          <div id="currentValue" className="currentValue" >{this.state.currentValue}</div>
          <div id="getValue">
                <button id="AC" onClick={this.handleInitialize}>AC</button>
                <button id="Clear" onClick={this.handleClear}>C</button>
                <button id="equal" onClick={this.handleEqual}>=</button>
          </div>
          <section className="numbers-operators">
                <div id="numbers" className="numbers">
                    {numbers.map(obj => {
                      return <button id={obj.id} key={obj.key} onClick={this.handleNumber}>{obj.value}</button>
                    })}
                </div>
                <div id="operators">
                    {operators.map(obj => {
                    return <button className="orange" onClick={this.handleClick} id={obj.id} key={obj.key} onClick={this.handleOperation}>{obj.value}</button>
                    })}
                </div>
          </section>
      </div>
    )
  }
}

export default App;
