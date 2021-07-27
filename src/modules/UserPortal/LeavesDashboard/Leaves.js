import { Component } from "react";
import './Leaves.css';
import '../../../shared/CSS/BlueTheme.css';
import { Col, Row, Button} from "react-bootstrap";
import logo from "../../../assets/images/parking.png"

class Leaves extends Component {
 
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
                <div className="card .asy-card-primary-design">
                  <div className="card-body">
                    <Col>
                      <p className="asy-card-page-heading">Book Time Off</p>
                    </Col>
                    <form>
                      <div className="form-group col-12 col-md-12">
                        <label
                          for="inputProjectName"
                          className="col-form-label asy-lable"
                        >
                          Leaves Type
                        </label>
                        <select class="form-control" name="activity">
                          <option
                            value=""
                            disabled
                            selected
                            className="activity"
                          >
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
                      <Row>
                        <div className="form-group col-12 col-md-6">
                          <label
                            for="leaveperiodfrom"
                            className="col-form-label"
                          >
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
              <div className="col-xl-6 col-lg-6">
                <Row>
                  <div className="form-group col-12 col-md-6">
                    <div className="card asy-leaves-page-card">
                      <div className="card-body asy-leaves-page-body">
                        <div className="row asy-card-heading">
                          <div className="col asy">
                            <img
                              src={logo}
                              alt="img logo"
                              className="rounded-circle avatar-lg img-thumbnail"
                            />
                          </div>
                          <div className="col asy-leaves-page-lable">
                            <h6 className="asy-card-lable text-center">
                              Paid Leaves
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <div className="card asy-leaves-page-card">
                      <div className="card-body asy-leaves-page-body">
                        <div className="row asy-card-heading">
                          <div className="col asy">
                            <img
                              src={logo}
                              alt="img logo"
                              className="rounded-circle avatar-lg img-thumbnail"
                            />
                          </div>
                          <div className="col asy-leaves-page-lable">
                            <h6 className="asy-card-lable text-center">
                              Paid Leaves
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="form-group col-12 col-md-6">
                    <div className="card asy-leaves-page-card">
                      <div className="card-body asy-leaves-page-body">
                        <div className="row asy-card-heading">
                          <div className="col asy">
                            <img
                              src={logo}
                              alt="img logo"
                              className="rounded-circle avatar-lg img-thumbnail"
                            />
                          </div>
                          <div className="col asy-leaves-page-lable">
                            <h6 className="asy-card-lable text-center">
                              Paid Leaves
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group col-12 col-md-6">
                    <div className="card asy-leaves-page-card">
                      <div className="card-body asy-leaves-page-body">
                        <div className="row asy-card-heading">
                          <div className="col asy">
                            <img
                              src={logo}
                              alt="img logo"
                              className="rounded-circle avatar-lg img-thumbnail"
                            />
                          </div>
                          <div className="col asy-leaves-page-lable">
                            <h6 className="asy-card-lable text-center">
                              Paid Leaves
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Row>
              </div>
            </div>
          </div>
        );
    }
}

export default Leaves;