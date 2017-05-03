import React, { Component }   from "react";

export default class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectedValue } = this.props;
    return (
      <div className="button-group-container">
        <label className="btn-title">Side</label>
        <div className="btn-group">
          <button className={
              `btn btn-sm btn-default ${selectedValue === "BUY" ? "btn-primary": ""}`
            }
            onClick={this.props.onClickPurchase.bind(this, "purchaseType", "BUY")}
          >
            Buy
          </button>
          <button className={
              `btn btn-sm btn-default ${selectedValue === "SELL" ? "btn-danger": ""}`
            }
            onClick={this.props.onClickPurchase.bind(this, "purchaseType", "SELL")}
          >
            Sell
          </button>
        </div>
      </div>
    );
  }
}
