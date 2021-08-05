import React, { Component } from "react";
import { Table, Row, Col, Modal, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import "./Education.css";
import "../../../shared/CSS/blueTheme.css";
import * as services from "../../../services/services";
class education extends Component {
  state = {
    hideform: false,
    editId: "",
    dyanamicBtnName: "Submit",
    update: false,
    showHide: "",
    id: "",
    degree: "",
    specialization: "",
    college: "",
    board: "",
    datePassing: "",
    percentage: "",
    userName: "admin123",
    data: [],
    errors: {},
  };
  //=====================Start Of Validation==========================================
  handleValidations() {
    let degree = this.state.degree;
    let specialization = this.state.specialization;
    let college = this.state.college;
    let board = this.state.board;
    let datePassing = this.state.datePassing;
    let percentage = this.state.percentage;

    let errors = {};
    let formIsValid = true;

    //===================Degree=====================
    if (!degree) {
      formIsValid = false;
      errors["degree"] = "Cannot be empty";
    } else if (typeof degree !== "undefined") {
      if (
        !degree.match(/(([a-zA-Z]{1,30})+([a-zA-Z.]?)+([a-zA-Z.]?){2,30})/gi)
      ) {
        formIsValid = false;
        errors["degree"] = "Only letters & also check for any Space";
      }
    }

    //===================Specialization=====================
    if (!specialization) {
      formIsValid = false;
      errors["specialization"] = "Cannot be empty";
    } else if (typeof specialization !== "undefined") {
      if (!specialization.match(/[a-zA-Z.]+$/i)) {
        formIsValid = false;
        errors["specialization"] = "Only letters & also check for any Space";
      }
    }
    //===================College=====================
    if (!college) {
      formIsValid = false;
      errors["college"] = "Cannot be empty";
    } else if (typeof college !== "undefined") {
      if (!college.match(/(([a-zA-Z]{1,30})+([a-zA-Z.,]?){3,30})/gi)) {
        formIsValid = false;
        errors["college"] = "Only letters & also check for any Space";
      }
    }

    //===================Board=====================
    if (!board) {
      formIsValid = false;
      errors["board"] = "Cannot be empty";
    } else if (typeof board !== "undefined") {
      if (!board.match(/[a-zA-Z]+$/i)) {
        formIsValid = false;
        errors["board"] = "Only letters & also check for any Space";
      }
    }

    //===================PassingDate=====================
    if (!datePassing) {
      formIsValid = false;
      errors["datePassing"] = "Cannot be empty";
    } else if (typeof datePassing !== "undefined") {
      if (
        !datePassing.match(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/gi
        )
      ) {
        formIsValid = false;
        errors["datePassing"] = "date format DD/MM/YYYY";
      }
    }

    //===================Percentage=====================
    if (!percentage) {
      formIsValid = false;
      errors["percentage"] = "Cannot be empty";
    }
    // (/^((100)|(\d{1,2}(\.\d*)?))$/gi))
    else if (typeof percentage !== "undefined") {
      if (!String(percentage).match(/^((100)|(\d{1,2}(\.\d*)?))$/gi)) {
        formIsValid = false;
        errors["percentage"] = "Only Number & also check for any Space";
      }
    }
    //===============================================================
    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  //=====================End Of Validation==========================================

  componentDidMount() {
    this.getUsersData();
  }
  async getUsersData() {
    await services.getService("education").then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data.EducationDetail,
      });
    });
  }

  submitHandler = async (e) => {
    console.log(this.state.data);
    e.preventDefault();

    const data = {
      degree: this.state.degree,
      specialization: this.state.specialization,
      college: this.state.college,
      board: this.state.board,
      datePassing: this.state.datePassing,
      percentage: this.state.percentage,
    };
    if (this.state.editId === "") {
      if (this.handleValidations()) {
        services.postService("education", data).then((res) => {
          console.log(res.data);

          this.getUsersData();
          this.setState({
            hideform: !this.state.hideform,
          });
        });
      }
    } else {
      if (this.handleValidations()) {
        await services
          .patchService("education", this.state.editId, data)
          .then((res) => {
            console.log(res.data);
            this.getUsersData();
            this.setState({
              hideform: !this.state.hideform,
              editId: "",
            });
          });
      }
    }
  };

  handledeleteData = async () => {
    services.deleteService("education", this.state.editId).then((res) => {
      console.log(res.data);
      const newData = this.state.data.filter(
        (obj) => obj._id !== this.state.editId
      );
      this.setState({
        data: newData,
        showHide: false,
        editId: "",
      });
    });
  };

  handleUpdateData = async (id, e) => {
    const newData = this.state.data.filter((obj) => obj._id === id)[0];
    this.setState({
      degree: newData.degree,
      specialization: newData.specialization,
      college: newData.college,
      board: newData.board,
      datePassing: newData.datePassing,
      percentage: newData.percentage,
      editId: newData._id,
      dyanamicBtnName: "Update",
    });
  };

  handleReset = (form) => {
    this.setState({
      degree: "",
      specialization: "",
      college: "",
      board: "",
      datePassing: "",
      percentage: "",
      errors: "",
    });
  };

  handleManualReset = (event) => {
    event.preventDefault();
    this.form.reset();
  };

  handleModalShow = (id) => {
    this.setState({
      showHide: !false,
      editId: id,
    });
  };

  handleModalHide = () => {
    this.setState({
      showHide: false,
      editId: "",
    });
  };

  hideform = () => {
    return !this.state.hideform ? (
      this.hideform()
    ) : (
      <div>
        <div className="jumbotron asy-main-jumbotron">
          <div className="form-container">
            <form
              onSubmit={() =>
                this.setState({
                  hideform: false,
                })
              }
              ref={(form) => (this.form = form)}
              onReset={this.handleReset}
            >
              <div className="card asy-card-primary-design asy-education-primary-card">
                <div className="card-body">
                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">
                        Degree
                      </label>
                      <input
                        onChange={(e) => {
                          this.setState({ degree: e.target.value });
                        }}
                        value={this.state.degree}
                        type="text"
                        className="form-control form-input"
                        id="inputdegree"
                        placeholder="Degree"
                        required
                      />
                      <div style={{ color: "red" }}>
                        {this.state.errors["degree"]}
                      </div>
                    </div>

                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">
                        Specialization
                      </label>
                      <input
                        onChange={(e) => {
                          this.setState({ specialization: e.target.value });
                        }}
                        value={this.state.specialization}
                        type="text"
                        className="form-control form-input"
                        id="inputPassword"
                        placeholder="Specialization"
                        required
                      />
                      <div style={{ color: "red" }}>
                        {this.state.errors["specialization"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">
                        College / School
                      </label>
                      <input
                        onChange={(e) => {
                          this.setState({ college: e.target.value });
                        }}
                        value={this.state.college}
                        type="text"
                        className="form-control form-input"
                        id="inputdegree"
                        placeholder="College/School"
                        required
                      />
                      <div style={{ color: "red" }}>
                        {this.state.errors["college"]}
                      </div>
                    </div>

                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">
                        University / Board
                      </label>
                      <input
                        onChange={(e) => {
                          this.setState({ board: e.target.value });
                        }}
                        value={this.state.board}
                        type="text"
                        className="form-control form-input"
                        id="inputPassword"
                        placeholder="University/Board"
                        required
                      />
                      <div style={{ color: "red" }}>
                        {this.state.errors["board"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">
                        Year Of Passing
                      </label>
                      <input
                        onChange={(e) => {
                          this.setState({ datePassing: e.target.value });
                        }}
                        value={this.state.datePassing}
                        type="text"
                        className="form-control form-input"
                        id="inputdegree"
                        placeholder="Year of Passing(DD/MM/YYYY)"
                        required
                      />
                      <div style={{ color: "red" }}>
                        {this.state.errors["datePassing"]}
                      </div>
                    </div>

                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">
                        Percentage
                      </label>
                      <input
                        onChange={(e) => {
                          this.setState({ percentage: e.target.value });
                        }}
                        value={this.state.percentage}
                        type="text"
                        className="form-control form-input"
                        id="inputPassword"
                        placeholder="percentage"
                        required
                      />
                      <div style={{ color: "red" }}>
                        {this.state.errors["percentage"]}
                      </div>
                    </div>
                  </Row>

                  <div className="text-center">
                    <button
                      onClick={this.submitHandler.bind(this)}
                      type="button"
                      className="asy-secondary-submit-button"
                    >
                      {this.state.dyanamicBtnName}
                    </button>
                    <button
                      type="button"
                      className="asy-secondary-cancle-button"
                      onClick={() =>
                        this.setState({
                          hideform: !this.state.hideform,
                        })
                      }
                      onClickCapture={this.handleManualReset}
                      value="reset"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="jumbotron asy-main-jumbotron">
        <div className="row asy-main-row">
          <Col>
            <h5 className="asy-main-page-heading"> Education </h5>
          </Col>
          <Col className="d-flex flex-row-reverse">
            {this.state.hideform ? (
              !this.hideform()
            ) : (
              <button
                className="add-button-flip submit-button"
                onClick={() =>
                  this.setState({
                    hideform: true,
                    dyanamicBtnName: "Submit",
                  })
                }
              >
                ADD
              </button>
            )}
          </Col>
        </div>
        {this.state.hideform ? (
          this.hideform()
        ) : (
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th> Degree </th>
                  <th> Specialization </th>
                  <th> College / School </th>
                  <th> University / Board </th>
                  <th> Year of Passing </th>
                  <th> Percentage </th>
                  <th> Action </th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((data) => (
                  <tr key={data._id}>
                    <td> {data.degree} </td>
                    <td> {data.specialization} </td>
                    <td> {data.college} </td>
                    <td> {data.board} </td>
                    <td> {data.datePassing} </td>
                    <td> {data.percentage} </td>
                    <td>
                      <button
                        className="button edit-education"
                        update
                        onClick={() =>
                          this.setState({
                            hideform: true,
                          })
                        }
                      >
                        <FaEdit
                          className="svgedit"
                          onClick={this.handleUpdateData.bind(this, data._id)}
                        />
                      </button>
                      <button
                        className="button delete-education"
                        onClick={this.handleModalShow.bind(this, data._id)}
                      >
                        <FaTrash className="svgdelete" />
                      </button>
                      <Modal show={this.state.showHide}>
                        <Modal.Body>
                          <h6> Are you Sure.Delete This Data ? </h6>
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
        )}
      </div>
    );
  }
}

export default education;
