import React, { Component } from "react";
import { NumberOfPessengers } from "./number-of-passengers/NumberOfPessengers";
import { Country } from "./country/Country";

export class PassengersAndCountry extends Component {
  render() {
    return (
      <div className="row">
        <NumberOfPessengers
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
        />
        <Country
          onChange={this.props.countryOnChange}
          value={this.props.country}
        />
      </div>
    );
  }
}
