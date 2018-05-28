import React, { Component } from "react";
import { FlightInfoRow } from "./FlightInfoRow";
import { Price } from "./Price";

export class BasicInfo extends Component {
  render() {
    return (
      <div>
        <div className="ticket" data-toggle="modal" data-target="#more-info">
          <div className="flight-info inline">
            <div className="departure-info">
              <FlightInfoRow
                time={this.props.departure.time}
                airlineCode={this.props.departure.airlineCode}
                flightNumber={this.props.departure.flightNumber}
                elapsedTime={this.props.departure.elapsedTime}
                airports={this.props.departure.airports}
              />
            </div>
            <hr />
            <div className="return-info">
              <FlightInfoRow
                time={this.props.arrival.time}
                airlineCode={this.props.arrival.airlineCode}
                flightNumber={this.props.arrival.flightNumber}
                elapsedTime={this.props.arrival.elapsedTime}
                airports={this.props.arrival.airports}
              />
            </div>
          </div>
          <div className="inline vertical-line" />
          <Price
            price={this.props.price}
            priceCode={this.props.priceCode}
            typeOfTicket={this.props.typeOfTicket}
          />
        </div>
      </div>
    );
  }
}
