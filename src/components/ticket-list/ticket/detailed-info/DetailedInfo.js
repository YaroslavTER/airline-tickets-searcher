import React, { Component } from "react";
import InstaFlightsSearch from "../../../../api/insta-flights-search/InstaFlightsSearch";

export class DetailedInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airlineName: "",
      aircraftName: ""
    };
  }

  componentDidMount() {
    const flightList = this.props.flightList;
    this.setAirlineName(flightList);
    this.setAircraftName(flightList);
  }

  setAirlineName(flightList) {
    const code = flightList[0][0].airplane.marcetingAirline
      .toString()
      .toLowerCase();
    InstaFlightsSearch.pullData(
      `lists/utilities/airlines?airlinecode=${code}`,
      json => {
        this.setState({ airlineName: json.AirlineInfo[0].AirlineName });
      }
    );
  }

  setAircraftName(flightList) {
    const code = flightList[0][0].airplane.airEquipmentType;
    InstaFlightsSearch.pullData(
      `lists/utilities/aircraft/equipment?aircraftcode=${code}`,
      json => {
        this.setState({ aircraftName: json.AircraftInfo[0].AircraftName });
      }
    );
  }

  render() {
    return (
      <div className="modal fade" id={this.props.id}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <label className="upper-case inline">
                <div className={`inline icon mr-1`}>
                  <i className={this.props.iconName} />
                </div>
                <div className="inline item-name">{this.props.header}</div>
              </label>
              <button
                type="button"
                className="close inline"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <div className="aircraft-name">{this.state.aircraftName}</div>
              <div className="airline-name">{this.state.airlineName}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
