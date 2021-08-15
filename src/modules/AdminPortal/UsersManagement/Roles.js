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
            <div className="jumbotron asy-main-jumbotron">
                    <div className="form-container">
                        <form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="roleName" className="asy-FormLabel">
                                        Role Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control asy-InputValues"
                                        id="roleName"
                                        placeholder="Enter Role Name"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="roleTitle" className="asy-FormLabel">
                                        Role Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control asy-InputValues"
                                        id="roleTitle"
                                        placeholder="Enter  Role Title"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="description" className="asy-FormLabel">
                                        Description
                                    </label>
                                    <input
                                        type="textarea"
                                        className="form-control asy-InputValues"
                                        id="description"
                                        placeholder="Enter Description"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="activityType" className="asy-FormLabel">
                                        Activities
                                    </label>
                                    <select class="form-control asy-InputValues" name="activity">

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
                                    <label for="StartDate" className="asy-FormLabel">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control asy-InputValues"
                                        id="StartDate"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="EndDate" className="asy-FormLabel">
                                        EndDate
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control asy-InputValues"
                                        id="EndDate"
                                    />
                                </div>
                            </Row>

                            <div align="center">
                            <Button  className="asy-primary-submit-button width">
                                <h6 className="text-center asy-button-heading">
                                    Submit
                                </h6>
                            </Button>
                            <Button className="asy-secondary-cancle-button cancel" onClick={this.hideAddRoleHandler}>
                                <h6 className="text-center asy-button-heading">
                                    Cancel
                                </h6>
                            </Button>

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
                            <div>
                                    <div class="row  mr-4">
                                        <div class="col">
                                            <div class="float-right">
                                                <div className="active-cyan-4 mt-0">
                                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="float-right">
                                            <Button id="add_btn" className="add-button-flip py-0 width-auto" onClick={this.showAddRoleHandler}>
                                                <h6 className="text-center asy-button-heading">
                                                    Add New Role
                                                </h6>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="form-container">
                                    <form>
                                        <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
                                            <Table className="asy-Table">
                                                <thead className="border">
                                                    <tr className="asy-TableHeading">
                                                        <th className="asy-th">Role Name</th>
                                                        <th className="asy-th">Role Title</th>
                                                        <th className="asy-th">Description</th>
                                                        <th className="asy-th">Activities</th>
                                                        <th className="asy-th">Start Date</th>
                                                        <th className="asy-th">End Date</th>
                                                        <th className="asy-th"></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className="asy-TableData adjust">
                                                        <td>abc</td>
                                                        <td>abc</td>
                                                        <td>abc</td>
                                                        <td>abc</td>
                                                        <td>05/07/2021</td>
                                                        <td>10/07/2021</td>
                                                        <td className="btn-align">
                                                            <Button className="asy-primary-submit-button m-0">
                                                                <h6 className="text-center asy-button-heading">
                                                                    Edit
                                                                </h6>
                                                            </Button>
                                                            <Button className="asy-primary-submit-button m-0">
                                                                <h6 className="text-center asy-button-heading">
                                                                    View
                                                                </h6>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </form>
                                </div>
                            </form>
                        </div>
                }</div>
        );
    }
}

export default Roles;