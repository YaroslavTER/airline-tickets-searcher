import React, { Component } from "react";
import { Airport } from "./Airport";

export class Airports extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Airport
            placeholder="departure"
            name="departure"
            value={this.props.airportsValue.departure}
            onChange={this.props.onChange}
          />
          <Airport
            placeholder="arrival"
            name="arrival"
            value={this.props.airportsValue.arrival}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}
