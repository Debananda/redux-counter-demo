import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
// import { INC, DEC, ADD, SUB } from "./store/actionTypes/counterActionTypes";
import {
  handleAddition,
  handleDecrement,
  handleIncrement,
  handleSubtraction
} from "./store/actions/counterAction";
import Posts from "./components/Posts";

class App extends Component {
  // state = {
  //   counter: 0
  // };
  // increment = () => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + 1
  //   }));
  // };
  // decrement = () => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter - 1
  //   }));
  // };
  // add = num => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter + num
  //   }));
  // };
  // subtract = num => {
  //   this.setState(prevState => ({
  //     counter: prevState.counter - num
  //   }));
  // };
  render() {
    return (
      <div className="App">
        <ul className="actions">
          <li>
            <button onClick={this.props.handleIncrement}>Increment</button>
          </li>
          <li>
            <button onClick={this.props.handleDecrement}>Decrement</button>
          </li>
          <li>
            <button onClick={this.props.handleAddition.bind(null, 10)}>
              Add
            </button>
          </li>
          <li>
            <button onClick={this.props.handleSubtraction.bind(null, 5)}>
              Subtract
            </button>
          </li>
        </ul>
        <h1>{`Counter : ${this.props.counter}`}</h1>
        <Posts />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter.num
  };
};

const mapDispatchToProps = {
  handleIncrement,
  handleDecrement,
  handleAddition,
  handleSubtraction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
