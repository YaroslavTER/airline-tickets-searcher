import React, { Component } from "react";

export class Airport extends Component {
  render() {
    return (
      <div className="form-group col-md-6">
        <label className="upper-case">
          <i className="fas fa-plane" />
          {this.props.name}
        </label>
        <input
          type="input"
          className="form-control"
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
