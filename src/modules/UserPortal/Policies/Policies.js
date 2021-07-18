import React from 'react';
import { Table } from 'react-bootstrap';
//import { FaEdit, FaTrash } from 'react-icons/fa';
import './policies.css';
import '../../../shared/CSS/FormStyles.css';

const Policies = () => {
    return (
        <div className="jumbotron jumbo-form">
            <h5 className="page-heading">Policies</h5>
            <hr className="hr-line" />
            <div className="form-container">
                <form>
                    <div className="table-responsive">

                        <Table striped bordered hover>
                       
                            <thead>   
                                <tr >
                                  
                                 
                                    <th > <div className="ColumnWidth"> Name    </div>
                                      </th>
                                    <th  > Download    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HR Policies</td>

                                    <td>  
                                   <input type="submit" value="Download" className="submit-btn" />
                                    </td>
                                </tr>
                            </tbody>
                            
                        </Table>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Policies;
