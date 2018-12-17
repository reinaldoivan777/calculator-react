import React, { Component } from 'react';
import Display from './components/Display'
import Button from './components/Button'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Display />
        <div>
          <Button style="btnDigit btnClear" type="clear" value="clear">CLEAR</Button>
          <Button style="btn btnOperator" type="operator" value="*">X</Button>
        </div>
        <div>
          <Button style="btn btnDigit" type="digit" value="1">1</Button>
          <Button style="btn btnDigit" type="digit" value="2">2</Button>
          <Button style="btn btnDigit" type="digit" value="3">3</Button>
          <Button style="btn btnOperator" type="operator" value="+">+</Button>
        </div>
        <div>
          <Button style="btn btnDigit" type="digit" value="4">4</Button>
          <Button style="btn btnDigit" type="digit" value="5">5</Button>
          <Button style="btn btnDigit" type="digit" value="6">6</Button>
          <Button style="btn btnOperator" type="operator" value="-">-</Button>
        </div>
        <div>
          <Button style="btn btnDigit" type="digit" value="7">7</Button>
          <Button style="btn btnDigit" type="digit" value="8">8</Button>
          <Button style="btn btnDigit" type="digit" value="9">9</Button>
          <Button style="btn btnOperator" type="operator" value="/"><sup>o</sup>/<sub>o</sub></Button>
        </div>
        <div>
          <Button style="btn btnOperator" type="negate"><sup>+</sup>/<sub>-</sub></Button>
          <Button style="btn btnDigit" type="digit" value="0">0</Button>
          <Button style="btn btnOperator" type="operator" value=".">.</Button>
          <Button style="btn btnOperator" type="equal" value="=">=</Button>
        </div>
      </div>
    );
  }
}

export default App;
