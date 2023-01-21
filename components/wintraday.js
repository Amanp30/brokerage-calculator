import React, { useState } from "react";

const BrokerageCalculator = () => {
  const [transactionValue, setTransactionValue] = useState(0);
  const [brokerage, setBrokerage] = useState(0);
  const [GST, setGST] = useState(0);
  const [totalBrokerage, setTotalBrokerage] = useState(0);

  const handleChange = (event) => {
    setTransactionValue(event.target.value);
  };

  const calculateBrokerage = () => {
    let brokerage = 0;
    let GST = 0;
    if (transactionValue <= 500000) {
      brokerage = (transactionValue * 0.05) / 100;
      GST = (brokerage * 18) / 100;
    } else {
      brokerage = (transactionValue * 0.02) / 100;
      GST = (brokerage * 18) / 100;
    }
    let totalBrokerage = brokerage + GST;
    setBrokerage(brokerage);
    setGST(GST);
    setTotalBrokerage(totalBrokerage);
  };

  return (
    <div>
      <h3>Upstox Intraday Brokerage Calculator</h3>
      <label>
        Transaction Value:
        <input type="number" value={transactionValue} onChange={handleChange} />
      </label>
      <br />
      <button onClick={calculateBrokerage}>Calculate Brokerage</button>
      <br />
      <label>Brokerage: {brokerage}</label>
      <br />
      <label>GST: {GST}</label>
      <br />
      <label>Total Brokerage: {totalBrokerage}</label>
    </div>
  );
};

export default BrokerageCalculator;
