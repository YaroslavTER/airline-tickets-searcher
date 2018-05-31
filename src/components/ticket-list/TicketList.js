import React, { Component } from "react";
import { Ticket } from "./ticket/Ticket";

export class TicketList extends Component {
  renderList(ticketList) {
    return ticketList.map((element, index) => {
      return (
        <Ticket
          key={`${index} ticket`}
          price={element.priceInfo.totalFare}
          priceCode={element.priceInfo.code}
          typeOfTicket={`${element.typeOfTicket} ticket`}
          flightList={element.flightList}
          airportCities={this.props.airportCities}
        />
      );
    });
  }

  render() {
    return <div>{this.renderList(this.props.ticketList)}</div>;
  }
}
