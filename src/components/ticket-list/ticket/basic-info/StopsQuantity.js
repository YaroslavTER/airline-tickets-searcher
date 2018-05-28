import React, { Component } from "react";

export class StopsQuantity extends Component {
  render() {
    return (
      <div className="stop-quantity inline bold col-md-4">
        <div className="stop-quantity-number inline">0</div>
        <div className="stop-quantity-name inline">stops</div>
      </div>
    );
  }
}
