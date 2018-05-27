import React, { Component } from "react";

export class Ticket extends Component {
  render() {
    return (
      <div className="ticket">
        <div className="time-airline inline col-md-3">
          <div className="time bold">
            <div className="departure-time inline">10:35</div>
            <div className="inline separator">–</div>
            <div className="arrival-time inline">11:45</div>
          </div>
          <div className="airline">
            <div className="airline-code inline">PS</div>
            <div className="airline-number inline">33</div>
          </div>
        </div>

        <div className="elapsed-time-airports inline col-md-3">
          <div className="elapsed-time bold">1 hour 10 minutes</div>
          <div className="airports">
            <div className="departure-airport inline">KBP</div>
            <div className="inline separator">–</div>
            <div className="arriva-airport inline">LWO</div>
          </div>
        </div>

        <div className="stop-quantity inline bold col-md-3">
          <div className="stop-quantity-number inline">0</div>
          <div className="stop-quantity-name inline">stops</div>
        </div>

        <div className="price-ticket inline col-md-3">
          <div className="price bold">
            <div className="price-number inline">3 800</div>
            <div className="price-code inline">UAH</div>
          </div>
          <div className="ticket-type">return ticket</div>
        </div>
      </div>
    );
  }
}
