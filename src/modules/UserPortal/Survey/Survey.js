import React from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import './survey.css';
import '../../../shared/CSS/FormStyles.css';
import Button from "./Chart Select/SelectChart";
//import  {useState} from "react";

const Survey = () => {
    const [status, setStatus] = React.useState(true)
    const [status1, setStatus1] = React.useState(false)
    const [status2, setStatus2] = React.useState(false)

    return (
      <div className="App">
        <div className="jumbotron jumbo-form">
          <h5 className="page-heading">Survey</h5>
          <hr className="hr-line" />
          <div className="form-container">
            {status ? (
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Survey Title</th>
                      <th>Initiated By</th>
                      <th>Priority</th>
                      <th>Status</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Covid 19 Internal</td>
                      <td>abcd</td>
                      <td>High</td>
                      <td>Pending</td>
                      <td>
                        {" "}
                        <div align="right" className="ColumnButtons">
                          <input
                            type="submit"
                            value="View Result"
                            className="submit-btn"
                            onClick={() => setStatus(false) & setStatus2(true)}
                          />
                          <input
                            type="submit"
                            value="Complete"
                            className="submit-btn"
                            onClick={() => setStatus(false) & setStatus1(true)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            ) : null}

            {status1 ? (
              <div>
                <div className="form-container">
                  <form>
                    <Row>
                      <div id="LabelArea" className="form-group ">
                        <label
                          id="FirstLabelId"
                          for="inputdegree"
                          className="col-form-label"
                        >
                          Survey Title{" "}
                        </label>
                        <div className="SecondLabel">
                          {" "}
                          <label
                            id="SecondLabelId"
                            for="inputdegree"
                            className="col-form-label"
                          >
                            {" "}
                            Covid 19 Internal Name
                          </label>
                        </div>{" "}
                      </div>

                      <div id="LabelArea" className="form-group ">
                        <label
                          id="FirstLabelId"
                          for="inputdegree"
                          className="col-form-label"
                        >
                          Survey Status{" "}
                        </label>
                        <div className="SecondLabel">
                          {" "}
                          <label
                            id="SecondLabelId"
                            for="inputdegree"
                            className="col-form-label"
                          >
                            {" "}
                            covid 20- Covid 19 Internal
                          </label>
                        </div>{" "}
                      </div>

                      <div id="LabelArea" className="form-group ">
                        <label
                          id="FirstLabelId"
                          for="inputdegree"
                          className="col-form-label"
                        >
                          Survey Priority{" "}
                        </label>
                        <div className="SecondLabel2">
                          {" "}
                          <label
                            id="SecondLabelId"
                            for="inputdegree"
                            className="col-form-label"
                          >
                            high ,Covid 19 Internal
                          </label>
                        </div>{" "}
                      </div>
                    </Row>

                    <Row>
                      <div id="LabelArea" className="form-group ">
                        <label
                          id="FirstLabelId"
                          for="inputdegree"
                          className="col-form-label"
                        >
                          Initiated By{" "}
                        </label>
                        <div className="SecondLabel">
                          {" "}
                          <label
                            id="SecondLabelId"
                            for="inputdegree"
                            className="col-form-label"
                          >
                            Covid 19 Internal
                          </label>
                        </div>{" "}
                      </div>

                      <div id="LabelArea" className="form-group ">
                        <label
                          id="FirstLabelId"
                          for="inputdegree"
                          className="col-form-label"
                        >
                          Initiated On{" "}
                        </label>
                        <div className="SecondLabel">
                          {" "}
                          <label
                            id="SecondLabelId"
                            for="inputdegree"
                            className="col-form-label"
                          >
                            Covid 19 Internal
                          </label>
                        </div>{" "}
                      </div>
                    </Row>
                  </form>
                </div>

                <hr className="hr-line-2" />

                <div align="right">
                  <input
                    type="submit"
                    value="submit Survey"
                    className="submit-button"
                  />
                  <input type="submit" value="Save" className="submit-button" />
                  <input
                    type="submit"
                    value="Reset"
                    className="submit-button"
                  />
                </div>

                <div className="card">
                  <h5 className="page-heading1">Section Name</h5>
                  <hr className="hr-line-2" />

                  <div className="card-body">
                    <div className="form-container">
                      <form>
                        <Row>
                          <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">
                              1 Question Name/Title
                            </label>
                            <input
                              type="text"
                              className="form-control form-input"
                              id="inputdegree"
                              placeholder="1 Question Name/Title"
                              required
                            />
                          </div>
                        </Row>
                        <Row>
                          <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">
                              2 Question Name/Title
                            </label>
                            <input
                              type="text"
                              className="form-control form-input"
                              id="inputdegree"
                              placeholder="2 Question Name/Title"
                              required
                            />
                          </div>
                        </Row>
                        <Row>
                          <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">
                              3 Question Name/Title
                            </label>
                            <input
                              type="text"
                              className="form-control form-input"
                              id="inputdegree"
                              placeholder="3 Question Name/Title"
                              required
                            />
                          </div>
                        </Row>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {status2 ? (
              <div className="text-center center">
                <div className="CardArea">
                  <div className="card survey">
                    <h5 className="page-heading1">Section Wise Analysis</h5>
                    <hr className="hr-line-2" />
                    <div className="card-body survey">
                      <Button />
                    </div>
                  </div>

                  <div className="card survey">
                    <h5 className="page-heading1">Complete Analysis</h5>
                    <hr className="hr-line-2" />
                    <div className="card-body survey">
                      <Button />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
}
export default Survey;
