import React, { Component } from 'react';
import '../../../shared/CSS/FormStyles.css';
import { Button, Table, Row, Col } from 'reactstrap';
import './Users.css';

class Roles extends Component {

    state = {
        showAddRole: false
    }

    showAddRole = () => {
        return (
            <div className="mt-4">
                <div className="jumbotron jumbo-form">
                    <div className="form-container">
                        <form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="roleName" className="col-form-label">
                                        Role Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="roleName"
                                        placeholder="Enter Role Name"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="roleTitle" className="col-form-label">
                                        Role Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="roleTitle"
                                        placeholder="Enter  Role Title"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="description" className="col-form-label">
                                        Description
                                    </label>
                                    <input
                                        type="textarea"
                                        className="form-control form-input"
                                        id="description"
                                        placeholder="Enter Description"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="activityType" className="col-form-label">
                                        Activities
                                    </label>
                                    <select class="form-control" name="activity">

                                        <option value="" disabled selected className="activity">
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

                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="StartDate" className="col-form-label">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control form-input"
                                        id="StartDate"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="EndDate" className="col-form-label">
                                        EndDate
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control form-input"
                                        id="EndDate"
                                    />
                                </div>
                            </Row>

                            <div align="center">
                                <button type="button" className="submit-button">Submit</button>
                                <button type="button" className="cancel-button" onClick={this.hideAddRoleHandler}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

    showAddRoleHandler = () => {
        this.setState({
            showAddRole: true
        })
    }

    hideAddRoleHandler = () => {
        this.setState({
            showAddRole: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showAddRole ? this.showAddRole() :

                        <div className="form-container">
                            <form className="mt-5">

                                <button type="button" className="sub pull-right mb-4" onClick={this.showAddRoleHandler}>Add New Role</button>
                                <div class="active-cyan-4 mb-4 pr-4  pull-right">
                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                </div>

                                <div class="table-responsive" >
                                    <Table class="table" striped bordered hover>
                                        <thead className="border">
                                            <tr>
                                                <th>Role Name</th>
                                                <th>Role Title</th>
                                                <th>Description</th>
                                                <th>Activities</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                                <th className="columnwidth"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>abc</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                                <td>05/07/2021</td>
                                                <td>10/07/2021</td>
                                                <td className="btn-align">
                                                    <Button outline="secondary">
                                                        Edit
                                                    </Button>
                                                    <Button outline="secondary">
                                                        View
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </form>
                        </div>
                }</div>
        );
    }
}

export default Roles;