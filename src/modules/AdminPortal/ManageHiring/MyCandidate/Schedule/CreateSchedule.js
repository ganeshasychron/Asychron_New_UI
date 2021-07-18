import React, { Component } from "react";

class CreateSchedule extends Component {
   
    render() {
        return (
          <div className="jumbotron jumbo-form">
            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputWatchers" className="form-label lable-change">
                  Candidate Name
                </label>
                <h6 style={{ color: "darkgray" }}>Jagan M Jadhav</h6>
              </div>
              <div className="col-md-6">
                <label for="inputType" className="form-label lable-change">
                  Position
                </label>
                <h6 style={{ color: "darkgray" }}>Sr. Developer</h6>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputWatchers" className="form-label lable-change">
                  Experience
                </label>
                <h6 style={{ color: "darkgray" }}>5+ yrs</h6>
              </div>
              <div className="col-md-6">
                <label for="inputType" className="form-label lable-change">
                  Select Interviewer
                </label>
                <select
                  className="form-select formSpace"
                  aria-label="Default select example"
                >
                  <option selected disabled>
                    Select
                  </option>
                  <option value="1">Jagan J</option>
                  <option value="2">Sumit S</option>
                  <option value="3">Gaurav A</option>
                  <option value="4">Ganesh G</option>
                </select>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label for="inputDueDate" className="form-label lable-change">
                  Select Date & Time
                </label>
                <input
                  type="date"
                  className="form-control formSpace"
                  id="inputDueDate"
                />
              </div>
            </div>

            <div className="button managetask" style={{ marginTop: "20px" }}>
              <button className="submit-button submit-managetask">
                Submit
              </button>
              <button className="submit-button save-managetask"
              // onClick={() =>{
              //   const {state.hideform},
              //       hideform({ hideform });
              //     }}
              >Reset</button>
            </div>
          </div>
        );
    }
}

export default CreateSchedule;