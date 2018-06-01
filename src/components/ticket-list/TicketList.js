import React, { Component } from "react";
import { Ticket } from "./ticket/Ticket";
import { Loader } from "./loader/Loader";
import { NotFound } from "./not-found/NotFound";

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
    let render = [];
    if (this.props.isLoading) {
      render = <Loader />;
    } else if (this.props.isNotFound) {
      render = <NotFound text="Not found." />;
    } else {
      render = this.renderList(this.props.ticketList);
    }
    return <div>{render}</div>;
  }
}
