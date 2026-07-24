import React, { Component } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount = this.incrementCount.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  incrementCount() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  displayAlert() {
    alert("Hello Member!");
  }

  // Method to invoke multiple methods on increment button click
  handleIncrementClick = () => {
    this.incrementCount();
    this.displayAlert();
  }

  decrementCount() {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  }

  sayWelcome(message) {
    alert(message);
  }

  handleClick(e) {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        {/* Counter Section */}
        <div>
          <h2>Counter: {this.state.count}</h2>
          <button onClick={this.handleIncrementClick}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>

        {/* Say welcome Button */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        </div>

        {/* Click on me Button */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={this.handleClick}>Click on me</button>
        </div>

        <hr />

        {/* CurrencyConvertor Component */}
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
