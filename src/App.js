import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
class App extends Component {
  state = {
    counter: 0
  };
  decrement = () => {
    this.setState({
      counter: this.state.counter - 1
    });
  };
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
