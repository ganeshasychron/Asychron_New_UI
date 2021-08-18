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
      <div className="jumbotron asy-main-jumbotron ">

        <div className="row asy-main-row">
          <Col>
            <h5 className="asy-main-page-heading"> Survey</h5>
          </Col>
        </div>
        <div className="form-container">
          {status ? (
            <form>
              <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
                <Table className="asy-Table">
                  <thead>
                    <tr className="asy-TableHeading">


                      <th className="asy-th">Survey Title</th>
                      <th className="asy-th">Initiated By</th>
                      <th className="asy-th">Priority</th>
                      <th className="asy-th">Status</th>
                      <th className="asy-th columnwidth"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="asy-TableDataRow">
                      <td>Covid 19 Internal</td>
                      <td>abcd</td>
                      <td>High</td>
                      <td>Pending</td>
                      <td className="btn-align">
                        {" "}

                        <button className="asy-primary-submit-button" onClick={() => setStatus(false) & setStatus2(true)}>
                          <h6 className="text-center asy-button-heading">
                            View Result
                          </h6></button>


                        <button className="asy-primary-submit-button width" onClick={() => setStatus(false) & setStatus1(true)}>
                          <h6 className="text-center asy-button-heading">
                            complete
                          </h6></button>


                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </form>
          ) : null}

          {status1 ? (
            <div>
              <div className="form-container">
                <form>
                  <div className="asy-card-primary-design">
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
                    </Row></div>

                </form>
              </div>

              <div align="right">
                <button className="asy-primary-submit-button width my-2" type="submit">
                  <h6 className="text-center asy-button-heading">
                    Submit Survey
                  </h6></button>

                <button className="asy-primary-submit-button width my-2" type="submit">
                  <h6 className="text-center asy-button-heading">
                    Save
                  </h6></button><button className="asy-primary-submit-button width my-2" type="submit">
                  <h6 className="text-center asy-button-heading">
                    Reset
                  </h6></button>


              </div>

              <div className="asy-card-primary-design">
                <div className="row asy-main-row">
                  <Col>
                    <h4 className="asy-main-page-heading mt-4 ml-3"> Section Name</h4>
                  </Col>
                </div>

                <div className="card-body">
                  <div className="form-container">
                    <form>
                      <Row>
                        <div className="form-group col-12 col-md-6">
                          <label for="inputdegree" className="asy-FormLabel">
                            1 Question Name/Title
                          </label>
                          <input
                            type="text"
                            className="form-control asy-InputValues"
                            id="inputdegree"
                            placeholder="1 Question Name/Title"
                            required
                          />
                        </div>
                      </Row>
                      <Row>
                        <div className="form-group col-12 col-md-6">
                          <label for="inputdegree" className="asy-FormLabel">
                            2 Question Name/Title
                          </label>
                          <input
                            type="text"
                            className="form-control asy-InputValues"
                            id="inputdegree"
                            placeholder="2 Question Name/Title"
                            required
                          />
                        </div>
                      </Row>
                      <Row>
                        <div className="form-group col-12 col-md-6">
                          <label for="inputdegree" className="asy-FormLabel">
                            3 Question Name/Title
                          </label>
                          <input
                            type="text"
                            className="form-control asy-InputValues"
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

                <div className="text-center">
                    <div className='CardArea' >
                        <div className='card survey'>
                            <p className="asy-card-page-heading  text-center mt-3 font-weight-bold">Section Wise Analysis</p>
                            <hr className="hr-line-2" />
                            <div className="card-body survey">
                                <Button />
                            </div>
                        </div>

                        <div className='card survey'>
                            <p className="asy-card-page-heading text-center mt-3 font-weight-bold">Complete Analysis</p>
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
