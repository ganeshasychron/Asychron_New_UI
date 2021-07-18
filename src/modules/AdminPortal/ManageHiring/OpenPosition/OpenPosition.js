import React, { Component } from 'react';
import { Table } from "react-bootstrap";

class OpenPosition extends Component{
    render(){
        return (
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
                    <button className="submit-button hiringtask">
                      Clarify
                    </button>
                  </th>
                  <th>
                    <button className="submit-button viewhiringtask">
                      View
                    </button>
                  </th>
                  <th>
                    <button className="submit-button initiatemanagetask">
                      Initiate
                    </button>
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
        );
    }
}

export default OpenPosition;