import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const amountVal = parseFloat(this.state.amount);
    if (isNaN(amountVal)) {
      alert("Converting to Euro Amount is 0");
      return;
    }
    // Using a standard exchange rate: 1 INR = 0.011 EUR
    const convertedValue = amountVal * 0.011;
    alert("Converting to Euro Amount is " + convertedValue);
  }

  render() {
    return (
      <div>
        <h3>Currency Convertor!!!</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount: </label>
            <input
              type="text"
              name="amount"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Currency: </label>
            <input
              type="text"
              name="currency"
              value={this.state.currency}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
