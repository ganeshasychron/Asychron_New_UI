import React, { Component } from 'react';
import styles from "../LeavesDashboard.module.css";
import { Row } from 'react-bootstrap';

class LeavesForm extends Component{

    constructor(){
        super();
        this.state = {
            leaves:null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        
        this.setState({
            leaves: event.target.value
        });
        
    }

    submit(){
        console.log(this.state)
    }

    render(){
        return (
          <div className="card">
            
              <div className="card-body">
                  <div className="form-container">
                  <form>
                    <Row>

                      <div className="form-group col-12 col-md-6">
                        <select
                          className={styles.select_option}
                          name="leaves"
                          onChange={this.handleInputChange} >

                          <option selected disabled className="option">
                            Select Leaves Type
                          </option>
                          <option value="1" className="option">Sick Leaves</option>
                          <option value="2" className="option">Personal Leaves</option>
                          <option value="3" className="option">Holiday Leaves</option>
                        </select>
                     </div>
            </Row>
            <Row>
                      <div className="form-group col-12 col-md-6">
                        <label for="leaveperiodfrom" className="col-form-label">
                          Leave Period From
                        </label>
                        <input
                          type="date"
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
                          type="date"
                          className="form-control form-input"
                          id="leaveperiodto"
                          placeholder="To"
                          required
                        />
                      </div>
                   
                      <div className="form-group col-12 col-md-6">
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
                  </form>
                </div>
                <div className="text-center">
                  <div className="form-row">
                    <div className="col-md-12">
                      <button
                        type="submit"
                        className="submit-button"
                        onClick={() => this.submit()}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
        );  
    }
}

export default LeavesForm;