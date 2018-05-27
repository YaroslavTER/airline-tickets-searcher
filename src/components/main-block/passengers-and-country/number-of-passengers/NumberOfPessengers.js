import React, { Component } from "react";

export class NumberOfPessengers extends Component {
  render() {
    return (
      <div className="form-group col-md-6">
        <label className="upper-case">
          <i className="fas fa-male" />
          <i className="fas fa-female" />
          {this.props.name}
        </label>
        <input
          type="input"
          className="form-control"
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
          value={this.props.value}
        />
      </div>
    );
  }
}
