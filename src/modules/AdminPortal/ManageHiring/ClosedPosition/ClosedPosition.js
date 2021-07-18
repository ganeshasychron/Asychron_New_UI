import React, { Component } from "react";
import { Table } from "react-bootstrap";

class ClosedPosition extends Component {

    render() {
        return (
          <div>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead className="table-light">
                  <tr>
                    <th>Candidate Name</th>
                    <th>Position</th>
                    <th>Project</th>
                    <th>Department</th>
                    <th>Experience</th>
                    <th>Offer Amount</th>
                    <th>DOJ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Gaurav Asawa</td>
                    <td>Sr. React Developer</td>
                    <td>Ecommerce</td>
                    <td>Unknown</td>
                    <td>4+ yrs</td>
                    <td>In Process</td>
                    <td>18/08/2021</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        );
    }
}

export default ClosedPosition;