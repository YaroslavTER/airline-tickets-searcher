import React, { Component } from "react";

export class Item extends Component {
  render() {
    return (
      <div className="form-group col-md-6">
        <label className="upper-case">
          <i className={this.props.iconName} />
          {this.props.itemName}
        </label>
        <input
          className="form-control"
          type={this.props.type}
          name={this.props.name}
          max={this.props.max}
          min={this.props.min}
          disabled={this.props.isDisabled}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}
