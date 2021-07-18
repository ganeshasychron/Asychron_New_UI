import React, { Component } from 'react';
import { Row, Table, Col, Modal, Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
import * as services from '../../../services/services';

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
			<div className="form-container">
				<form
					onSubmit={() => this.setState({ onHideForm: false })}
					ref={(form) => (this.form = form)}
					onReset={this.handleReset}
				>
					<Row>
						<div className="form-group col-12 col-md-6">
							<label for="inputName" className="col-form-label">
								Name
							</label>
							<input
								type="text"
								className="form-control form-input"
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
							<label for="inputEmail" className="col-form-label">
								Email
							</label>
							<input
								type="text"
								className="form-control form-input"
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
							<label for="inputTitle" className="col-form-label">
								Title
							</label>
							<input
								type="text"
								className="form-control form-input"
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
							<label for="inputMobile" className="col-form-label">
								Mobile
							</label>
							<input
								type="text"
								className="form-control form-input"
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
							<label for="inputCompany" className="col-form-label">
								Company
							</label>
							<input
								type="text"
								className="form-control form-input"
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
							className="submit-button"
							onClick={() => {
								this.onSubmitHandler();
							}}
						>
							{this.state.dyanamicBtnName}
						</button>
						<button
							type="button"
							className="cancel_button education"
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
			<div className="jumbotron jumbo-form">
				<Row>
					<Col>
						<h5 className="page-heading">References</h5>
					</Col>
					<Col className="d-flex flex-row-reverse">
						{this.state.onHideForm ? (
							!this.onHideForm()
						) : (
							<button
								className="submit-button"
								onClick={() => this.setState({ onHideForm: true, dyanamicBtnName: 'Submit' })}
							>
								ADD
							</button>
						)}
					</Col>
				</Row>

				<hr className="hr-line" />
				<div>
					{this.state.onHideForm ? (
						this.onHideForm()
					) : (
						<div className="table-responsive">
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Title</th>
										<th>Company</th>
										<th>Email</th>
										<th>Mobile</th>
										<th>Edit/Delete</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((data) => (
										<tr key={data._id}>
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
													<FaEdit
														className="svgedit"
														onClick={() => this.setState({ onHideForm: true })}
													/>
												</button>
												<button
													className="deletebutton"
													onClick={this.handleModalShow.bind(this, data._id)}
												>
													<FaTrash className="svgdelete" />
												</button>

												<Modal show={this.state.showHide}>
													<Modal.Body>
														<h6>Are you sure ! Delete this Data ?</h6>
													</Modal.Body>
													<Modal.Footer>
														<Button onClick={this.onRemoveData}>Delete</Button>
														<Button onClick={this.handleModalHide}>Close</Button>
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
