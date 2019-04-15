import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };
  increment = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };
  decrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };
  add = num => {
    this.setState(prevState => ({
      counter: prevState.counter + num
    }));
  };
  subtract = num => {
    this.setState(prevState => ({
      counter: prevState.counter - num
    }));
  };
  render() {
    return (
      <div className="App">
        <ul className="actions">
          <li>
            <button onClick={this.increment}>Increment</button>
          </li>
          <li>
            <button onClick={this.decrement}>Decrement</button>
          </li>
          <li>
            <button onClick={this.add.bind(null, 10)}>Add</button>
          </li>
          <li>
            <button onClick={this.subtract.bind(null, 5)}>Subtract</button>
          </li>
        </ul>
        <h1>{`Counter : ${this.state.counter}`}</h1>
      </div>
    );
  }
}

export default App;
