import React, { Component } from 'react';
import { Table, Row, Col, Modal, Button } from "react-bootstrap";
import '../../../shared/CSS/FormStyles.css';
import './ManagePolls.module.css';
// import { Button } from 'reactstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { FaTrash } from 'react-icons/fa';
import * as services from "../../../services/services";
import Moment from 'react-moment'


class ManagePolls extends Component {

    state = {
        showAddPoll: false,
        showList: true,
        showHide:"",
        userInput: "",
        options: [],
        id: "",
        pollTitle: "",
        priority: "",
        startDate: "",
        endDate: "",
        question: "",
        questionType: "",
        data: [],
        dyanamicBtnName: 'Submit',

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



    submitHandler = async () => {

        const data = {
            pollTitle: this.state.pollTitle,
            priority: this.state.priority,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            question: this.state.question,
            voteType: this.state.voteType,
            options: this.state.options,
            type: "template",
            initiatedBy: "user"
        };
        console.log(data);
        if (this.state.id === "") {
            services.postService("polls", data).then((res) => {
                console.log(res.data);
                this.getPolls();
                this.setState({
                    showAddPoll: !this.state.showAddPoll,
                    id: ""
                });
            });

        }
        else {
            await services.patchService('polls', this.state.id, data)
                .then((res) => {
                    console.log(res.data);
                    this.getPolls();
                    this.setState({
                        id: "",
                        showAddPoll: !this.state.showAddPoll
                    });
                });

        }
    }

    handledeleteData = async (id) => {
        services.deleteService("polls", id).then((res) => {
            console.log(res.data);
            const newData = this.state.data.filter(
                (obj) => obj._id !== this.state.id
            );
            this.setState({
                data: newData,
                id: "",
                showHide:false
            });
        });
        this.getPolls();
    };

    handleupdateData = async (id, e) => {

        const newData = this.state.data.filter((obj) => obj._id === id)[0];

        this.setState({
            pollTitle: newData.pollTitle,
            priority: newData.priority,
            startDate: newData.startDate,
            endDate: newData.endDate,
            question: newData.question,
            voteType: newData.voteType,
            options: newData.options,
            dyanamicBtnName: 'Update',
            id: newData._id,
            showAddPoll: !this.state.showAddPoll,
        });
    };

    handleReset = (form) => {
        this.setState({
            pollTitle: "",
            priority: "",
            startDate: "",
            endDate: "",
            question: "",
            voteType: "",
            options: [],
            showAddPoll: !this.state.showAddPoll,
            dyanamicBtnName: "submit",
        });
    };

    handleManualReset = (event) => {
        event.preventDefault();
        this.form.reset();
    };

    handleModalShow = (id) => {
        this.setState({ showHide: !false, editId: id });
    };

    handleModalHide = () => {
        this.setState({ showHide: false, editId: "" });
    };


    updateInput = (value) => {
        this.setState({
            userInput: value,
        });
    }

    addItem = (e) => {
        if (this.state.userInput !== '') {

            const userInput = {

                id: Math.random(),
                value: this.state.userInput
            };

            const options = [...this.state.options];
            options.push(userInput);

            this.setState({
                options,
                userInput: ""
            });
        }

    }

    deleteItem(key) {
        const options = [...this.state.options];

        const updateList = options.filter(item => item.id !== key);

        this.setState({
            options: updateList,
        });
    }

    

    showAddPoll = () => {
        
        return (
            
            <div className="jumbotron asy-main-jumbotron">
            
                <div className="row asy-main-row">
                    <Col>
                        <h5 className="asy-main-page-heading">ManagePolls</h5>
                    </Col>
                </div>
                <hr className="hr-line" />
                <div className="form-container">
                    <div className="card asy-manage-page-card" >
                    <div className="card-body">
                        <form>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="inputPollTitle" className="col-form-label">
                                        Poll Title
                                    </label>
                                    <input
                                        onChange={(e) => { this.setState({ pollTitle: e.target.value }) }}
                                        type="text"
                                        className="form-control form-input"
                                        id="inputPollTitle"
                                        placeholder="Poll Title"
                                        value={this.state.pollTitle}
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="priorityType" className="col-form-label">
                                        Priority
                                    </label>
                                    <select class="form-control" name="priority" value={this.state.priority} onChange={(e) => { this.setState({ priority: e.target.value }) }}>
                                        <option value="" disabled selected className="priority">
                                            Select Priority Type
                                        </option>
                                        <option value="High" className="priority">
                                            High
                                        </option>
                                        <option value="Medium" className="priority">
                                            Medium
                                        </option>
                                        <option value="Low" className="priority">
                                            Low
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
                                        onChange={(e) => { this.setState({ startDate: e.target.value }) }}
                                        type="date"
                                        className="form-control form-input"
                                        placeholder="Start Date (DD/MM/YYYY)"
                                        id="StartDate"
                                        value={this.state.startDate}
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="EndDate" className="col-form-label">
                                        End Date
                                    </label>
                                    <input
                                        onChange={(e) => { this.setState({ endDate: e.target.value }) }}
                                        type="date"
                                        className="form-control form-input"
                                        placeholder="End Date(DD/MM/YYYY)"
                                        id="EndDate"
                                        value={this.state.endDate}
                                    />
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="inputQuestion" className="col-form-label">
                                        Question
                                    </label>
                                    <input
                                        onChange={(e) => { this.setState({ question: e.target.value }) }}
                                        type="text"
                                        className="form-control form-input"
                                        id="inputQuestion"
                                        placeholder="Question"
                                        value={this.state.question}
                                    />
                                </div>

                                <div className="form-group col-12 col-md-6">
                                    <label for="optionType" className="col-form-label">
                                        Options Type
                                    </label>
                                    <select class="form-control" name="options" value={this.state.voteType} onChange={(e) => { this.setState({ voteType: e.target.value }) }}>
                                        <option value="" selected disabled className="option">
                                            Select Options Type
                                        </option>
                                        <option value="Radio" className="option">
                                            Radio
                                        </option>
                                        <option value="CheckBox" className="option">
                                            Checkbox
                                        </option>
                                    </select>
                                </div>
                            </Row>


                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <label for="inputOptions" className="col-form-label">
                                        Options
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-input"
                                        id="inputCompany"
                                        placeholder="Options"
                                        // value=""
                                        onChange={item => this.updateInput(item.target.value)}
                                    />
                                </div>


                                <div className="form-group col-12 col-md-6">
                                    <Button className=" asy-primary-submit-button width mt-4" onClick={() => this.addItem()}>
                                        <h6 className="text-center asy-button-heading">
                                            Add Options
                                        </h6>
                                    </Button>
                                    { /*<button type="button" className="submit-button mt-4 mb-8" onClick={() => this.addItem()}> Add Options </button>*/}
                                </div>
                            </Row>

                            <Row>
                                <div className="form-group col-12 col-md-6">
                                    <ListGroup>
                                        {
                                            this.state.options.map(item => {
                                                return (
                                                    <ListGroup.Item>
                                                        <div align="left">
                                                            {item.value}
                                                            <div align="right">
                                                                <FaTrash className="svgdelete"
                                                                    onClick={() => this.deleteItem(item.id)} />
                                                            </div>
                                                        </div>
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </div>

                            </Row>
                            <div className=" text-center my-3">
                                <Button className=" asy-primary-submit-button width" onClick={this.submitHandler.bind(this)}>
                                    <h6 className="text-center asy-button-heading">
                                        {this.state.dyanamicBtnName}
                                    </h6>
                                </Button>
                                <Button className=" asy-primary-submit-button width" onClick={this.handleReset}>
                                    <h6 className="text-center asy-button-heading">
                                        cancel
                                    </h6>
                                </Button>
                            </div>
                            { /*<div align="center">
                            <button type="button" value="Submit" className="submit-button" onClick={this.submitHandler.bind(this)}>
                                {this.state.dyanamicBtnName}
                            </button>

                            <button type="button" value="cancel" className="cancel-button" onClick={this.handleReset}>
                                cancel
                            </button>
                                </div>*/}
                        </form>
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
                    this.state.showAddPoll ? this.showAddPoll() :
                        <div className="jumbotron asy-main-jumbotron">
                            <div className="row asy-main-row">
                                <Col>
                                    <h5 className="asy-main-page-heading">ManagePolls</h5>
                                </Col>
                            </div>
                            <div align="right">
                                <Button className=" asy-primary-submit-button width" onClick={this.handleReset}>
                                    <h6 className="text-center asy-button-heading">
                                        Add Poll
                                    </h6>
                                </Button>
                                {/*<button type="button" className="submit-button" onClick={this.handleReset}>
                                    Add Poll
                </button>*/}
                            </div>
                            <hr className="hr-line" />
                            <div className="form-container">
                                <form>
                                    <div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
                                        <Table className="asy-Table">
                                            <thead>
                                                <tr className="asy-TableHeading">
                                                    <th className="asy-th">Poll Title</th>
                                                    <th className="asy-th">Priority</th>
                                                    <th className="asy-th">Status</th>
                                                    <th className="asy-th">Start Date</th>
                                                    <th className="asy-th">End Date</th>
                                                    <th className="columnwidth asy-th"></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    this.state.data.map((data) => (
                                                        <tr className="asy-TableData" key={data._id}>
                                                            <td>
                                                                {data.pollTitle}
                                                            </td>
                                                            <td>
                                                                {data.priority}
                                                            </td>
                                                            <td>
                                                                {data.status}
                                                            </td>
                                                            <td>
                                                                {data.startDate}
                                                            </td>
                                                            <td>
                                                                {data.endDate}
                                                            </td>

                                                            <td className="btn-align">
                                                                <div className=" text-center mt-3">
                                                                    <Button className=" asy-primary-submit-button width" onClick={this.handleupdateData.bind(this, data._id)}>
                                                                        <h6 className="text-center asy-button-heading">
                                                                            Edit
                                                                        </h6>
                                                                    </Button>
                                                                    <Button className=" asy-primary-submit-button width" onClick={this.handleModalShow.bind(this, data._id)}>
                                                                        <h6 className="text-center asy-button-heading">
                                                                            Delete
                                                                        </h6>
                                                                    </Button>
                                                                </div>
                                                                <Modal show={this.state.showHide}>
                                                                    <Modal.Body>
                                                                        <h6> Are you Sure.Delete This Data ? </h6>
                                                                    </Modal.Body>
                                                                    <Modal.Footer>
                                                                        <div className="row modal-education">
                                                                            <div className="col modal-education">
                                                                                <Button
                                                                                    className="submit-button"
                                                                                    onClick={this.handledeleteData.bind(this,data._id)}
                                                                                >
                                                                                    Delete
                                                                                </Button>
                                                                            </div>
                                                                            <div className="col modal-education">
                                                                                <Button
                                                                                    className="danger-danger submit-button"
                                                                                    onClick={this.handleModalHide}
                                                                                >
                                                                                    Cancel
                                                                                </Button>
                                                                            </div>
                                                                        </div>
                                                                    </Modal.Footer>
                                                                </Modal>
                                                                {/*<Button outline color="secondary" onClick={this.handleupdateData.bind(this, data._id)}>Edit</Button>
                                                    <Button outline color="secondary" onClick={this.handledeleteData.bind(this, data._id)}>Delete</Button>*/}
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
        );
    }
}

export default ManagePolls;