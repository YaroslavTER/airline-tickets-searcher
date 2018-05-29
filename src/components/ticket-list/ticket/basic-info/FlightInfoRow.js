import React, { Component } from "react";
import { DepartureArrivalTime } from "./DepartureArrivalTime";
import { ElapsedTime } from "./ElapsedTime";
import { StopsQuantity } from "./StopsQuantity";

export class FlightInfoRow extends Component {
  render() {
    return (
      <div>
        <DepartureArrivalTime
          departureTime={this.props.departureTime}
          time={this.props.time}
          flightNumber={this.props.flightNumber}
          airlineCode={this.props.airlineCode}
        />

        <ElapsedTime
          elapsedTime={this.props.elapsedTime}
          airports={this.props.airports}
        />

        <StopsQuantity numberOfStops={this.props.numberOfStops} />
      </div>
    );
  }
}
