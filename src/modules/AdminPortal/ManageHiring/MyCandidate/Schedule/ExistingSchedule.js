import React, { Component } from "react";
import { Table } from "react-bootstrap";

class ExistingSchedule extends Component {
  render() {
    return (
      <div className="jumbotron jumbo-form">
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead className="table-light">
              <tr>
                <th>Candidate Name</th>
                <th>Position</th>
                <th>Interview Date / Time</th>
                <th>Interviewer</th>
                <th>Interview Rounds</th>
                <th>
                  <button className="submit-button hiringtask">Edit</button>
                </th>
                <th>
                  <button className="submit-button viewhiringtask">
                    Send Reminder
                  </button>
                </th>
                <th>
                  <button className="submit-button initiatemanagetask">
                    Cancle
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gaurav Asawa</td>
                <td>Ui Designer</td>
                <td>15 Jul Mon, 10:00 AM</td>
                <td>Sumit & Ganesh</td>
                <td>5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default ExistingSchedule;
