import React, { Component } from 'react';
import '../../../shared/CSS/FormStyles.css';
import { Button, Table, Row, Col } from 'reactstrap';
import './Users.css';

class Activities extends Component {

    state = {
        showAddActivity: false
    }

    showAddActivity = () => {
        return (
            
            <div className="mt-4" >
                <div className="jumbotron jumbo-form">
                    <div className="form-container">
                        <form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="activityName" className="col-form-label">
                                        Activity Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="activityName"
                                        placeholder="Enter Activity Name"
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="activityTitle" className="col-form-label">
                                        Activity Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="activityTitle"
                                        placeholder="Enter Activity Title"
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="inputDescription" className="col-form-label">
                                        Description
                                    </label>
                                    <input
                                        type="textarea"
                                        className="form-control form-input"
                                        id="inputDescription"
                                        placeholder="Enter Description"
                                        required
                                    />
                                </div>
                            </Row>

                            <div align="center">
                                <button type="button" className="submit-button">Submit</button>
                                <button type="button" className="cancel-button" onClick={this.hideAddActivityHandler}>Cancel</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }

    showAddActivityHandler = () => {
        this.setState({
            showAddActivity: true
        })
    }

    hideAddActivityHandler = () => {
        this.setState({
            showAddActivity: false
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.showAddActivity ? this.showAddActivity() :
                        <div className="form-container">
                            <form className="mt-5">

                                <button type="button" className="sub pull-right mb-4" onClick={this.showAddActivityHandler}>Add New Activity</button>
                                <div class="active-cyan-4 mb-4 pr-4 pull-right">
                                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" />
                                </div>

                                <div class="table-responsive" >
                                    <Table class="table" striped bordered hover>
                                        <thead className="border">
                                            <tr>
                                                <th>Activity Name</th>
                                                <th>Activity Title</th>
                                                <th>Description</th>
                                                <th className="columnwidth"></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
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

export default Activities;