import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
//import './Family.css';
import '../../../shared/CSS/FormStyles.css';

const family = () => {
    return (
        <div className="jumbotron jumbo-form">
            <h5 className="page-heading">Family</h5>
            <hr className="hr-line" />
            <div className="form-container">
                <form>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Name</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Name" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Accupation</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Accupation" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Relationship</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Relationship" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Address</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Address" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Phone</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Phone" required />
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
                            <th>Name</th>
                            <th>Relationship</th>
                            <th>Phone</th>
                            <th>Accupation</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Rahul</td>
                            <td>Brother</td>
                            <td>0000</td>
                            <td>Student</td>
                            <td><FaEdit className="svgedit" /><FaTrash className="svgdelete" /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default family;