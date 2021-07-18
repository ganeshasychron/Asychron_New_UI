import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class MyPosition extends Component {
  state = {
    hideform: false,
    showHide: "",
  };


    hideform = () => {
    return !this.state.hideform ? (
      this.hideform()
    ) : (
      <div className="card myPositionHiring">
        <div className="card-body">
          <form
            onSubmit={() =>
              this.setState({
                hideform: false,
              })
            }
            ref={(form) => (this.form = form)}
            onReset={this.handleReset}
          >
            <div className="mb-3">
              <label for="inputTitle" className="form-label  lable-change">
                Candidate Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Enter Candidate Name"
                aria-describedby="inputTitle"
              />
            </div>

            <div className="mb-3">
              <label for="inputTitle" className="form-label  lable-change">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Enter Contact Number"
                aria-describedby="inputTitle"
              />
            </div>

            <div className="mb-3">
              <label for="inputTitle" className="form-label  lable-change">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Enter Email"
                aria-describedby="inputTitle"
              />
            </div>

            <div className="row g-3">
              <div className="col-md-4">
                <label for="inputTitle" className="form-label  lable-change">
                  Availablity
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  aria-describedby="inputTitle"
                />
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control hiring-availablity"
                  id="inputTitle"
                  aria-describedby="inputTitle"
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                for="exampleInputDescription"
                className="form-label  lable-change"
              >
                HR Feedback
              </label>
              <div className="col-sm-12">
                <textarea
                  type="text"
                  className="form-control formSpace"
                  id="textareatask"
                  rows="4"
                  cols="50"
                />
              </div>
            </div>

            <div className="button managetask">
              <h5
                style={{
                  display: "inline-block",
                  marginRight: "10px",
                }}
              >
                HR Rating (0 / 10)
              </h5>

              <button className="submit-button submit-managetask">
                Submit
              </button>
              <button className="submit-button save-managetask">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
};

  render() {
    return (
      <div>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="table-light">
              <tr>
                <th>Title</th>
                <th>Project</th>
                <th>Department</th>
                <th>Experience</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>
                  {this.state.hideform ? (
                    !this.hideform()
                  ) : (
                    <button
                      className="submit-button hiringtask"
                      onClick={() =>
                        this.setState({
                          hideform: true,
                          dyanamicBtnName: "Submit",
                        })
                      }
                    >
                      Add Candidates
                    </button>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sr. React Developer</td>
                <td>Ecommerce</td>
                <td>Unknown</td>
                <td>4+ yrs</td>
                <td>18/08/2021</td>
                <td>In Process</td>
              </tr>
            </tbody>
          </Table>
        </div>
        {this.state.hideform ? this.hideform() : <div></div>}
      </div>
    );
  }
}

export default MyPosition;