import React, { Component } from "react";
import { Col } from "react-bootstrap";
import "./ManageHiring.css";
import OpenPosition from './OpenPosition/OpenPosition';
import MyPosition from './MyPosition/MyPosition';
import MyCandidate from "./MyCandidate/MyCandidate";
import MyOffer from "./MyOffer/MyOffer";
import ClosedPosition from "./ClosedPosition/ClosedPosition";
class ManageHiring extends Component {
 
  render() {
    return (
      <div className="jumbotron jumbo-form">
        <div className="row educations">
          <Col>
            <h5 className="page-heading"> Hiring Portal </h5>
          </Col>
        </div>
        <hr className="hr-line" />

        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="card hiring">
              <div className="card-body hiring">
                <ul className="nav nav-pills bg-nav-pills nav-justified mb-6 hiring">
                  <li className="nav-item">
                    <a
                      href="#openposition"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link rounded-0 active hiring"
                    >
                      Open Position
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#myposition"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link rounded-0  hiring"
                    >
                      My Position
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#mycandidates"
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className="nav-link rounded-0 hiring"
                    >
                      My Candidate
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#myoffers"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link rounded-0 hiring"
                    >
                      My Offers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#closedposition"
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className="nav-link rounded-0 hiring"
                    >
                      Closed Position
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  {/* ==========================Open Position==================== */}
                  <div className="tab-pane active" id="openposition">
                    <OpenPosition />
                  </div>


                  {/* ==========================My Position Start==================== */}
                  <div className="tab-pane" id="myposition">
                    <MyPosition />
                  </div>
  

                  {/* ==========================My Candidate Start==================== */}
                  <div className="tab-pane" id="mycandidates">
                    <MyCandidate />
                  </div>
 

                  {/* ==========================My offer Start==================== */}
                  <div className="tab-pane" id="myoffers">
                   <MyOffer />
                  </div>

                 {/* ==========================closed Position Start==================== */}
                  <div className="tab-pane" id="closedposition">
                    <ClosedPosition />
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageHiring;
