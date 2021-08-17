import React, { useEffect } from 'react';
import { Table, Col } from 'react-bootstrap';
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
            <div className="jumbotron asy-main-jumbotron">

                <div className="row asy-main-row">
                    <Col>
                        <h5 className="asy-main-page-heading"> Policies</h5>
                    </Col>
                </div>
                <div className="form-container">
                    <form>
                        <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
                            <Table className="asy-Table">

                                <thead>
                                    <tr className="asy-TableHeading">
                                        <th className="asy-th ColumnWidth">Name</th>
                                        <th className="asy-th"> Download </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.data.map((data) => (
                                            <tr className="asy-TableData" key={data._id}>
                                                <td>
                                                    {data.name}
                                                </td>
                                                <td>
                                                    <button id="no" className="asy-primary-submit-button width">
                                                        <FaDownload id="no" className="svgdownload" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>

                            </Table>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Policies;

