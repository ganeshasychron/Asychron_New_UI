import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
//import './Certification.css';
import '../../../shared/CSS/FormStyles.css';

const Certification = () => {
    return (
        <div className="jumbotron jumbo-form">
            <h5 className="page-heading">CERTIFICATION</h5>
            <hr className="hr-line" />
            <div className="form-container">
                <form>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Name</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Name" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Type of Certification</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Type of Certification" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Description</label>
                            <textarea type="textarea" className="form-control form-input" id="inputdegree" placeholder="Description" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Certificate</label>
                            <input type="File" className="form-control form-input" id="inputPassword" placeholder="Certificate" required />
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
                            <th>Type</th>
                            <th>Uoloaded On</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Microsoft Edge</td>
                            <td>UI</td>
                            <td>23-02-2021</td>
                            <td><FaEdit className="svgedit" /><FaTrash className="svgdelete" /></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Certification;