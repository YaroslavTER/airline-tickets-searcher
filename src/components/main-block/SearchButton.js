import React, { Component } from "react";

export class SearchButton extends Component {
  render() {
    return (
      <div className="search-button-wrapper">
        <button
          id="search"
          type="button"
          className="btn btn-primary"
          onClick={this.props.onClick}
        >
          {this.props.name}
        </button>
      </div>
    );
  }
}
