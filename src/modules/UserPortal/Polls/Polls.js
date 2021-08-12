import React, { Component } from 'react';
import { Table, Row, Col } from 'react-bootstrap';
import '../../../shared/CSS/FormStyles.css';
import './Polls.css';
import { Button } from 'reactstrap';
import Select from './Charts/ChartSelect';
import * as services from "../../../services/services";

class Polls extends Component {

    state = {
        showForm: false,
        showResult: false,
        id: "",
        pollTitle: "",
        initiatedBy: "",
        priority: "",
        status: "",
        vote: "",
        activePoll: {},
        data: []
    }

    componentDidMount() {
        this.getPolls();
    }

    async getPolls() {
        await services.getService("polls").then((res) => {
            console.log(res.data);
            this.setState({ data: res.data.Polls });
        });
    }

    submitVoteHandler = async () => {
        let data = this.state.activePoll;

        data.vote = this.state.vote;
        data.type = "response"

        // console.log(this.state.vote);
        delete data._id;
        services.postService("polls", data).then((res) => {
            console.log(res.data)
            this.getPolls();
            this.setState({
                showForm: !this.state.showForm
            });
        })
    };

    giveVoteHandler = (id) => {
        const newData = this.state.data.filter((obj) => obj._id === id)[0];
        this.setState({
            showForm: !this.state.showForm
        })
        this.setState({
            activePoll: newData,
        });
    };

    showForm = () => {
        return (
            <div className="jumbotron asy-main-jumbotron">

                <div className="row asy-main-row">
                    <Col>
                        <h5 className="asy-main-page-heading"> Polls</h5>
                    </Col>
                </div>


                <div className="form-container ">
                    <div className="card asy-polls-page-card" >
                        <form className="h-100 d-inline-block mt-2">
                            <Row>
                                <div id="LabelArea" className="form-group ">
                                    <label id="FirstLabelId" for="inputdegree" className="col-form-label">Poll Title </label>
                                    <div className="SecondLabel">
                                        <label id="SecondLabelId" for="inputdegree" className="col-form-label">
                                            {
                                                this.state.activePoll.pollTitle
                                            }
                                        </label>
                                    </div>
                                </div>

                                <div id="LabelArea" className="form-group ">
                                    <label id="FirstLabelId" for="inputdegree" className="col-form-label">Poll Priority  </label>
                                    <div className="SecondLabel">
                                        <label id="SecondLabelId" for="inputdegree" className="col-form-label">
                                            {
                                                this.state.activePoll.priority
                                            }
                                        </label>
                                    </div>
                                </div>

                                <div id="LabelArea" className="form-group ">
                                    <label id="FirstLabelId" for="inputdegree" className="col-form-label">Initiated By </label>
                                    <div className="SecondLabel2">
                                        <label id="SecondLabelId" for="inputdegree" className="col-form-label">
                                            {
                                                this.state.activePoll.initiatedBy
                                            }
                                        </label>
                                    </div>
                                </div>
                            </Row>

                            <hr className="hr-line-2" />
                            <Row>
                                <div className="questionFont">
                                    <label for="inputdegree" className="col-form-label pt-4"> {this.state.activePoll.question} </label>
                                </div>
                            </Row>

                            <Row>
                                <div class="form-check form-check-inline">
                                    {
                                        this.state.activePoll.options.map((data) => (
                                            <div key={data.id}>
                                                <div id="submitid">
                                                    <label class="container">{data.value}
                                                        <input type="radio" name="radio" value={data.value} onChange={(e) => { this.setState({ vote: e.target.value }) }} />
                                                        <div class="check"></div>
                                                    </label>
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                            </Row>

                            <div className=" text-center mt-3">
                                <Button className=" asy-primary-submit-button width" onClick={this.submitVoteHandler}>
                                    <h6 className="text-center asy-button-heading">
                                        Submit Vote
                                    </h6>
                                </Button>
                                <Button className="asy-secondary-cancle-button cancel" onClick={() => this.setState({ showForm: !this.state.showForm })}>
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

    showResult = () => {
        return (
            <div className="jumbotron asy-main-jumbotron">

                <div className="row asy-main-row">
                    <Col>
                        <h5 className="asy-main-page-heading"> Polls</h5>
                    </Col>


                    <Col className="d-flex flex-row-reverse">
                        <Button className="add-button-flip" onClick={() => this.setState({ showResult: !this.state.showResult })}>
                            <h6 className="text-center asy-button-heading">
                                Back
                            </h6>
                        </Button>
                    </Col>
                </div>


                <div className="text-center">
                    <div className='CardArea' >
                        <div className='card polls'>
                            <p className="asy-card-page-heading  text-center mt-3 font-weight-bold">Section Wise Analysis</p>
                            <hr className="hr-line-2" />
                            <div className="card-body polls">
                                <Select />
                            </div>
                        </div>

                        <div className='card polls'>
                            <p className="asy-card-page-heading text-center mt-3 font-weight-bold">Complete Analysis</p>
                            <hr className="hr-line-2" />
                            <div className="card-body">
                                <Select />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {
                    this.state.showForm ? this.showForm() :
                        <div>
                            {
                                this.state.showResult ? this.showResult() :

                                    <div className="jumbotron asy-main-jumbotron ">

                                        <div className="row asy-main-row">
                                            <Col>
                                                <h5 className="asy-main-page-heading"> Polls</h5>
                                            </Col>
                                        </div>


                                        <div className="form-container">
                                            <form>
                                                <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
                                                    <Table className="asy-Table">
                                                        <thead>
                                                            <tr className="asy-TableHeading">
                                                                <th className="asy-th">Poll Title</th>
                                                                <th className="asy-th">Initiated by</th>
                                                                <th className="asy-th">Priority</th>
                                                                <th className="asy-th">Status</th>
                                                                <th className="columnwidth asy-th"></th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {
                                                                this.state.data.map((data) => (
                                                                    <tr className="asy-TableData adjust" key={data._id}>
                                                                        <td id="tabletd">
                                                                            {data.pollTitle}
                                                                        </td>
                                                                        <td>
                                                                            {data.initiatedBy}
                                                                        </td>
                                                                        <td>
                                                                            {data.priority}
                                                                        </td>
                                                                        <td>
                                                                            {data.status}
                                                                        </td>
                                                                        <td className="btn-align">

                                                                            <Button id="color" className="asy-primary-submit-button m-0" onClick={() => this.setState({ showResult: !this.state.showResult })}>
                                                                                <h6 className="text-center asy-button-heading">
                                                                                    View Result
                                                                                </h6>
                                                                            </Button>
                                                                            <Button id="color" className="asy-primary-submit-button m-0 " onClick={this.giveVoteHandler.bind(this, data._id)}>
                                                                                <h6 className="text-center asy-button-heading">
                                                                                    Give Vote
                                                                                </h6>
                                                                            </Button>
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
                            }
                        </div>
                }
            </div>
        );
    }
}


export default Polls;