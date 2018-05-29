import React, { Component } from "react";
import { FlightInfoRow } from "./FlightInfoRow";
import { Price } from "./Price";
import DateTime from "../../../../date-time/DateTime";

export class BasicInfo extends Component {
  renderFlightList(flightList) {
    const flightListLength = flightList.length;
    return flightList.map((list, index) => {
      const length = list.length;
      const outerIndex = index;
      return list.map((element, index) => {
        const departureFlightDate = new Date(`${element.dateTime.departure}`);
        const arrivalFlightDate = new Date(`${element.dateTime.arrival}`);
        const convertedElapsedTime = DateTime.convertElapsedTime(
          element.elapsedTime
        );
        let separator = <hr />;
        const indexList = index;
        if (index === length - 1 && outerIndex === flightListLength - 1) {
          separator = null;
        }
        return (
          <div
            className="departure-info"
            key={`${index} ${indexList} 0 flight`}
          >
            <div key={`${index} ${indexList} 1 flight`}>
              <FlightInfoRow
                key={`${index} ${indexList} flight`}
                time={{
                  departure: DateTime.getTime(departureFlightDate),
                  arrival: DateTime.getTime(arrivalFlightDate)
                }}
                airlineCode={element.airplane.marcetingAirline}
                flightNumber={element.airplane.flightNunber}
                elapsedTime={`${convertedElapsedTime.hour} hour ${
                  convertedElapsedTime.minutes
                } minutes`}
                airports={element.airports}
                numberOfStops={element.stopQuantity}
              />
              {separator}
            </div>
          </div>
        );
      });
    });
  }

  render() {
    return (
      <div>
        <div className="ticket" data-toggle="modal" data-target="#more-info">
          <div className="flight-info inline">
            {this.renderFlightList(this.props.flightList)}
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
