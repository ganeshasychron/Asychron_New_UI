import React, { Component } from 'react';
import '../../../shared/CSS/FormStyles.css';
import { Button, Table, Row, Col } from 'reactstrap';
import './Users.css';
import './UsersManagement.css';

class Users extends Component {

    state = {
        showAddUser: false
    }

    showAddUser = () => {
        return (
            <div className="mt-4" >
                <div className="jumbotron jumbo-form">
                    <div className="form-container">
                        <form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="userName" className="col-form-label">
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="UserName"
                                        placeholder=" Enter User Name"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="empCode" className="col-form-label">
                                        Emp Code
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-input"
                                        id="empCode"
                                        placeholder=" Enter Emp Code"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="empName" className="col-form-label">
                                        Emp Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="empName"
                                        placeholder=" Enter Emp Name"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="email" className="col-form-label">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="email"
                                        placeholder="Enter Email"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="phone" className="col-form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control form-input"
                                        id="phone"
                                        placeholder=" Enter Phone Number"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="doj" className="col-form-label">
                                        DOJ
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control form-input"
                                        id="doj"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="departmentType" className="col-form-label">
                                        Department
                                    </label>
                                    <select class="form-control" name="department">

                                        <option value="" disabled selected className="department">
                                            Select Department
                                        </option>
                                        <option value="Development" className="department">
                                            Development
                                        </option>
                                        <option value="Testing" className="department">
                                            Testing
                                        </option>
                                        <option value="Training" className="department">
                                            Training
                                        </option>

                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="description" className="col-form-label">
                                        Description
                                    </label>
                                    <input
                                        type="textarea"
                                        className="form-control form-input"
                                        id="description"
                                        placeholder=" Enter Description"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="roleType" className="col-form-label">
                                        Role
                                    </label>
                                    <select class="form-control" name="role">

                                        <option value="" disabled selected className="role">
                                            Select Role
                                        </option>
                                        <option value="Development" className="role">
                                            Junior Developer
                                        </option>
                                        <option value="Testing" className="role">
                                            Senior Developer
                                        </option>

                                    </select>
                                </div>
                            </Row>

                            <div align="center">
                                <button type="button" className="submit-button">Submit</button>
                                <button type="button" className="cancel-button" onClick={this.hideAddUserHandler}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div></div>
        );
    }

    showAddUserHandler = () => {
        this.setState({
            showAddUser: true
        })
    }

    hideAddUserHandler = () => {
        this.setState({
            showAddUser: false
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showAddUser ? this.showAddUser() :

                        <div className="form-container">
                            <form className="mt-5">

                                <button type="button" className="sub pull-right mb-4" onClick={this.showAddUserHandler}>Add New User</button>
                                <div class="active-cyan-4 mb-4 pr-4  pull-right">
                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                </div>

                                <div class="table-responsive" >
                                    <Table class="table" striped bordered hover>
                                        <thead className="border">
                                            <tr>
                                                <th>User Name</th>
                                                <th>Emp Code</th>
                                                <th>Emp Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>DOJ</th>
                                                <th>Department</th>
                                                <th>Description</th>
                                                <th>Role</th>
                                                <th className="columnwidth"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>abc</td>
                                                <td>273</td>
                                                <td>abc</td>
                                                <td>@gmail.com</td>
                                                <td>9785264123</td>
                                                <td>02/05/2021</td>
                                                <td>abc</td>
                                                <td>abc</td>
                                                <td>abc</td>
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
                }
            </div>
        );
    }
}

export default Users;