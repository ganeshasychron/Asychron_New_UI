import React, { Component } from "react";
import { Table } from "react-bootstrap";

class MyOffer extends Component {
 
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
                    <th>
                      <button className="submit-button hiringtask">
                        Print Offer
                      </button>
                    </th>
                    <th>
                      <button className="submit-button viewhiringtask">
                        Send Offer
                      </button>
                    </th>
                    <th>
                      <button className="submit-button initiatemanagetask">
                        Pre-Joining
                      </button>
                    </th>
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

export default MyOffer;