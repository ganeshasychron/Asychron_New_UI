import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
//import './Assets.css';
import '../../../shared/CSS/FormStyles.css';

const Assets = () => {
    return (
        <div className="jumbotron jumbo-form">
            <h5 className="page-heading">Assets</h5>
            <hr className="hr-line" />
            <div className="form-container">
                <form>
                <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>  
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date Of Issue</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Laptop</td>
                            <td>It</td>
                            <td>01-02-2020</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
                </form>
            </div>
        </div>
    )
}

export default Assets;