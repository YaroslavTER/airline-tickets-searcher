import React, { Component } from "react";
import { Ticket } from "./ticket/Ticket";

export class TicketList extends Component {
  renderList(ticketList) {
    return ticketList.map((element, index) => {
      return <Ticket key={index} />;
    });
  }

  render() {
    return <div>{this.renderList(this.props.ticketList)}</div>;
  }
}
