import React, { useState } from "react";

function myintraday() {
  const [quantity, setquantity] = useState(0);
  const [buy, setbuy] = useState(0);
  const [sell, setsell] = useState(0);

  var buyvalue = buy * quantity;
  var sellvalue = sell * quantity;

  var sttsell = (0.025 / 100) * sellvalue;
  var buytxn = (0.00345 / 100) * buyvalue;
  var selltxn = (0.00345 / 100) * sellvalue;

  var ap = (0.05 / 100) * buyvalue;
  var ep = (0.05 / 100) * sellvalue;
  var brokerage = 0;
  if (ap > 20 && ep > 20) {
    brokerage = 40;
  } else if (ap > 20 && ep < 20) {
    brokerage = 20 + ep;
  } else if (ep > 20 && ap < 20) {
    brokerage = 20 + ap;
  } else if (ap < 20 && ep < 20) {
    brokerage = ap + ep;
  }

  var gst = (18 / 100) * (brokerage + buytxn + selltxn);
  var statestamp = (0.003 / 100) * (quantity * buy); // state stamp duty Rajasthan duty is .015%
  var sebicharges = (0.0001 / 100) * (buyvalue + sellvalue); // state stamp duty Rajasthan duty is .0000500%

  var total =
    gst + brokerage + statestamp + sebicharges + buytxn + selltxn + sttsell;
  var othercharges =
    gst + statestamp + sebicharges + buytxn + selltxn + sttsell;
  return (
    <>
      <div className="container">
        <div className="inner_container">
          <div className="form">
            <div className="group">
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                value={quantity}
                min={1}
                onChange={(e) => setquantity(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="buy">Buy Price</label>
              <input
                type="number"
                value={buy}
                min={1}
                onChange={(e) => setbuy(e.target.value)}
              />
            </div>
            <div className="group">
              <label htmlFor="sell">Sell Price</label>
              <input
                type="number"
                value={sell}
                min={1}
                onChange={(e) => setsell(e.target.value)}
              />
            </div>
          </div>

          {/* another Brokerage */}
          <div className="bkg">
            <div>
              Brokerage
              <span>₹ {brokerage.toFixed(2)}</span>
            </div>
            <div>
              Other Charges
              <span>₹ {othercharges.toFixed(2)}</span>
            </div>
            <div>
              Net PnL
              <span>₹ {(sellvalue - buyvalue - total).toFixed(2)}</span>
            </div>
          </div>
          {/* details area */}
          <div className="details">
            <div className="side">
              <p>
                Brokerage
                <span>₹ {brokerage.toFixed(2)}</span>
              </p>
              <p>
                STT SELL
                <span>₹ {sttsell.toFixed(2)}</span>
              </p>
              <p>
                Transaction Charges
                <span>₹ {(buytxn + selltxn).toFixed(2)}</span>
              </p>
              <p>
                State Stamp Duty
                <span>₹ {statestamp.toFixed(2)}</span>
              </p>
              <p>
                SEBI Turnover Fees
                <span>₹ {sebicharges.toFixed(2)}</span>
              </p>
              <p>
                GST
                <span>₹ {gst.toFixed(2)}</span>
              </p>
              <p className="herop">
                TOTAL TAXES AND CHARGES
                <span>₹ {total.toFixed(2)}</span>
              </p>
            </div>
            <div className="side">
              <p>
                Net Buy Value
                <span>₹ {buyvalue.toFixed(2)}</span>
              </p>
              <p>
                Net Sell Value
                <span>₹ {sellvalue.toFixed(2)}</span>
              </p>
              <p className="herop">
                Profit
                <span>₹ {(sellvalue - buyvalue).toFixed(2)}</span>
              </p>
              <p className="herop">
                After Charges and Brokerage
                <span>₹ {(sellvalue - buyvalue - total).toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default myintraday;
