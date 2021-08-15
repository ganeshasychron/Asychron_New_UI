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
                <div className="jumbotron asy-main-jumbotron">
                    <div className="form-container">
                        <form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="userName" className="col-form-label">
                                        User Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
                                        id="doj"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="departmentType" className="col-form-label">
                                        Department
                                    </label>
                                    <select class="form-control asy-InputValues" name="department">

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
                                        className="form-control asy-InputValues"
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
                                    <select class="form-control asy-InputValues" name="role">

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

                            <div align="center" className="mt-3">
                                <Button className="asy-primary-submit-button width">
                                    <h6 className="text-center asy-button-heading">
                                        Submit
                                    </h6>
                                </Button>
                                <Button className="asy-secondary-cancle-button cancel" onClick={this.hideAddUserHandler}>
                                    <h6 className="text-center asy-button-heading">
                                        Cancel
                                    </h6>
                                </Button>

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

                        <div className="form-container mt-5">
                            <form>

                                <Button id="add_btn" className="add-button-flip  mt-2 pull-right py-0 mb-4" onClick={this.showAddUserHandler}>
                                    <h6 className="text-center asy-button-heading">
                                        Add New User
                                    </h6>
                                </Button>
                                <div class="active-cyan-4 mt-0 pr-4  pull-right">
                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                </div>



                                <div className="form-container">
                                    <form>
                                        <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
                                            <Table className="asy-Table">
                                                <thead>
                                                    <tr className="asy-TableHeading">
                                                        <th className="asy-th">User Name</th>
                                                        <th className="asy-th">Emp Code</th>
                                                        <th className="asy-th">Emp Name</th>
                                                        <th className="asy-th">Email</th>
                                                        <th className="asy-th">Phone</th>
                                                        <th className="asy-th">DOJ</th>
                                                        <th className="asy-th">Department</th>
                                                        <th className="asy-th">Description</th>
                                                        <th className="asy-th">Role</th>
                                                        <th className="asy-th"></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className="asy-TableData adjust">
                                                        <td>abc</td>
                                                        <td>273</td>
                                                        <td>abc</td>
                                                        <td>asychron@gmail.com</td>
                                                        <td>9785264123</td>
                                                        <td>02/05/2021</td>
                                                        <td>abc</td>
                                                        <td>abc</td>
                                                        <td>abc</td>
                                                        <td className="btn-align">
                                                            <Button className="asy-primary-submit-button m-0">
                                                                <h6 className="text-center asy-button-heading">
                                                                    Edit
                                                                </h6>
                                                            </Button>
                                                            <Button className="asy-primary-submit-button m-0 ">
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
                }

            </div>
        );
    }
}

export default Users;