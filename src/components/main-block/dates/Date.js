import React, { Component } from "react";

export class Date extends Component {
  render() {
    return (
      <div className="form-group col-md-6">
        <label className="upper-case">
          <i className="far fa-calendar-alt" />
          {this.props.name}
        </label>
        <input
          type="date"
          name={this.props.name}
          max={this.props.max}
          min={this.props.min}
          className="form-control"
          disabled={this.props.isDisabled}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
