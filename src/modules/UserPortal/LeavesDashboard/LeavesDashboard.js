import React, { Component } from "react";
import * as services from "../../../services/services";

import "./LeavesDashboard.css";
import "../../../shared/CSS/blueTheme.css";

import Moment from 'react-moment';
import { Col, Row, Button, Table } from "react-bootstrap";
import PaidLeaves from "../../../assets/images/parking.png";
import VaccationLeaves from "../../../assets/images/beach.png";
import UnpaidLeaves from "../../../assets/images/user (1).png";
import CompLeaves from "../../../assets/images/file.png";
import check1 from "../../../../src/assets/images/check (1).png";
import check2 from "../../../../src/assets/images/check (1)@2x.png";
import check3 from "../../../../src/assets/images/check (1)@3x.png";
import trash1 from "../../../../src/assets/images/trash.png";
import trash2 from "../../../../src/assets/images/trash@2x.png";
import trash3 from "../../../../src/assets/images/trash@3x.png";
import check11 from "../../../../src/assets/images/check (2).png";
import check12 from "../../../../src/assets/images/check (2)@2x.png";
import check13 from "../../../../src/assets/images/check (2)@3x.png";
import Modal from "react-bootstrap/Modal";
class Leaves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hideform: false,
      showHide: "",
      leavesType: "leaves",
      leaveFrom: "",
      leaveTo: "",
      reason: "",
      data: [],
      errors: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleValidations() {
    let leavesType = this.state.leavesType;
    let leaveFrom = this.state.leaveFrom;
    let leaveTo = this.state.leaveTo;
    let reason = this.state.reason;

    let errors = {};
    let formIsValid = true;

    if (!leavesType) {
      formIsValid = false;
      errors["leavesType"] = "Cannot be empty";
    }
    if (leavesType === "leaves") {
      formIsValid = false;
      errors["leavesType"] = "Cannot be empty";
    }

    if (!leaveFrom) {
      formIsValid = false;
      errors["leaveFrom"] = "Cannot be empty";
    } else if (typeof leaveFrom !== "undefined") {
      if (
        !leaveFrom.match(
          /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/g
        )
      ) {
        formIsValid = false;
        errors["leaveFrom"] = "date format MM/DD/YYYY";
      }
    }

    if (!leaveTo) {
      formIsValid = false;
      errors["leaveTo"] = "Cannot be empty";
    } else if (typeof leaveTo !== "undefined") {
      if (
        !leaveTo.match(/^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/g)
      ) {
        formIsValid = false;
        errors["leaveTo"] = "date format MM/DD/YYYY";
      }
    }

    if (!reason) {
      formIsValid = false;
      errors["reason"] = "Cannot be empty";
    } else if (typeof reason !== "undefined") {
      if (!reason.match(/[a-zA-Z]{5,500}$/g)) {
        formIsValid = false;
        errors["reason"] = "Please Enter minimum 5 word";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }

  componentDidMount() {
    this.getUsersData();
  }
  async getUsersData() {
    await services.getService("leaves").then((res) => {
      this.setState({ data: res.data.Leaves });
    });
  }

  submitHandler = async (e) => {
    console.log(this.state.data);
    e.preventDefault();
    const data = {
      leavesType: this.state.leavesType,
      leaveFrom: this.state.leaveFrom,
      leaveTo: this.state.leaveTo,
      reason: this.state.reason,
    };
    if (this.handleValidations()) {
      services.postService("leaves", data).then((res) => {
        console.log(res.data);

        this.getUsersData();
        this.setState({ hideform: !this.state.hideform });
      });
    } else {
      console.log("error");
    }
  };

  handledeleteData = async () => {
    services.deleteService("leaves", this.state.editId).then((res) => {
      console.log(res.data);
      const newData = this.state.data.filter(
        (obj) => obj._id !== this.state.editId
      );
      this.setState({ data: newData, showHide: false, editId: "" });
    });
  };

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.leavesType);
    console.log("Value:-" + this.state.leavesType);
    event.preventDefault();
  }

  handleReset = (form) => {
    this.setState({
      leavesType: "leaves",
      leaveFrom: "",
      leaveTo: "",
      reason: "",
      errors: "",
    });
  };

  handleManualReset = (event) => {
    event.preventDefault();
    this.form.reset();
  };

  handleModalShow = (id) => {
    this.setState({ showHide: !false, editId: id });
  };

  handleModalHide = () => {
    this.setState({ showHide: false, editId: "" });
  };

  handleChange = (e) => {
    this.setState({
      leavesType: e.target.value,
    });
  };
  render() {
    return (
      <div className="jumbotron asy-main-jumbotron">
        <div className="row asy-main-row">
          <Col>
            <h5 className="asy-main-page-heading"> Leaves Balance </h5>
          </Col>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="card asy-card-primary-design">
              <div className="card-body">
                <Col>
                  <p className="asy-card-page-heading">Book Time Off</p>
                </Col>
                <form>
                  <Row>
                    <div className="form-group col-12 col-md-12">
                      <label for="inputProjectName" className="col-form-label">
                        Leaves Type
                      </label>
                      <select
                        className="form-control form-input"
                        name="activity"
                      >
                        <option value="" disabled selected className="activity">
                          Select Activities
                        </option>
                        <option value="Development" className="activity">
                          Development
                        </option>
                        <option value="Testing" className="activity">
                          Testing
                        </option>
                        <option value="Training" className="activity">
                          Training
                        </option>
                      </select>
                    </div>
                  </Row>
                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="leaveperiodfrom" className="col-form-label">
                        Leave Period From
                      </label>
                      <input
                        type="text"
                        className="form-control form-input"
                        id="leaveperiodfrom"
                        placeholder="From"
                        required
                      />
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="leaveperiodto" className="col-form-label">
                        Leave Period To
                      </label>
                      <input
                        type="text"
                        className="form-control form-input"
                        id="leaveperiodto"
                        placeholder="To"
                        required
                      />
                    </div>
                  </Row>
                  <Row>
                    <div className="form-group col-12 col-md-12">
                      <label for="Reason" className="col-form-label">
                        Reason
                      </label>
                      <textarea
                        type="text"
                        className="form-control form-input"
                        id="reason"
                        placeholder="Reason For Leaves"
                        required
                      />
                    </div>
                  </Row>
                  <div className="asy-button-class text-center">
                    <Button className="asy-primary-submit-button">
                      <h6 className="text-center asy-button-heading">
                        Book Time Off
                      </h6>
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*==================== Card UI =======================*/}
          <div className="col-xl-6 col-lg-6">
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <div className="card rounded-img asy-leaves-page-card">
                  <div className="asy-circle-text leaves-card-color">
                    <div class=" asy-circle rounded-circle text-center">
                      <img
                        src={PaidLeaves}
                        className="column img-rounded text-center"
                        alt="paid leaves"
                      />
                    </div>
                    <h5 className=" column asy-leaves-card-heading ">
                      Paid Leaves
                    </h5>
                  </div>
                  <div className="card-body text-center">
                    <div className=" asy-leaves-card-text">
                      <h5 className="asy-card-text-inline asy-first-text">
                        12
                      </h5>
                      <h5 className="asy-card-text-inline asy-second-text">
                        /
                      </h5>
                      <h5 className="asy-card-text-inline asy-third-text">
                        12
                      </h5>
                      <h6 className="asy-card-secondary-text">
                        Currently Available
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-12 col-md-6">
                <div className="card rounded-img asy-leaves-page-card">
                  <div className="asy-circle-text leaves-card-color">
                    <div class=" asy-circle rounded-circle text-center">
                      <img
                        src={VaccationLeaves}
                        className="column img-rounded text-center"
                        alt="paid leaves"
                      />
                    </div>
                    <h5 className=" column asy-leaves-card-heading ">
                      Vacation Leaves
                    </h5>
                  </div>
                  <div className="card-body text-center">
                    <div className=" asy-leaves-card-text">
                      <h5 className="asy-card-text-inline asy-first-text">
                        02
                      </h5>
                      <h5 className="asy-card-text-inline asy-second-text">
                        /
                      </h5>
                      <h5 className="asy-card-text-inline asy-third-text">
                        06
                      </h5>
                      <h6 className="asy-card-secondary-text">
                        Currently Available
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-12 col-md-6">
                <div className="card rounded-img asy-leaves-page-card">
                  <div className="asy-circle-text leaves-card-color">
                    <div class=" asy-circle rounded-circle text-center">
                      <img
                        src={UnpaidLeaves}
                        className="column img-rounded text-center"
                        alt="paid leaves"
                      />
                    </div>
                    <h5 className=" column asy-leaves-card-heading ">
                      UnPaid Leaves
                    </h5>
                  </div>
                  <div className="card-body text-center">
                    <div className=" asy-leaves-card-text">
                      <h5 className="asy-card-text-inline asy-first-text">
                        02
                      </h5>
                      <h5 className="asy-card-text-inline asy-second-text">
                        /
                      </h5>
                      <h5 className="asy-card-text-inline asy-third-text">
                        15
                      </h5>
                      <h6 className="asy-card-secondary-text">
                        Currently Available
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group col-12 col-md-6">
                <div className="card rounded-img asy-leaves-page-card">
                  <div className="asy-circle-text leaves-card-color">
                    <div class=" asy-circle rounded-circle text-center">
                      <img
                        src={CompLeaves}
                        className="column img-rounded text-center"
                        alt="paid leaves"
                      />
                    </div>
                    <h5 className=" column asy-leaves-card-heading ">
                      Comp-off Leaves
                    </h5>
                  </div>
                  <div className="card-body text-center">
                    <div className=" asy-leaves-card-text">
                      <h5 className="asy-card-text-inline asy-first-text">
                        04
                      </h5>
                      <h5 className="asy-card-text-inline asy-second-text">
                        /
                      </h5>
                      <h5 className="asy-card-text-inline asy-third-text">
                        05
                      </h5>
                      <h6 className="asy-card-secondary-text">
                        Currently Available
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*==================== Card UI =======================*/}
        </div>
        <div>
          <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
            <Table className="asy-Table">
              <thead>
                <tr className="asy-TableHeading">
                  <th className="asy-th">Leaves Type</th>
                  <th className="asy-th">Applied On</th>
                  <th className="asy-th">Leaves Period</th>
                  <th className="asy-th">Reason</th>
                  <th className="asy-th">Status</th>
                  <th className="asy-th">Action</th>
                </tr>
              </thead>

              <tbody>
                {this.state.data.map((data) => (
                  <tr className="asy-TableData" key={data._id}>
                    <td>{data.leavesType}</td>
                    <td>
                      <Moment format="D MMM YYYY">{data.leaveFrom}</Moment>
                    </td>
                    <td>
                      <Moment format="D MMM YYYY">{data.leaveTo}</Moment>
                    </td>
                    <td>{data.reason}</td>
                    <td>
                      {!data ? (
                        <div>
                          <img
                            src={check11}
                            srcset={(check12, check13)}
                            className="asy-Check"
                            alt="fa-check-button"
                          />
                          <label>Approved</label>
                        </div>
                      ) : (
                        <div>
                          <img
                            src={check1}
                            srcset={(check2, check3)}
                            className="asy-Check"
                            alt="fa-check-button"
                          />
                          <label>Approved</label>
                        </div>
                      )}
                    </td>
                    <td>
                      <Button
                        variant="none"
                        onClick={this.handleModalShow.bind(this, data._id)}
                      >
                        <img
                          src={trash1}
                          srcset={(trash2, trash3)}
                          className="asy-Trash"
                          alt="fa-trash-button"
                        />
                      </Button>
                      <Modal show={this.state.showHide}>
                        <Modal.Body>
                          <h6>Are you Sure. Delete This Data? </h6>
                        </Modal.Body>
                        <Modal.Footer>
                          <div className="row modal-education">
                            <div className="col modal-education">
                              <Button
                                className="submit-button"
                                onClick={this.handledeleteData}
                              >
                                Delete
                              </Button>
                            </div>
                            <div className="col modal-education">
                              <Button
                                className="danger-danger submit-button"
                                onClick={this.handleModalHide}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </Modal.Footer>
                      </Modal>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}
export default Leaves;
