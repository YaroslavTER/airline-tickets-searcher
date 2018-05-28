import React, { Component } from "react";
import { BasicInfo } from "./basic-info/BasicInfo";
import { DetailedInfo } from "./detailed-info/DetailedInfo";

export class Ticket extends Component {
  render() {
    return (
      <div>
        <BasicInfo
          price="3800"
          priceCode="UAH"
          typeOfTicket="return ticket"
          departure={{
            time: {
              departure: "10:20",
              arrival: "11:40"
            },
            elapsedTime: "1 hour 10 minutes",
            airports: {
              departure: "IEV",
              arrival: "LWO"
            },
            airlineCode: "PS",
            flightNumber: 35
          }}
          arrival={{
            time: {
              departure: "10:20",
              arrival: "11:40"
            },
            elapsedTime: "1 hour 10 minutes",
            airports: {
              departure: "IEV",
              arrival: "LWO"
            },
            airlineCode: "PS",
            flightNumber: 35
          }}
        />
        <DetailedInfo />
      </div>
    );
  }
}
