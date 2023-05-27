import React, { Component } from "react";
import { Heading } from "./components";
import { calculateTipAmount, calculateTotal } from "./helper";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      tipPercent: 0.2,
    };
  }

  handlePriceChange = (event) => {
    this.setState({ price: event.target.value });
  };

  handleTipPercentChange = (event) => {
    this.setState({ tipPercent: event.target.value });
  };

  render() {
    const { price, tipPercent } = this.state;
    const tipAmount = calculateTipAmount(price, tipPercent);
    const totalAmount = calculateTotal(price, tipPercent);

    return (
      <div className="container l:w-50 p-5">
        <Heading />

        <div className="container px-0">
          <div className="row mb-4">
            <div className="col">
              <label htmlFor="price" className="form-label mb-1">
                price
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  $
                </span>
                <input
                  className="form-control"
                  id="price"
                  placeholder="Price"
                  type="number"
                  onChange={this.handlePriceChange}
                />
              </div>
            </div>

            <div className="col">
              <label htmlFor="tip-percent" className="form-label mb-1">
                tip
              </label>
              <div className="input-group">
                <span className="input-group-text" id="basic-addon1">
                  %
                </span>
                <select
                  className="form-select"
                  id="tip-percent"
                  onChange={this.handleTipPercentChange}
                >
                  <option value="0.2">20</option>
                  <option value="0.18">18</option>
                  <option value="0.15">15</option>
                  <option value="0.1">10</option>
                  <option value="0">no tip 😢</option>
                </select>
              </div>
            </div>
          </div>

          <hr />

          <div className="row">
            <p className="col fs-3">
              Tip amount:{" "}
              <span data-testid="tip" className="fw-bold">
                ${tipAmount}
              </span>
            </p>
            <p className="col fs-3">
              Total:{" "}
              <span data-testid="total" className="fw-bold">
                ${totalAmount}
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
