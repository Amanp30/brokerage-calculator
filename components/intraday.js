import React from "react";

class BrokerageCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transactionValue: 0,
      brokerage: 0,
      GST: 0,
      totalBrokerage: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateBrokerage = this.calculateBrokerage.bind(this);
  }

  handleChange(event) {
    this.setState({ transactionValue: event.target.value });
  }

  calculateBrokerage() {
    let brokerage = 0;
    let GST = 0;
    if (this.state.transactionValue <= 500000) {
      brokerage = (this.state.transactionValue * 0.05) / 100;
      GST = (brokerage * 18) / 100;
    } else {
      brokerage = (this.state.transactionValue * 0.02) / 100;
      GST = (brokerage * 18) / 100;
    }
    let totalBrokerage = brokerage + GST;
    this.setState({ brokerage, GST, totalBrokerage });
  }

  render() {
    return (
      <div>
        <h3>Upstox Intraday Brokerage Calculator</h3>
        <label>
          Transaction Value:
          <input
            type="number"
            value={this.state.transactionValue}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button onClick={this.calculateBrokerage}>Calculate Brokerage</button>
        <br />
        <label>Brokerage: {this.state.brokerage}</label>
        <br />
        <label>GST: {this.state.GST}</label>
        <br />
        <label>Total Brokerage: {this.state.totalBrokerage}</label>
      </div>
    );
  }
}

export default BrokerageCalculator;
