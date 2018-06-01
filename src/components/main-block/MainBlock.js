import React, { Component } from "react";
import { SearchButton } from "./SearchButton";
import { Row } from "./row/Row";
import { TicketList } from "../ticket-list/TicketList";
import InstaFlightsSearch from "../../api/insta-flights-search/InstaFlightsSearch";
import DateTime from "../../date-time/DateTime";

export class MainBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      airports: {
        departure: "IEV",
        arrival: "LWO"
      },
      dates: {
        departure: DateTime.addToCurrentDay(0),
        arrival: DateTime.addToCurrentDay(1)
      },
      currentDate: DateTime.addToCurrentDay(0),
      passengersNumber: { value: 1, invalidFeedback: "" },
      country: "UA",
      isLoading: false,
      isNotFound: false,
      ticketList: []
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

  handleDateChange(event) {
    let dates = this.state.dates;
    dates[event.target.name] = event.target.value;
    this.setState({ dates: dates });
  }

  handlePassangersNumberChange(event) {
    let number = Number(event.target.value);
    if (number < 0 || isNaN(number)) {
      this.setState({ passengersNumber: { value: 0 } });
    } else {
      this.setState({
        passengersNumber: { value: Number(number) }
      });
    }
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value });
  }

  handleSearchClick() {
    this.setState({ isLoading: true });
    InstaFlightsSearch.pullData(
      `shop/flights?origin=${this.state.airports.departure}&destination=${
        this.state.airports.arrival
      }&departuredate=${this.state.dates.departure}&returndate=${
        this.state.dates.arrival
      }&onlineitinerariesonly=N&limit=10&offset=1&eticketsonly=N&sortby=totalfare&order=asc&sortby2=departuretime&order2=asc&pointofsalecountry=${
        this.state.country
      }&passengercount=${this.state.passengersNumber.value}`,
      json => this.handleJSON(json)
    );
  }

  handleJSON(json) {
    const dataList = json.PricedItineraries;
    if (dataList === undefined) {
      this.setState({ isNotFound: true, isLoading: false });
    } else {
      const ticketList = dataList.map(element => {
        return {
          typeOfTicket: element.AirItinerary.DirectionInd,
          flightList: element.AirItinerary.OriginDestinationOptions.OriginDestinationOption.map(
            element => {
              return element.FlightSegment.map(element => {
                return {
                  airports: {
                    departure: element.DepartureAirport.LocationCode,
                    arrival: element.ArrivalAirport.LocationCode
                  },
                  dateTime: {
                    departure: element.DepartureDateTime,
                    arrival: element.ArrivalDateTime
                  },
                  elapsedTime: element.ElapsedTime,
                  airplane: {
                    airEquipmentType: element.Equipment.AirEquipType,
                    flightNumber: element.FlightNumber,
                    marcetingAirline: element.MarketingAirline.Code
                  },
                  stopQuantity: element.StopQuantity
                };
              });
            }
          ),
          priceInfo: {
            totalFare:
              element.AirItineraryPricingInfo.ItinTotalFare.TotalFare.Amount,
            code:
              element.AirItineraryPricingInfo.ItinTotalFare.TotalFare
                .CurrencyCode
          }
        };
      });
      this.setState({
        ticketList: ticketList,
        isLoading: false,
        isNotFound: false
      });
    }
  }

  render() {
    const dates = Object.keys(this.state.dates);
    const airports = Object.keys(this.state.airports);
    const dateTypeInput = "date";
    return (
      <div>
        <div className="container main-block">
          <Row
            firstItemName="departure"
            firstItemInputName={airports[0]}
            secondItemInputName={airports[1]}
            firstItemIconName="fas fa-map-marker-alt"
            secondItemName="arrival"
            firstItemType="text"
            secondItemType="text"
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
            firstItemType={dateTypeInput}
            secondItemType={dateTypeInput}
            firstItemMin={this.state.currentDate}
            secondItemMin={this.state.dates.departure}
            firstItemOnChange={this.handleDateChange}
            secondItemOnChange={this.handleDateChange}
          />

          <Row
            firstItemName="number of passengers"
            secondItemName="country"
            firstItemIconName="fas fa-user-circle"
            secondItemIconName="fas fa-globe"
            firstItemValue={this.state.passengersNumber.value}
            firstItemOnChange={this.handlePassangersNumberChange}
            secondItemValue={this.state.country}
            secondItemOnChange={this.handleCountryChange}
          />

          <SearchButton name="search flight" onClick={this.handleSearchClick} />
        </div>
        <TicketList
          ticketList={this.state.ticketList}
          airportCities={this.state.airports}
          isLoading={this.state.isLoading}
          isNotFound={this.state.isNotFound}
        />
      </div>
    );
  }
}
