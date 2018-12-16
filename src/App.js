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
          <Button style="btnDigit btnClear">CLEAR</Button>
          <Button style="btn btnOperator">X</Button>
        </div>
        <div>
          <Button style="btn btnDigit">1</Button>
          <Button style="btn btnDigit">2</Button>
          <Button style="btn btnDigit">3</Button>
          <Button style="btn btnOperator">+</Button>
        </div>
        <div>
          <Button style="btn btnDigit">4</Button>
          <Button style="btn btnDigit">5</Button>
          <Button style="btn btnDigit">6</Button>
          <Button style="btn btnOperator">-</Button>
        </div>
        <div>
          <Button style="btn btnDigit">7</Button>
          <Button style="btn btnDigit">8</Button>
          <Button style="btn btnDigit">9</Button>
          <Button style="btn btnOperator">%</Button>
        </div>
        <div>
          <Button style="btn btnOperator"><sup>+</sup>/<sub>-</sub></Button>
          <Button style="btn btnDigit">0</Button>
          <Button style="btn btnOperator">.</Button>
          <Button style="btn btnOperator">=</Button>
        </div>
      </div>
    );
  }
}

export default App;
