import React, { Component } from "react";

export class Price extends Component {
  render() {
    return (
      <div className="price-ticket inline">
        <div className="price bold">
          <div className="price-number inline">{this.props.price}</div>
          <div className="price-code inline">{this.props.priceCode}</div>
        </div>
        <div className="ticket-type second-line">{this.props.typeOfTicket}</div>
      </div>
    );
  }
}
