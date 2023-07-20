import React from "react";
import Display from "./Display";
import Action from "./Action";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      value:0
    }

  }

  Add2=()=>{
    let val = this.state.value;
    val = val+2;
    this.setState({
      value:val
    })
  }

  Double2=()=>{

    let val = this.state.value;
    val = val*2;
    this.setState({
      value:val
    })
  }

  Square=()=>{

    let val = this.state.value;
    val = val*val;
    this.setState({
      value:val
    })
  }

  Dividedby2=()=>{

    let val = this.state.value;
    val = val/2;
    this.setState({
      value:val
    })
  }

  Subtract2=()=>{
    let val = this.state.value;
    val = val-2;
    this.setState({
      value:val
    })
  }
  render() {
    const val = this.state.value;
    return (
      <div className="App">
        <Display
           value = {val}
        />
        <Action
          add2 = {this.Add2}
          double = {this.Double2}
          square = {this.Square}
          dividedby2 = {this.Dividedby2}
          subtract2 = {this.Subtract2}
        />
      </div>
    );
  }

}


export default App;
