import React, { Component } from 'react';
import { Row, Table, Col, Modal, Button } from 'react-bootstrap';
import * as services from '../../../services/services';
import trash1 from '../../../../src/assets/images/trashw.png';
import trash2 from '../../../../src/assets/images/trashw@2x.png';
import trash3 from '../../../../src/assets/images/trashw@3x.png';
import trash11 from '../../../../src/assets/images/trash.png';
import trash12 from '../../../../src/assets/images/trash@2x.png';
import trash13 from '../../../../src/assets/images/trash@3x.png';
import edit1 from '../../../../src/assets/images/edit (1).png';
import edit2 from '../../../../src/assets/images/edit (1)@2x.png';
import edit3 from '../../../../src/assets/images/edit (1)@3x.png';
import edit11 from '../../../../src/assets/images/edit b(1).png';
import edit12 from '../../../../src/assets/images/edit b(1)@2x.png';
import edit13 from '../../../../src/assets/images/edit b(1)@3x.png';
export default class UserReference extends Component {
	constructor(props) {
		super(props);
		this.state = {
			onHideForm: false,
			editId: '',
			dyanamicBtnName: 'Submit',
			update: false,
			id: '',
			showHide: '',
			name: '',
			title: '',
			company: '',
			email: '',
			mobile: '',
			userName: 'admin123',
			data: [],
			errors: {}
		};
	}

	//=====================Start Of Validation==========================================
	handleValidations() {
		let name = this.state.name;
		let title = this.state.title;
		let company = this.state.company;
		let email = this.state.email;
		let mobile = this.state.mobile;

		let errors = {};
		let formIsValid = true;

		//===================name=====================
		if (!name) {
			formIsValid = false;
			errors['name'] = 'Cannot be empty';
		} else if (typeof name !== 'undefined') {
			if (!name.match(/([a-zA-Z]{3,50})+$/i)) {
				formIsValid = false;
				errors['name'] = 'Only letters & also check for any Space';
			}
		}
		//===================title=====================
		if (!title) {
			formIsValid = false;
			errors['title'] = 'Cannot be empty';
		} else if (typeof title !== 'undefined') {
			if (!title.match(/([a-zA-Z]{3,50})+$/i)) {
				formIsValid = false;
				errors['title'] = 'Only letters & also check for any Space';
			}
		}
		//===================company=====================
		if (!company) {
			formIsValid = false;
			errors['company'] = 'Cannot be empty';
		} else if (typeof company !== 'undefined') {
			if (!company.match(/([a-zA-Z]{3,50})+$/i)) {
				formIsValid = false;
				errors['company'] = 'Only letters';
			}
		}
		//===================email=====================
		if (!email) {
			formIsValid = false;
			errors['email'] = 'Cannot be empty';
		} else if (typeof email !== 'undefined') {
			if (!email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
				formIsValid = false;
				errors['email'] = 'Please Enter A Valid Email Address';
			}
		}
		//===================mobile=====================
		if (!mobile) {
			formIsValid = false;
			errors['mobile'] = 'Cannot be empty';
		} else if (typeof mobile !== 'undefined') {
			if (!String(mobile).match(/^(\+\d{1,3}[- ]?)?\d{10}$/gm)) {
				formIsValid = false;
				errors['mobile'] = 'Please Enter A Valid Mobile Number';
			}
		}

		this.setState({
			errors: errors
		});
		return formIsValid;
		//=====================End Of Validation==========================================
	}

	componentDidMount() {
		this.onGetUserData();
	}
	onGetUserData = async () => {
		await services.getService('references').then((res) => {
			this.setState({ data: res.data.Referance });
		});
	};
	onSubmitHandler = async () => {
		this.state.showHide = false;
		const data = {
			name: this.state.name,
			title: this.state.title,
			company: this.state.company,
			email: this.state.email,
			mobile: this.state.mobile
		};
		if (this.state.editId === '') {
			if (this.handleValidations()) {
				await services.postService('references', data).then((res) => {
					this.onGetUserData();
					this.handleReset();
					this.setState({ onHideForm: !this.state.onHideForm });
				});
			}
		} else {
			if (this.handleValidations()) {
				await services.patchService('references', this.state.editId, data).then((res) => {
					this.onGetUserData();
					this.setState({ onHideForm: !this.state.onHideForm, editId: '' });
					this.handleReset();
				});
			}
		}
	};

	onRemoveData = async () => {
		await services.deleteService('references', this.state.editId).then((res) => {
			const newData = this.state.data.filter((obj) => obj._id !== this.state.editId);
			this.setState({ data: newData, showHide: false, editId: '' });
		});
	};
	onEditData = (id, e) => {
		const newData = this.state.data.filter((obj) => obj._id === id)[0];
		this.setState({
			name: newData.name,
			title: newData.title,
			company: newData.company,
			email: newData.email,
			mobile: newData.mobile,
			editId: newData._id,
			dyanamicBtnName: 'Update'
		});
	};
	onHideForm = () => {
		return !this.state.onHideForm ? (
			this.onHideForm()
		) : (
			<div className="form-container asy-mainBoxBorder">
				<form
					onSubmit={() => this.setState({ onHideForm: false })}
					ref={(form) => (this.form = form)}
					onReset={this.handleReset}
				>
					<Row>
						<div className="form-group col-12 col-md-6">
							<label for="inputName" className="asy-FormLabel">
								Name
							</label>
							<input
								type="text"
								className="form-control asy-InputValues"
								id="inputName"
								placeholder="Enter Your Name"
								onChange={(e) => {
									this.setState({
										name: e.target.value
									});
								}}
								value={this.state.name}
								required
							/>
							<div style={{ color: 'red' }}>{this.state.errors['name']}</div>
						</div>
						<div className="form-group col-12 col-md-6">
							<label for="inputEmail" className="asy-FormLabel">
								Email
							</label>
							<input
								type="text"
								className="form-control asy-InputValues"
								id="inputEmail"
								placeholder="Enter Email Address"
								onChange={(e) => {
									this.setState({
										email: e.target.value
									});
								}}
								value={this.state.email}
								required
							/>
							<div style={{ color: 'red' }}>{this.state.errors['email']}</div>
						</div>
					</Row>
					<Row>
						<div className="form-group col-12 col-md-6">
							<label for="inputTitle" className="asy-FormLabel">
								Title
							</label>
							<input
								type="text"
								className="form-control asy-InputValues"
								id="inputTitle"
								placeholder="Enter Title"
								onChange={(e) => {
									this.setState({
										title: e.target.value
									});
								}}
								value={this.state.title}
								required
							/>
							<div style={{ color: 'red' }}>{this.state.errors['title']}</div>
						</div>
						<div className="form-group col-12 col-md-6">
							<label for="inputMobile" className="asy-FormLabel">
								Mobile
							</label>
							<input
								type="text"
								className="form-control asy-InputValues"
								id="inputMobile"
								placeholder="Enter Mobile Number"
								onChange={(e) => {
									this.setState({
										mobile: e.target.value
									});
								}}
								value={this.state.mobile}
								required
							/>
							<div style={{ color: 'red' }}>{this.state.errors['mobile']}</div>
						</div>
					</Row>
					<Row>
						<div className="form-group col-12 col-md-6">
							<label for="inputCompany" className="asy-FormLabel">
								Company
							</label>
							<input
								type="text"
								className="form-control asy-InputValues"
								id="inputCompany"
								placeholder="Enter Company Name"
								onChange={(e) => {
									this.setState({
										company: e.target.value
									});
								}}
								value={this.state.company}
								required
							/>
							<div style={{ color: 'red' }}>{this.state.errors['company']}</div>
						</div>
					</Row>
					<div className="text-center">
						<button
							type="button"
							className="asy-secondary-submit-button"
							onClick={() => {
								this.onSubmitHandler();
							}}
						>
							{this.state.dyanamicBtnName}
						</button>
						<button
							type="button"
							className="asy-secondary-cancle-button"
							onClick={() => {
								this.setState({ onHideForm: !this.state.onHideForm });
								this.handleManualReset();
							}}
							value="reset"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		);
	};

	handleModalShow = (id) => {
		this.setState({ showHide: !false, editId: id });
	};
	handleModalHide = () => {
		this.setState({ showHide: false, editId: '' });
	};
	handleReset = () => {
		this.setState({
			id: '',
			name: '',
			title: '',
			email: '',
			company: '',
			mobile: '',
			errors: ''
		});
	};
	handleManualReset = () => {
		this.form.reset(); // resets uncontrolled fields ("username")
	};
	render() {
		return (
			<div className="jumbotron asy-main-jumbotron">
				<Row>
					<Col>
						<h5 className="asy-main-page-heading">References</h5>
					</Col>
					<Col className="d-flex flex-row-reverse">
						{this.state.onHideForm ? (
							!this.onHideForm()
						) : (
							<button
								className="add-button-flip"
								onClick={() => this.setState({ onHideForm: true, dyanamicBtnName: 'Submit' })}
							>
								ADD
							</button>
						)}
					</Col>
				</Row>

				{/* <hr className="asy-hr-line" /> */}
				<div>
					{this.state.onHideForm ? (
						this.onHideForm()
					) : (
						<div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
							<Table className="asy-Table">
								<thead>
									<tr className="asy-TableHeading">
										<th className="asy-th">Name</th>
										<th className="asy-th">Title</th>
										<th className="asy-th">Company</th>
										<th className="asy-th">Email</th>
										<th className="asy-th">Mobile</th>
										<th className="asy-th">Edit/Delete</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((data, index) => (
										<tr className="asy-TableData" key={index}>
											<td>{data.name}</td>
											<td>{data.title}</td>
											<td>{data.company}</td>
											<td>{data.email}</td>
											<td>{data.mobile}</td>
											<td>
												<button
													className="editbutton"
													onClick={this.onEditData.bind(this, data._id)}
												>
													{index % 2 === 0 ? (
														<img
															src={edit1}
															srcset={(edit2, edit3)}
															className="asy-Edit"
															onClick={() => this.setState({ onHideForm: true })}
														/>
													) : (
														<img
															src={edit11}
															srcset={(edit12, edit13)}
															className="asy-Edit"
															onClick={() => this.setState({ onHideForm: true })}
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
															srcset={(trash2, trash3)}
															className="asy-Trash"
														/>
													) : (
														<img
															src={trash11}
															srcset={(trash12, trash13)}
															className="asy-Trash"
														/>
													)}
												</button>

												<Modal show={this.state.showHide} className="text-center">
													<Modal.Body>
														<h6>Are you sure ! Delete this Data ?</h6>
													</Modal.Body>
													<Modal.Footer className="asy-modal-footer">
														<div className="row modal-Row ">
															<div className="col modal-Row">
																<Button onClick={this.onRemoveData} className="asy-secondary-submit-button">Delete</Button>
															</div>
															<div className="col modal-Row ">
																<Button onClick={this.handleModalHide} className="asy-secondary-cancle-button ">Close</Button>
															</div>
														</div>
													</Modal.Footer>
												</Modal>
											</td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
					)}
				</div>
			</div>
		);
	}
}
