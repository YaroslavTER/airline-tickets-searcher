import React, { Component } from "react";
import { Date } from "./Date";

export class Dates extends Component {
  render() {
    return (
      <div className="row">
        <Date
          name="departure"
          min="1000-01-01"
          max="3000-12-31"
          value={this.props.dates.departure}
          onChange={this.props.onChange}
        />
        <Date
          name="arrival"
          min="1000-01-01"
          max="3000-12-31"
          isDisabled={this.props.isArrivalDateDisabled}
          value={this.props.dates.arrival}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
