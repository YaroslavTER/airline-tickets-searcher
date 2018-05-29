import React, { Component } from "react";

export class StopsQuantity extends Component {
  render() {
    return (
      <div className="stop-quantity inline bold col-md-4">
        <div className="stop-quantity-number inline">
          {this.props.numberOfStops}
        </div>
        <div className="stop-quantity-name inline">stops</div>
      </div>
    );
  }
}
