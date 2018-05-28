import React, { Component } from "react";
import { SearchButton } from "./SearchButton";
import { Row } from "./row/Row";
import { TicketList } from "../ticket-list/TicketList";
import instaFlightSearch from "../../api/insta-flights-search/instaFlightsSearch";

export class MainBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airports: {
        departure: "IEV",
        arrival: "LWO"
      },
      dates: {
        departure: this.addToCurrentDate(0, 0, 0),
        arrival: this.addToCurrentDate(0, 0, 1)
      },
      passengersNumber: 1,
      country: "UA",
      ticketList: [{}]
    };

    this.handleAirportChange = this.handleAirportChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handlePassangersNumberChange = this.handlePassangersNumberChange.bind(
      this
    );
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleAirportChange(event) {
    let airports = this.state.airports;
    airports[event.target.placeholder] = event.target.value;
    this.setState({ airports: airports });
  }

  addToCurrentDate(inputYear, inputMonth, inputDay) {
    const limit = 10;
    const date = new Date();
    const day = this.addZero(date.getDate() + inputDay, limit);
    const month = this.addZero(date.getMonth() + 1 + inputMonth, limit);
    const year = date.getFullYear() + inputYear;
    return `${year}-${month}-${day}`;
  }

  addZero(number, limit) {
    return number < limit ? "0" + number.toString() : number.toString();
  }

  handleDateChange(event) {
    let dates = this.state.dates;
    dates[event.target.name] = event.target.value;
    this.setState({ dates: dates });
  }

  handlePassangersNumberChange(event) {
    this.setState({ passengersNumber: Number(event.target.value) });
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  handleSearchClick() {
    instaFlightSearch.pullData(
      `origin=${this.state.airports.departure}&destination=${
        this.state.airports.arrival
      }&departuredate=${this.state.dates.departure}&returndate=${
        this.state.dates.arrival
      }&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=${
        this.state.country
      }&passengercount=${this.state.passengersNumber}`,
      json => this.handleJSON(json)
    );
  }

  handleJSON(json) {
    const dataList = json.PricedItineraries;
    //airline code - https://api-crt.cert.havail.sabre.com/v1/lists/utilities/airlines?airlinecode=ps
    //airports code - https://api-crt.cert.havail.sabre.com/v1/lists/supported/cities/iev/airports
    //air equipment type - https://api-crt.cert.havail.sabre.com/v1/lists/utilities/aircraft/equipment?aircraftcode=738
    console.log(json);
  }

  render() {
    const type = {
      text: { name: "text" },
      date: { name: "date", min: "1000-01-01", max: "3000-12-31" }
    };
    const dates = Object.keys(this.state.dates);
    const airports = Object.keys(this.state.airports);
    return (
      <div>
        <div className="container main-block">
          <Row
            firstItemName="departure"
            firstItemInputName={airports[0]}
            secondItemInputName={airports[1]}
            firstItemIconName="fas fa-plane"
            secondItemName="arrival"
            firstItemType={type.text.name}
            secondItemType={type.text.name}
            firstItemValue={this.state.airports.departure}
            secondItemValue={this.state.airports.arrival}
            firstItemPlaceholder={airports[0]}
            secondItemPlaceholder={airports[1]}
            firstItemOnChange={this.handleAirportChange}
            secondItemOnChange={this.handleAirportChange}
          />

          <Row
            firstItemValue={this.state.dates.departure}
            secondItemValue={this.state.dates.arrival}
            firstItemInputName={dates[0]}
            secondItemInputName={dates[1]}
            firstItemIconName="far fa-calendar-alt"
            secondItemIconName=""
            firstItemName={dates[0]}
            secondItemName={dates[1]}
            firstItemType={type.date.name}
            secondItemType={type.date.name}
            firstItemMin={type.date.min}
            secondItemMax={type.date.max}
            firstItemOnChange={this.handleDateChange}
            secondItemOnChange={this.handleDateChange}
          />

          <Row
            firstItemName="number of passengers"
            secondItemName="country"
            firstItemIconName="fas fa-user-circle"
            secondItemIconName="fas fa-globe"
            firstItemValue={this.state.passengersNumber}
            firstItemOnChange={this.handlePassangersNumberChange}
            secondItemValue={this.state.country}
            secondItemOnChange={this.handleCountryChange}
          />

          <SearchButton name="search flight" onClick={this.handleSearchClick} />
        </div>
        <TicketList ticketList={this.state.ticketList} />
      </div>
    );
  }
}
