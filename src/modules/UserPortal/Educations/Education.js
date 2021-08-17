import React, { Component } from 'react';
import { Table, Row, Col, Modal, Button } from 'react-bootstrap';
import './Education.css';
import '../../../shared/CSS/blueTheme.css';
import * as services from '../../../services/services';
import Moment from 'react-moment';

import trash1 from '../../../../src/assets/images/trashw.png';
import trash11 from '../../../../src/assets/images/trash.png';
import edit1 from '../../../../src/assets/images/edit (1).png';
import edit11 from '../../../../src/assets/images/edit b(1).png';

class education extends Component {
	state = {
		hideform: false,
		editId: '',
		dyanamicBtnName: 'Submit',
		update: false,
		showHide: '',
		id: '',
		degree: '',
		specialization: '',
		college: '',
		board: '',
		datePassing: '',
		percentage: '',
		userName: 'admin123',
		data: [],
		errors: {}
	};
	//=====================Start Of Validation==========================================
	handleValidations() {
		let degree = this.state.degree;
		let specialization = this.state.specialization;
		let college = this.state.college;
		let board = this.state.board;
		let datePassing = this.state.datePassing;
		let percentage = this.state.percentage;

		let errors = {};
		let formIsValid = true;

		//===================Degree=====================
		if (!degree) {
			formIsValid = false;
			errors['degree'] = 'Cannot be empty';
		} else if (typeof degree !== 'undefined') {
			if (!degree.match(/((^[a-zA-Z]{1,30})+([a-zA-Z.]?)+([a-zA-Z.]?){2,30})/gi)) {
				formIsValid = false;
				errors['degree'] = 'Only letters & also check for any Space';
			}
		}

		//===================Specialization=====================
		if (!specialization) {
			formIsValid = false;
			errors['specialization'] = 'Cannot be empty';
		} else if (typeof specialization !== 'undefined') {
			if (!specialization.match(/^[a-zA-Z.]+$/i)) {
				formIsValid = false;
				errors['specialization'] = 'Only letters & also check for any Space';
			}
		}
		//===================College=====================
		if (!college) {
			formIsValid = false;
			errors['college'] = 'Cannot be empty';
		} else if (typeof college !== 'undefined') {
			if (!college.match(/(([a-zA-Z]{1,30})+([a-zA-Z.,]?){3,30})/gi)) {
				formIsValid = false;
				errors['college'] = 'Only letters & also check for any Space';
			}
		}

		//===================Board=====================
		if (!board) {
			formIsValid = false;
			errors['board'] = 'Cannot be empty';
		} else if (typeof board !== 'undefined') {
			if (!board.match(/^[a-zA-Z]+$/i)) {
				formIsValid = false;
				errors['board'] = 'Only letters & also check for any Space';
			}
		}

		//===================PassingDate=====================
		if (!datePassing) {
			formIsValid = false;
			errors['datePassing'] = 'Cannot be empty';
		} else if (typeof datePassing !== 'undefined') {
			if (!datePassing.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/gi)) {
				formIsValid = false;
				errors['datePassing'] = 'date format DD/MM/YYYY';
			}
		}

		//===================Percentage=====================
		if (!percentage) {
			formIsValid = false;
			errors['percentage'] = 'Cannot be empty';
		} else if (typeof percentage !== 'undefined') {
			// (/^((100)|(\d{1,2}(\.\d*)?))$/gi))
			if (!String(percentage).match(/^((100)|(\d{1,2}(\.\d*)?))$/gi)) {
				formIsValid = false;
				errors['percentage'] = 'Only Number & also check for any Space';
			}
		}
		//===============================================================
		this.setState({
			errors: errors
		});
		return formIsValid;
	}
	//=====================End Of Validation==========================================

	componentDidMount() {
		this.getUsersData();
	}
	async getUsersData() {
		await services.getService('education').then((res) => {
			console.log(res.data);
			this.setState({
				data: res.data.EducationDetail
			});
		});
	}

	submitHandler = async (e) => {
		console.log(this.state.data);
		e.preventDefault();

		const data = {
			degree: this.state.degree,
			specialization: this.state.specialization,
			college: this.state.college,
			board: this.state.board,
			datePassing: this.state.datePassing,
			percentage: this.state.percentage
		};
		if (this.state.editId === '') {
			if (this.handleValidations()) {
				services.postService('education', data).then((res) => {
					console.log(res.data);

					this.getUsersData();
					this.setState({
						hideform: !this.state.hideform
					});
				});
			}
		} else {
			if (this.handleValidations()) {
				await services.patchService('education', this.state.editId, data).then((res) => {
					console.log(res.data);
					this.getUsersData();
					this.setState({
						hideform: !this.state.hideform,
						editId: ''
					});
				});
			}
		}
	};

	handledeleteData = async () => {
		services.deleteService('education', this.state.editId).then((res) => {
			console.log(res.data);
			const newData = this.state.data.filter((obj) => obj._id !== this.state.editId);
			this.setState({
				data: newData,
				showHide: false,
				editId: ''
			});
		});
	};

	handleUpdateData = async (id, e) => {
		const newData = this.state.data.filter((obj) => obj._id === id)[0];
		this.setState({
			degree: newData.degree,
			specialization: newData.specialization,
			college: newData.college,
			board: newData.board,
			datePassing: newData.datePassing,
			percentage: newData.percentage,
			editId: newData._id,
			dyanamicBtnName: 'Update'
		});
	};

	handleReset = (form) => {
		this.setState({
			degree: '',
			specialization: '',
			college: '',
			board: '',
			datePassing: '',
			percentage: '',
			errors: ''
		});
	};

	handleManualReset = (event) => {
		event.preventDefault();
		this.form.reset();
	};

	handleModalShow = (id) => {
		this.setState({
			showHide: !false,
			editId: id
		});
	};

	handleModalHide = () => {
		this.setState({
			showHide: false,
			editId: ''
		});
	};

	hideform = () => {
		return !this.state.hideform ? (
			this.hideform()
		) : (
			<div>
				{/* <div className="jumbotron asy-main-jumbotron"> */}
				<div className="form-container asy-mainBoxBorder">
					<form
						onSubmit={() =>
							this.setState({
								hideform: false
							})}
						ref={(form) => (this.form = form)}
						onReset={this.handleReset}
					>
						{/* <div className="card asy-card-primary-design asy-education-primary-card">
                <div className="card-body"> */}
						<Row>
							<div className="form-group col-12 col-md-6">
								<label for="inputdegree" className="asy-FormLabel">
									Degree
								</label>
								<input
									onChange={(e) => {
										this.setState({ degree: e.target.value });
									}}
									value={this.state.degree}
									type="text"
									className="form-control asy-InputValues"
									id="inputdegree"
									placeholder="Degree"
									required
								/>
								<div className="error-msg" style={{ color: 'red' }}>
									{this.state.errors['degree']}
								</div>
							</div>

							<div className="form-group col-12 col-md-6">
								<label for="inputPassword" className="asy-FormLabel">
									Specialization
								</label>
								<input
									onChange={(e) => {
										this.setState({ specialization: e.target.value });
									}}
									value={this.state.specialization}
									type="text"
									className="form-control asy-InputValues"
									id="inputPassword"
									placeholder="Specialization"
									required
								/>
								<div style={{ color: 'red' }}>{this.state.errors['specialization']}</div>
							</div>
						</Row>

						<Row>
							<div className="form-group col-12 col-md-6">
								<label for="inputdegree" className="asy-FormLabel">
									College / School
								</label>
								<input
									onChange={(e) => {
										this.setState({ college: e.target.value });
									}}
									value={this.state.college}
									type="text"
									className="form-control asy-InputValues"
									id="inputdegree"
									placeholder="College/School"
									required
								/>
								<div style={{ color: 'red' }}>{this.state.errors['college']}</div>
							</div>

							<div className="form-group col-12 col-md-6">
								<label for="inputPassword" className="asy-FormLabel">
									University / Board
								</label>
								<input
									onChange={(e) => {
										this.setState({ board: e.target.value });
									}}
									value={this.state.board}
									type="text"
									className="form-control asy-InputValues"
									id="inputPassword"
									placeholder="University/Board"
									required
								/>
								<div style={{ color: 'red' }}>{this.state.errors['board']}</div>
							</div>
						</Row>

						<Row>
							<div className="form-group col-12 col-md-6">
								<label for="inputdegree" className="asy-FormLabel">
									Year Of Passing
								</label>
								<input
									onChange={(e) => {
										this.setState({ datePassing: e.target.value });
									}}
									value={this.state.datePassing}
									type="text"
									className="form-control asy-InputValues"
									id="inputdegree"
									placeholder="Year of Passing(DD/MM/YYYY)"
									required
								/>
								<div style={{ color: 'red' }}>{this.state.errors['datePassing']}</div>
							</div>

							<div className="form-group col-12 col-md-6">
								<label for="inputPassword" className="asy-FormLabel">
									Percentage
								</label>
								<input
									onChange={(e) => {
										this.setState({ percentage: e.target.value });
									}}
									value={this.state.percentage}
									type="text"
									className="form-control asy-InputValues"
									id="inputPassword"
									placeholder="percentage"
									required
								/>
								<div style={{ color: 'red' }}>{this.state.errors['percentage']}</div>
							</div>
						</Row>

						<div className="text-center">
							<button
								onClick={this.submitHandler.bind(this)}
								type="button"
								className="asy-secondary-submit-button"
							>
								{this.state.dyanamicBtnName}
							</button>
							<button
								type="button"
								className="asy-secondary-cancle-button"
								onClick={() =>
									this.setState({
										hideform: !this.state.hideform
									})}
								onClickCapture={this.handleManualReset}
								value="reset"
							>
								Cancel
							</button>
						</div>
						{/* </div>
              </div> */}
					</form>
				</div>
				{/* </div> */}
			</div>
		);
	};

	render() {
		return (
			<div>
				<div className="row asy-main-row" />
				{this.state.hideform ? (
					this.hideform()
				) : (
					<div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
						<Table className="asy-Table">
							<thead>
								<tr className="asy-TableHeading">
									<th className="asy-th"> Degree </th>
									<th className="asy-th"> Specialization </th>
									<th className="asy-th"> College / School </th>
									<th className="asy-th"> University / Board </th>
									<th className="asy-th"> Year of Passing </th>
									<th className="asy-th"> Percentage </th>
									<th className="asy-th"> Action </th>
									<th className="asy-th">ADD</th>
								</tr>
							</thead>
							<tbody>
								{this.state.data.map((data, index) => (
									<tr className="asy-TableDataRow" key={index}>
										<td className="asy-TableData"> {data.degree} </td>
										<td className="asy-TableData"> {data.specialization} </td>
										<td className="asy-TableData"> {data.college} </td>
										<td className="asy-TableData"> {data.board} </td>
										<td className="asy-TableData">
											<Moment format="D MMM YYYY">{data.datePassing}</Moment>
										</td>
										<td className="asy-TableData"> {data.percentage} </td>
										<td className="asy-TableData">
											<button
												className="editbutton"
												update
												onClick={this.handleUpdateData.bind(this, data._id)}
											>
												{index % 2 === 0 ? (
													<img
														src={edit1}
														className="asy-Edit"
														onClick={() =>
															this.setState({
																hideform: true
															})}
														alt="Edit-Icon Education Page"
													/>
												) : (
													<img
														src={edit11}
														className="asy-Edit"
														onClick={() =>
															this.setState({
																hideform: true
															})}
														alt="Edit-Icon Education Page"
													/>
												)}
											</button>
											<button
												className="deletebutton"
												onClick={this.handleModalShow.bind(this, data._id)}
											>
												{index % 2 === 0 ? (
													<img
														src={trash1}
														className="asy-Trash"
														alt="Delete-Icon Education Page"
													/>
												) : (
													<img
														src={trash11}
														className="asy-Trash"
														alt="Delete-Icon Education Page"
													/>
												)}
											</button>
											<Modal show={this.state.showHide} className="text-center">
												<Modal.Body>
													<h6> Are you Sure.Delete This Data ? </h6>
												</Modal.Body>
												<Modal.Footer className="asy-modal-footer">
													<div className="row modal-Row ">
														<div className="col modal-Row ">
															<Button
																className="asy-secondary-submit-button"
																onClick={this.handledeleteData}
															>
																Delete
															</Button>
														</div>
														<div className="col modal-Row">
															<Button
																className="asy-secondary-cancle-button "
																onClick={this.handleModalHide}
															>
																Cancel
															</Button>
														</div>
													</div>
												</Modal.Footer>
											</Modal>
										</td>
										<td className="asy-TableData">
											<Col>
												{this.state.hideform ? (
													!this.hideform()
												) : (
													<button
														className="add-button-flip"
														onClick={() =>
															this.setState({
																hideform: true,
																dyanamicBtnName: 'Submit'
															})}
													>
														ADD
													</button>
												)}
											</Col>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				)}
			</div>
		);
	}
}

export default education;
