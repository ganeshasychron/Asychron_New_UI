import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import CreateSchedule from './Schedule/CreateSchedule';
import ExistingSchedule from './Schedule/ExistingSchedule';

class MyCandidate extends Component {
  state = {
    hideform: false,
    showHide: ""
  };

     hideform = () => {
       return !this.state.hideform ? (
         this.hideform()
       ) : (
         <div className="card ">
           <div className="card-body ">
             <ul className="nav nav-pills bg-nav-pills nav-justified mb-2 hiring">
               <li className="nav-item">
                 <a
                   href="#createschedule"
                   data-bs-toggle="tab"
                   aria-expanded="true"
                   className="nav-link rounded-0 active hiring"
                 >
                   Create Schedule
                 </a>
               </li>
               <li className="nav-item">
                 <a
                   href="#existingschedule"
                   data-bs-toggle="tab"
                   aria-expanded="true"
                   className="nav-link rounded-0 hiring"
                 >
                   Existing Schedule
                 </a>
               </li>
             </ul>
             <hr className="hr-line" />

             <div className="tab-content">
               {/* ==========================Create Schedule==================== */}
               <div className="tab-pane active" id="createschedule">
                return<CreateSchedule hideform={this.state} />;
               </div>

               {/* ==========================Exisiting Schedule==================== */}
               <div className="tab-pane" id="existingschedule">
                 <ExistingSchedule />
               </div>
             </div>
           </div>
         </div>
       );
     };

  render() {
    return (
      <div>
        {this.state.hideform ? (
          this.hideform()
        ) : (
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Position Title</th>
                  <th>Experience</th>
                  <th>NP</th>
                  <th>
                    <button
                      className="submit-button hiringtask"
                      onClick={
                        () =>
                          this.setState({
                            hideform: true,
                            dyanamicBtnName: "Submit",
                          })
                       
                      }
                      // onAuxClickCapture={() => this.hideform(this.state)}
                    >
                      Create Schedule
                    </button>
                  </th>
                  <th>
                    <button className="submit-button viewhiringtask">
                      Send JD
                    </button>
                  </th>
                  <th>
                    <button className="submit-button initiatemanagetask">
                      Release Offer
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Gaurav Asawa</td>
                  <td>Pune</td>
                  <td>Sr. Developer</td>
                  <td>2+</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
        ;
      </div>
    );
  }
}

export default MyCandidate;