import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "../../../shared/CSS/FormStyles.css";
import "./ManageTask.css";

class ManageTask extends Component {
  render() {
    return (
      <div className="jumbotron jumbo-form">
        <div className="row educations">
          <Col>
            <h5 className="page-heading"> Task </h5>
          </Col>
        </div>
        <hr className="hr-line" />

        <div>
          <form>
            <div className="mb-3">
              <label for="inputTitle" className="form-label  lable-change">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="inputTitle"
                placeholder="Enter Project Title"
                aria-describedby="inputTitle"
              />
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label
                  for="inputProjectName"
                  className="form-label lable-change"
                >
                  Project Name
                </label>
                <select
                  className="form-select formSpace"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value="1">Ecommerce</option>
                  <option value="2">HR-Portal</option>
                  <option value="3">Education</option>
                </select>
              </div>
              <div className="col-md-6">
                <label for="inputModule" className="form-label lable-change">
                  Module
                </label>
                <select
                  className="form-select formSpace"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value="1">Ecommerce</option>
                  <option value="2">HR-Portal</option>
                  <option value="3">Education</option>
                </select>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputAssinee" className="form-label lable-change">
                  Assignee
                </label>
                <input
                  type="text"
                  className="form-control formSpace"
                  id="inputAssinee"
                />
              </div>
              <div className="col-md-6">
                <label for="inputPriority" className="form-label lable-change">
                  Priority
                </label>
                <select
                  className="form-select formSpace"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value="1">Low</option>
                  <option value="2">Modrate</option>
                  <option value="3">High</option>
                </select>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputDueDate" className="form-label lable-change">
                  Due Date
                </label>
                <input
                  type="date"
                  className="form-control formSpace"
                  id="inputDueDate"
                />
              </div>
              <div className="col-md-6">
                <label for="inputStatus" className="form-label lable-change">
                  Status
                </label>
                <input
                  type="text"
                  readonly
                  className="form-control-plaintext todoText"
                  id="todo"
                  value="TODO"
                  disabled
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputFlag" className="form-label lable-change">
                  Flag
                </label>
                <input
                  type="text"
                  className="form-control formSpace"
                  id="inputFlag"
                />
              </div>
              <div className="col-md-6">
                <label for="inputSize" className="form-label lable-change">
                  Size
                </label>
                <input
                  type="text"
                  className="form-control formSpace"
                  id="inputSize"
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputWatchers" className="form-label lable-change">
                  Watchers
                </label>
                <input
                  type="text"
                  className="form-control formSpace"
                  id="inputWatchers"
                />
              </div>
              <div className="col-md-6">
                <label for="inputType" className="form-label lable-change">
                  Type
                </label>
                <input
                  type="text"
                  className="form-control formSpace"
                  id="inputType"
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputSprint" className="form-label lable-change">
                  Sprint
                </label>
                <input
                  type="text"
                  className="form-control formSpace"
                  id="inputSprint"
                />
              </div>
            </div>

            <div className="mb-3">
              <label
                for="exampleInputDescription"
                className="form-label  lable-change"
              >
                Description
              </label>
              <div className="col-sm-12">
                <textarea
                  type="text"
                  className="form-control formSpace"
                  id="textareatask"
                  rows="4"
                  cols="50"
                />
              </div>
            </div>

            <div className="button managetask">
              <button className="submit-button submit-managetask">
                Submit
              </button>
              <button className="submit-button save-managetask">Save</button>
              <button className="submit-button reset-managetask">Reset</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ManageTask;

