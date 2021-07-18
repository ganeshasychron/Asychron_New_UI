import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
//import { FaEdit, FaTrash } from 'react-icons/fa';
import './policies.css';
import '../../../shared/CSS/FormStyles.css';
import { FaDownload } from 'react-icons/fa';
import * as services from "../../../services/services";

class Policies extends React.Component {

    state = {
        data: []
    }

    componentDidMount() {
        this.getPolicy();
    }

    async getPolicy() {
        await services.getService("policies").then((res) => {
            console.log(res.data);
            this.setState({ data: res.data.Policy });
        });
    }

    render() {
        return (
            <div className="jumbotron jumbo-form">
                <h5 className="page-heading">Policies</h5>
                <hr className="hr-line" />
                <div className="table-responsive">
                    <Table striped bordered hover>

                        <thead>
                            <tr>
                                <th>
                                    <div className="ColumnWidth"> Name </div>
                                </th>
                                <th> Download </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.data.map((data) => (
                                    <tr key={data._id}>
                                        <td>
                                            {data.name}
                                        </td>
                                        <td>
                                            <button className="button edit-education">
                                                <FaDownload className="svgdownload" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </Table>
                </div>
            </div>
        )
    }

}
export default Policies;

