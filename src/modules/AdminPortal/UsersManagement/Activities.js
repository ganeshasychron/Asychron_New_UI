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
                <div className="jumbotron asy-main-jumbotron">
                    <div className="form-container">
                        <form>
                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="activityName" className="col-form-label">
                                        Activity Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
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
                                        className="form-control asy-InputValues"
                                        id="inputDescription"
                                        placeholder="Enter Description"
                                        required
                                    />
                                </div>
                            </Row>

                            <div align="center">
                                <Button  className="asy-primary-submit-button width">
                                    <h6 className="text-center asy-button-heading">
                                        Submit
                                    </h6>
                                </Button>
                                <Button  className="asy-secondary-cancle-button cancel" onClick={this.hideAddActivityHandler}>
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

                                <Button id="add_btn"  className="add-button-flip  mt-2 pull-right py-0 mb-4"  onClick={this.showAddActivityHandler}>
                                    <h6 className="text-center asy-button-heading">
                                        Add New Activity
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
                                                        <th className="asy-th">Activity Name</th>
                                                        <th className="asy-th">Activity Title</th>
                                                        <th className="asy-th">Description</th>
                                                        <th className="asy-th"></th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr className="asy-TableData adjust">
                                                        <td>abc</td>
                                                        <td>abc</td>
                                                        <td>abc</td>
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
                            </div>            }
                

            </div>


                            );
    }
}

                            export default Activities;