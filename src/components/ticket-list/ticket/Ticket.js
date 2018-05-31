import React, { Component } from "react";
import { BasicInfo } from "./basic-info/BasicInfo";
import { DetailedInfo } from "./detailed-info/DetailedInfo";

export class Ticket extends Component {
  render() {
    const id = `${this.props.price}`;
    return (
      <div>
        <BasicInfo
          price={this.props.price}
          priceCode={this.props.priceCode}
          typeOfTicket={this.props.typeOfTicket}
          flightList={this.props.flightList}
          target={id}
        />
        <DetailedInfo
          header="your aircraft"
          iconName="fas fa-plane"
          flightList={this.props.flightList}
          airportCities={this.props.airportCities}
          id={id}
        />
      </div>
    );
  }
}
