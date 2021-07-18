import React from 'react';
import { Table, Row, Nav } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from './AdminPerformance.module.css';
class AdminPerformance extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      indicators: true,
      Goals: false,
      Reviews: false,
      ReviewsAdd: false,
      CodingStandardAdd: false,
    };
  }

  render() {
    return (
      <div className="jumbotron jumbo-form">
        <h5 className="page-heading">Admin Performance</h5>
        <hr className="hr-line" />

        <nav className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <a className={`${styles['linkbutton']} nav-link active rounded-0 col-4`}
            id="pills-indicators-tab" data-bs-toggle="pill" data-bs-target="#pills-indicators" role="tab" aria-controls="pills-indicators" aria-selected="true"
          >indicators</a>
          <a className={`${styles['linkbutton']} nav-link rounded-0  col-4`}
            id="pills-Goals-tab" data-bs-toggle="pill" data-bs-target="#pills-Goals" role="tab" 
            aria-controls="pills-Goals" aria-selected="false"> Goals</a>
          <a className={`${styles['linkbutton']} nav-link rounded-0  col-4`}
            id="pills-Reviews-tab" data-bs-toggle="pill" data-bs-target="#pills-Reviews" role="tab" aria-controls="pills-Reviews" aria-selected="false"> Reviews</a>
        </nav>


        <hr className="hr-line" />

        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-indicators" role="tabpanel" aria-labelledby="pills-indicators-tab"> <Nav variant="tabs" defaultActiveKey="#Esacalation">
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#Esacalation" > Esacalation </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#Dues" > Dues </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#Complience"  >  Complience </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#CodingStandard"  >  Coding Standard </Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
          <div className="tab-pane fade" id="pills-Goals" role="tabpanel" aria-labelledby="pills-Goals-tab"> <Nav variant="tabs" >
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#GoalsforApproval">Goals for Approval</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#GoalsDues">Goals Dues</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#ApprovedGoals">Approved Goals</Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
          <div className="tab-pane fade" id="pills-Reviews" role="tabpanel" aria-labelledby="pills-Reviews-tab"> <Nav variant="tabs" >
            <Nav.Item>
              <Nav.Link data-bs-toggle="tab" aria-expanded="true" className={styles.link}
                href="#Reviews">Review</Nav.Link>
            </Nav.Item>
          </Nav>
          </div>
        </div>


        <div className="tab-content">


          {/* indicators Options start*/}
          <div className="tab-pane  active " id="Esacalation">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>
                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputempcode" className="col-form-label">Emp Code</label>
                        <input type="text" className="form-control form-input" id="inputempcode" placeholder="Emp Code" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputtype" className="col-form-label">Esacalation Type</label>
                        <input type="text" className="form-control form-input" id="inputtype" placeholder="Esacalation Type" required />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputimpact" className="col-form-label">Impact</label>
                        <input type="text" className="form-control form-input" id="inputimpact" placeholder="Impact" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputservirity" className="col-form-label">Servirity</label>
                        <input type="text" className="form-control form-input" id="inputservirity" placeholder="Servirity" />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputdescription" className="col-form-label">Description</label>
                        <textarea type="textarea" className="form-control form-input" id="inputdescription" placeholder="Description" required />
                      </div>
                    </Row>

                    <div className="text-center">
                      <button type="button" className="submit-button"  >  submit </button>
                      <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                      <button id={styles.btnCancel} type="button" className="submit-button" value="reset"  > Cancel  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="tab-pane " id="Dues">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>
                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputempcode" className="col-form-label">Emp Code</label>
                        <input type="text" className="form-control form-input" id="inputempcode" placeholder="Emp Code" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputTaskName" className="col-form-label">Task Name</label>
                        <input type="text" className="form-control form-input" id="inputTaskName" placeholder="Task Name" required />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputimpact" className="col-form-label">Impact</label>
                        <input type="text" className="form-control form-input" id="inputimpact" placeholder="Impact" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputservirity" className="col-form-label">Servirity</label>
                        <input type="text" className="form-control form-input" id="inputservirity" placeholder="Servirity" />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputDueBy" className="col-form-label">Due By(day)</label>
                        <input type="text" className="form-control form-input" id="inputDueBy" placeholder="Due By(day)" />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputdescription" className="col-form-label">Description</label>
                        <textarea type="textarea" className="form-control form-input" id="inputdescription" placeholder="Description" required />
                      </div>
                    </Row>

                    <div className="text-center">
                      <button type="button" className="submit-button"  >  submit </button>
                      <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                      <button id={styles.btnCancel} type="button" className="submit-button" value="reset"  > Cancel  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane " id="Complience">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>
                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputempcode" className="col-form-label">Emp Code</label>
                        <input type="text" className="form-control form-input" id="inputempcode" placeholder="Emp Code" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputTaskName" className="col-form-label">Task Name</label>
                        <input type="text" className="form-control form-input" id="inputTaskName" placeholder="Task Name" required />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputimpact" className="col-form-label">Impact</label>
                        <input type="text" className="form-control form-input" id="inputimpact" placeholder="Impact" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputservirity" className="col-form-label">Servirity</label>
                        <input type="text" className="form-control form-input" id="inputservirity" placeholder="Servirity" />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputDueBy" className="col-form-label">Due By(day)</label>
                        <input type="text" className="form-control form-input" id="inputDueBy" placeholder="Due By(day)" />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputdescription" className="col-form-label">Description</label>
                        <textarea type="textarea" className="form-control form-input" id="inputdescription" placeholder="Description" required />
                      </div>
                    </Row>

                    <div className="text-center">
                      <button type="button" className="submit-button"  >  submit </button>
                      <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                      <button id={styles.btnCancel} type="button" className="submit-button" value="reset"  > Cancel  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="tab-pane " id="CodingStandard">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>

                    <div align="Right">
                      <button type="button" className="submit-button" onClick={() => this.setState({ CodingStandardAdd: true })} > Add </button>
                    </div>

                    {this.state.CodingStandardAdd ? (
                      <div className="card">
                        <div className="card-body">
                          <div className="form-container">
                            <form>
                              <Row>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputTechnology" className="col-form-label">Technology</label>
                                  <input type="text" className="form-control form-input" id="inputTechnology" placeholder="Technology" required />
                                </div>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputBrowseDocument" className="col-form-label">Browse Document</label>
                                  <input type="file" className="form-control form-input" id="inputBrowseDocument" placeholder="Browse Document" required />
                                </div>
                              </Row>

                              <div className="text-center">
                                <button type="button" className="submit-button"  >  submit </button>
                                <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                                <button id={styles.btnCancel} type="button" className="submit-button" value="reset" onClick={() => this.setState({ CodingStandardAdd: false })} > Cancel  </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                    ) : null}

                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Technology</th>
                            <th>Uploaded On</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>abcd</td>
                            <td>12/12/1221 </td>
                            <td>
                              <button id={styles.edit} className="button" update 	> 	<FaEdit className={styles.svgedit} />
                              </button>
                              <button id={styles.delete} className="button"	> 	<FaTrash className={styles.svgdelete} />
                              </button>

                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* indicators  Options Closed */}


          {/* Goals Options Start*/}
          <div className="tab-pane" id="GoalsforApproval">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>
                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Emp Name</th>
                            <th>Requested On</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> rahul </td>
                            <td>abcd</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>

                    <div className="card">
                      <div className="card-body">

                        <div className="card">
                          <div className="card-body">
                            <div className="form-container">
                              <form>
                                <div id={styles.viewField} className="form-group ">
                                  <label id={styles.label} for="inputLearnTechnology" className="col-form-label col-md-2"> Learn Technology</label>
                                  <input type="text" className="form-control form-input col-md-4 " id="inputLearnTechnology" placeholder="Learn Technology" required />
                                </div>
                                <div id={styles.viewField} className="form-group  ">
                                  <label id={styles.label} for="inputCodeQuality" className="col-form-label col-md-2">Code Quality</label>
                                  <input type="text" className="form-control form-input  col-md-4" id="inputCodeQuality" placeholder="Code Quality" required />
                                </div>
                                <div id={styles.viewField} className="form-group ">
                                  <label id={styles.label} for="inputCertification" className="col-form-label col-md-2 ">Certifications</label>
                                  <input type="text" className="form-control form-input col-md-4" id="inputCertification" placeholder="Certifications" required />
                                </div>
                                <div id={styles.viewField} className="form-group ">
                                  <label id={styles.label} for="inputAttendance" className="col-form-label col-md-2">Attendance</label>
                                  <input type="text" className="form-control form-input col-md-4" id="inputAttendance" placeholder="Attendance" />
                                </div>
                                <div id={styles.viewField} className="form-group ">
                                  <label id={styles.label} for="inputInnovation" className="col-form-label col-md-2"> Innovation </label>
                                  <input type="text" className="form-control form-input col-md-4" id="inputInnovation" placeholder="Innovation" />
                                </div>
                                <div id={styles.viewField} className="form-group  ">
                                  <label id={styles.label} for="inputCultural" className="col-form-label col-md-2"> Cultural </label>
                                  <input type="text" className="form-control form-input col-md-4" id="inputCultural" placeholder="Cultural" required />
                                </div>
                                <div id={styles.viewField} className="form-group ">
                                  <label id={styles.label} for="inputCommunication" className="col-form-label col-md-2"> Communication </label>
                                  <input type="text" className="form-control form-input col-md-4" id="inputCommunication" placeholder="Communication" />
                                </div>
                                <div id={styles.viewField} className="form-group  ">
                                  <label id={styles.label} for="inputTraining" className="col-form-label col-md-2"> Training </label>
                                  <input type="text" className="form-control form-input col-md-4" id="inputTraining" placeholder="Training" required />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>

                        <label id={styles.label} className="col-form-label "> Manager Section :-</label>

                        <div className="card">
                          <div className="card-body">
                            <div className="form-container">
                              <form>
                                <div align="left">
                                  <button type="button" className="submit-button"  > Add New Goals </button>
                                </div>

                                <div id={styles.DescField} className="form-group ">
                                  <label id={styles.label} for="inputdescription" className="col-form-label  ">Description</label>
                                  <textarea type="textarea" className="form-control form-input col-md-6" id="inputdescription" placeholder="Description" required />
                                </div>

                                <div className="text-center">
                                  <button type="button" className="submit-button"  >  submit </button>
                                  <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                                  <button id={styles.btnCancel} type="button" className="submit-button" value="reset" > Cancel  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="tab-pane " id="GoalsDues">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>
                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputempcode" className="col-form-label">Emp Code</label>
                        <input type="text" className="form-control form-input" id="inputempcode" placeholder="Emp Code" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputTaskName" className="col-form-label">Task Name</label>
                        <input type="text" className="form-control form-input" id="inputTaskName" placeholder="Task Name" required />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputimpact" className="col-form-label">Impact</label>
                        <input type="text" className="form-control form-input" id="inputimpact" placeholder="Impact" required />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputservirity" className="col-form-label">Servirity</label>
                        <input type="text" className="form-control form-input" id="inputservirity" placeholder="Servirity" />
                      </div>
                    </Row>

                    <Row>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputDueBy" className="col-form-label">Due By(day)</label>
                        <input type="text" className="form-control form-input" id="inputDueBy" placeholder="Due By(day)" />
                      </div>
                      <div id={styles.field} className="form-group col-12 col-md-6">
                        <label id={styles.label} for="inputdescription" className="col-form-label">Description</label>
                        <textarea type="textarea" className="form-control form-input" id="inputdescription" placeholder="Description" required />
                      </div>
                    </Row>

                    <div className="text-center">
                      <button type="button" className="submit-button"  >  submit </button>
                      <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                      <button id={styles.btnCancel} type="button" className="submit-button" value="reset"  > Cancel  </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>


          <div className="tab-pane " id="ApprovedGoals">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>
                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Emp Name</th>
                            <th>Requested On</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> rahul </td>
                            <td>abcd</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Goals  Options Closed */}


          {/* Review  Options Start */}
          <div className="tab-pane " id="Reviews">
            <div className="card">
              <div className="card-body">
                <div className="form-container">
                  <form>

                    <div align="Right">
                      <button type="button" className="submit-button" onClick={() => this.setState({ ReviewsAdd: true })}  >Reviews Add </button>
                    </div>

                    {this.state.ReviewsAdd ? (
                      <div className="card">
                        <div className="card-body">
                          <div className="form-container">
                            <form>
                              <Row>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputEmpCode" className="col-form-label">Emp Code</label>
                                  <input type="text" className="form-control form-input" id="inputEmpCode" placeholder="Emp Code" required />
                                </div>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputEmpName" className="col-form-label">Emp Name</label>
                                  <input type="text" className="form-control form-input" id="inputEmpName" placeholder="Emp Name" required />
                                </div>
                              </Row>
                              <Row>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputindicatorBased" className="col-form-label">indicator Based</label>
                                  <input type="text" className="form-control form-input" id="inputindicatorBased" placeholder="indicator Based" required />
                                </div>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputGoalBased" className="col-form-label">Goal Based</label>
                                  <input type="text" className="form-control form-input" id="inputGoalBased" placeholder="Goal Based" required />
                                </div>
                              </Row>
                              <Row>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputOverallRating" className="col-form-label">Overall Rating</label>
                                  <input type="text" className="form-control form-input" id="inputOverallRating" placeholder="Overall Rating" required />
                                </div>
                                <div id={styles.field} className="form-group col-12 col-md-6">
                                  <label id={styles.label} for="inputReviewComments" className="col-form-label">Review Comments</label>
                                  <textarea type="textarea" className="form-control form-input" id="inputReviewComments" placeholder="Review Comments" required />
                                </div>
                              </Row>

                              <div className="text-center">
                                <button type="button" className="submit-button"  >  submit </button>
                                <button id={styles.btnReset} type="button" className="submit-button" > Reset </button>
                                <button id={styles.btnCancel} type="button" className="submit-button" value="reset" onClick={() => this.setState({ ReviewsAdd: false })} > Cancel  </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                    ) : null}

                    <div className="table-responsive">
                      <Table striped bordered hover>
                        <thead>
                          <tr>
                            <th>Emp Name</th>
                            <th>Emp Code</th>
                            <th>Review Due Date</th>
                            <th>Review Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td> abcd </td>
                            <td>1234</td>
                            <td>12/12/1212</td>
                            <td>abcd</td>
                            <td>
                              <button id={styles.edit} className="button" update 	> 	<FaEdit className={styles.svgedit} />
                              </button>
                              <button id={styles.delete} className="button"	> 	<FaTrash className={styles.svgdelete} />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* Review Buttons Options Closed*/}
          
        </div>
      </div>
    );
  }
}
export default AdminPerformance;
