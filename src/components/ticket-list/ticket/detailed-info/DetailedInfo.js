import React, { Component } from "react";

export class DetailedInfo extends Component {
  render() {
    return (
      <div className="modal fade" id="more-info">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detailed information</h5>
              <button type="button" className="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">Modal body..</div>
          </div>
        </div>
      </div>
    );
  }
}
