import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './Education.css';
import '../../../shared/CSS/FormStyles.css';

const education = () => {
    return (
        <div className="jumbotron jumbo-form">
            <h5 className="page-heading">Education Details</h5>
            <hr className="hr-line" />
            <div className="form-container">
                <form>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Degree</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Degree" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Specialization</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Specialization" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">College/School</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="College/School" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">University/Board</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="University/Board" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Year Of Passing</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Degree" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Percentage</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Specialization" required />
                        </div>
                    </Row>
                    <div className="text-center">
                        <input type="submit" value="submit" className="submit-button" />
                    </div>
                </form>
            </div>
            
            <hr className="hr-line" />
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Degree</th>
                            <th>College/School</th>
                            <th>University/Board</th>
                            <th>Year of Passing</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BCA</td>
                            <td>PVP</td>
                            <td>SSPU</td>
                            <td>2021</td>
                            <td>
                                <FaEdit className="svgedit" />
                                <FaTrash className="svgdelete" />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default education;