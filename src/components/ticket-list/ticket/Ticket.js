import React, { Component } from "react";
import { BasicInfo } from "./basic-info/BasicInfo";
import { DetailedInfo } from "./detailed-info/DetailedInfo";

export class Ticket extends Component {
  render() {
    return (
      <div>
        <BasicInfo
          price={this.props.price}
          priceCode={this.props.priceCode}
          typeOfTicket={this.props.typeOfTicket}
          flightList={this.props.flightList}
        />
        <DetailedInfo />
      </div>
    );
  }
}
