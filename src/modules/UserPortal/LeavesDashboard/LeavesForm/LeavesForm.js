import React, { Component } from 'react';
import styles from "../LeavesDashboard.module.css";
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import * as services from "../../../../services/services";
class LeavesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //value: "leaves",
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

  //=====================Start Of Validation==========================================
  handleValidations() {
    let leavesType = this.state.leavesType;
    let leaveFrom = this.state.leaveFrom;
    let leaveTo = this.state.leaveTo;
    let reason = this.state.reason;

    let errors = {};
    let formIsValid = true;

   // ===================leavesType=====================
    if (!leavesType) {
      formIsValid = false;
      errors["leavesType"] = "Cannot be empty";
    } 
    if (leavesType==='leaves') {
      formIsValid = false;
      errors["leavesType"] = "Cannot be empty";
    } 
    //===================leaveFrom=====================
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
    //===================leaveFrom=====================
    if (!leaveTo) {
      formIsValid = false;
      errors["leaveTo"] = "Cannot be empty";
    } 
    else if (typeof leaveTo !== "undefined") {
      if (
        !leaveTo.match(/^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/g)
      ) {
        formIsValid = false;
        errors["leaveTo"] = "date format MM/DD/YYYY";
      }
    }
    //===================leaveFrom=====================
    if (!reason) {
      formIsValid = false;
      errors["reason"] = "Cannot be empty";
    } else if (typeof reason !== "undefined") {
      if (
        !reason.match(/[a-zA-Z]{5,500}$/g)
      ) {
        formIsValid = false;
        errors["reason"] = "Please Enter minimum 5 word";
      }
    }

    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
//======================================================================================================
  componentDidMount() {
    this.getUsersData();
  }
  async getUsersData() {
    await services.getService("leaves").then((res) => {
      console.log(res.data);
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
  }
  else{
   console.log("error")
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


  hideform = () => {
    return !this.state.hideform ? (
      this.hideform()
    ) : (
      <div className={styles.card}>
        <div className="card-body leaves">
          <div className="form-container">
            <form
              className="row g-3 needs-validation"
              novalidate
              onSubmit={() => this.setState({ hideform: false })}
              ref={(form) => (this.form = form)}
              onReset={this.handleReset}
            >
              <Row>
                <div className="form-group col-12 col-md-6">
                  <select
                    className={styles.select_option}
                    name="leaves"
                    onChange={(e) => {
                      this.setState({ leavesType: e.target.value });
                    }}
                    value={this.state.leavesType}
                    required
                  >
                    <option value="leaves" disabled className="option">
                      Select Leaves Type
                    </option>
                    <option value="Sick Leaves" className="option">
                      Sick Leaves
                    </option>
                    <option value="Personal Leaves" className="option">
                      Personal Leaves
                    </option>
                    <option value="holiday" className="option">
                      Holiday Leaves
                    </option>
                  </select>
                  <div style={{ color: "red" }}>
                    {this.state.errors["leavesType"]}
                  </div>
                </div>
              </Row>
              <Row>
                <div className="form-group col-12 col-md-6">
                  <label for="leaveperiodfrom" className="col-form-label">
                    Leave Period From
                  </label>
                  <input
                    onChange={(e) => {
                      this.setState({ leaveFrom: e.target.value });
                    }}
                    type="text"
                    className="form-control form-input"
                    id="leaveperiodfrom"
                    placeholder="From"
                    required
                  />
                  <div style={{ color: "red" }}>
                    {this.state.errors["leaveFrom"]}
                  </div>
                </div>
                <div className="form-group col-12 col-md-6">
                  <label for="leaveperiodto" className="col-form-label">
                    Leave Period To
                  </label>
                  <input
                    onChange={(e) => {
                      this.setState({ leaveTo: e.target.value });
                    }}
                    type="text"
                    className="form-control form-input"
                    id="leaveperiodto"
                    placeholder="To"
                    required
                  />
                  <div style={{ color: "red" }}>
                    {this.state.errors["leaveTo"]}
                  </div>
                </div>

                <div className="form-group col-12 col-md-6">
                  <label for="Reason" className="col-form-label">
                    Reason
                  </label>
                  <textarea
                    onChange={(e) => {
                      this.setState({ reason: e.target.value });
                    }}
                    type="text"
                    className="form-control form-input"
                    id="reason"
                    placeholder="Reason For Leaves"
                    required
                  />
                  <div style={{ color: "red" }}>
                    {this.state.errors["reason"]}
                  </div>
                </div>
              </Row>
            </form>
          </div>
          <div className="text-center">
            <div className="form-row">
              <div className="col-md-12">
                <button
                  type="submit"
                  value="Submit"
                  className="submit-button"
                  onClick={this.submitHandler}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className={styles.cancel_button}
                  onClick={() =>
                    this.setState({ hideform: !this.state.hideform })
                  }
                  onClickCapture={this.handleManualReset}
                  value="reset"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <Col className="d-flex flex-row-reverse">
          {this.state.hideform ? (
            !this.hideform()
          ) : (
            <button
              className="add-button submit-button"
              onClick={() =>
                this.setState({ hideform: true, dyanamicBtnName: "Submit" })
              }
            >
              APPLY FOR LEAVES
            </button>
          )}
        </Col>

        {this.state.hideform ? (
          this.hideform()
        ) : (
          <div className={styles.table_leaves}>
            <div className="table-responsive">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Leaves Type</th>
                    <th>Applied On</th>
                    <th>Leaves Period</th>
                    <th>Reason</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((data) => (
                    <tr key={data._id}>
                      <td>{data.leavesType}</td>
                      <td>{data.leaveFrom}</td>
                      <td>{data.leaveTo}</td>
                      <td>{data.reason}</td>
                      <td>Approved</td>
                      <td>
                        <button
                          className={styles.buttonDelete}
                          onClick={this.handleModalShow.bind(this, data._id)}
                        >
                          <FaTrash className="svgdelete" />
                        </button>
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
        )}
      </div>
    );
  }
}

export default LeavesForm;