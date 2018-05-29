import React, { Component } from "react";

export class Item extends Component {
  render() {
    let marginRight = "";
    if (this.props.iconName) {
      marginRight = "mr-1";
    }
    return (
      <div className="form-group col-md-6">
        <label className="upper-case">
          <div className={`inline icon ${marginRight}`}>
            <i className={this.props.iconName} />
          </div>
          <div className="inline item-name">{this.props.itemName}</div>
        </label>
        <input
          className="form-control item-input"
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
