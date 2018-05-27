import React, { Component } from "react";
import { Item } from "./Item";

export class Row extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <Item
            placeholder={this.props.firstItemPlaceholder}
            itemName={this.props.firstItemName}
            name={this.props.firstItemInputName}
            iconName={this.props.firstItemIconName}
            value={this.props.firstItemValue}
            onChange={this.props.firstItemOnChange}
            type={this.props.firstItemType}
            min={this.props.firstItemMin}
            max={this.props.firstItemMax}
            isDisabled={this.props.firstItemIsDisabled}
          />
          <Item
            placeholder={this.props.secondItemPlaceholder}
            itemName={this.props.secondItemName}
            name={this.props.secondItemInputName}
            iconName={this.props.secondItemIconName}
            value={this.props.secondItemValue}
            onChange={this.props.secondItemOnChange}
            type={this.props.secondItemType}
            min={this.props.secondItemMin}
            max={this.props.secondItemMax}
            isDisabled={this.props.secondItemIsDisabled}
          />
        </div>
      </div>
    );
  }
}
