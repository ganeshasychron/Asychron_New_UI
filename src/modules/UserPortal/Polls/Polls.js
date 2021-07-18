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
        return  !this.state.showForm ? (
            this.showForm()
          ) : (
            <div className="jumbotron jumbo-form h-auto">

                <h5 className="page-heading ">Polls</h5>
                <hr className="hr-line" />
                <div className="form-container h-100">
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
                    </form>
                </div>

                <hr className="hr-line-2" />
                <Row>
                <div className="questionFont">
                    <label  for="inputdegree" className="col-form-label pt-4"> {this.state.activePoll.question} </label>
                    </div>
                </Row>

                <Row>
                
                    <div class="form-check form-check-inline">
                        {
                            this.state.activePoll.options.map((data) => (
                                <div key={data._id}>
                                    <div id="submitid">
                                    
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={data} onChange={(e) => { this.setState({ vote: e.target.value }) }} />
                                        <label class="form-check-label" for="inlineRadio1">{data}</label>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Row>

                <Row>
                    <div id="submitid1">
                        <button type="button" className="submit-btn" onClick={this.submitVoteHandler}>Submit Vote</button>
                        <button type="button" className="cancel_button education" onClick={() =>this.setState({showForm: !this.state.showForm})}>Cancel</button>
                    </div>
                </Row>

            </div>
        );
    }

    showResult = () => {
        return (
            <div className="jumbotron jumbo-form h-auto">
                <h5 className="page-heading ">Polls</h5>
                <Col className="d-flex flex-row-reverse">
                    <Button outline='secondary'>
                        Back
                    </Button>
                </Col>
                <hr className="hr-line" />

                <div className="text-center center" >
                    <div className='CardArea' >

                        <div className='card polls'>
                            <h5 className="page-heading1">Section Wise Analysis</h5>
                            <hr className="hr-line-2" />
                            <div className="card-body polls">
                                <Select />
                            </div>
                        </div>

                        <div className='card'>
                            <h5 className="page-heading1">Complete Analysis</h5>
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

                                    <div className="jumbotron jumbo-form">
                                        <h5 className="page-heading">Polls</h5>

                                        <hr className="hr-line" />
                                        <div className="form-container">
                                            <form>
                                                <div class="table-responsive" >
                                                    <Table class="table" striped bordered hover>
                                                        <thead className="border">
                                                            <tr>
                                                                <th>Poll Title</th>
                                                                <th>Initiated by</th>
                                                                <th>Priority</th>
                                                                <th>Status</th>
                                                                <th className="columnwidth"></th>
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            {
                                                                this.state.data.map((data) => (
                                                                    <tr key={data._id}>
                                                                        <td>
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
                                                                            <Button outline color="secondary"
                                                                                onClick={() => this.setState({ showResult: !this.state.showResult })}>
                                                                                View Result
                                                                            </Button>
                                                                            <Button outline color="secondary"
                                                                                onClick={this.giveVoteHandler.bind(this, data._id)}>
                                                                                Give Vote
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