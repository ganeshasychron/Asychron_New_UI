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
			uploadOn: '',
			showHide: '',
			name: '',
			documentName: '',
			data: [],
			errors: {}
		};
	}

	//=====================Start Of Validation==========================================
	handleValidations() {
		let name = this.state.name;
		let documentName = this.state.documentName;
		let errors = {};
		let formIsValid = true;

		//===================name=====================
		if (!name) {
			formIsValid = false;
			errors['policyName'] = 'Cannot be empty';
		} else if (typeof name !== 'undefined') {
			if (!name.match(/[\D][a-zA-Z\Da-zA-Z][\D]+$/g)) {
				formIsValid = false;
				errors['policyName'] = 'Only letters & also check for any Space';
			}
		}

		if (documentName === '') {
			formIsValid = false;
			errors['inputdocumentName'] = 'Cannot be empty';
		} else if (documentName !== '') {
			if (!documentName.match(/\.(jpg|jpeg|png|gif|txt|pdf)$/)) {
				formIsValid = false;
				errors['inputdocumentName'] = 'Check file type and select pdf,jpeg.jpg files';
			}
		}

		this.setState({
			errors: errors
		});
		return formIsValid;
		//=====================End Of Validation==========================================
	}
	componentDidUpdate() {
		// this.state.uploadOn = new Date();
		// this.state.uploadOn.getDay();
		// console.log(this.state.uploadOn);
	}
	componentDidMount() {
		this.onGetUserData();
	}
	onGetUserData = async () => {
		await services.getService('policies').then((res) => {
			this.setState({ data: res.data.Policy });
		});
	};
	onSubmitHandler = async () => {
		this.state.showHide = false;
		const data = {
			name: this.state.name,
			documentName: this.state.documentName.replace(/^.*[\\/]/, ''),
			uploadOn: this.state.uploadOn
		};
		if (this.state.editId === '') {
			if (this.handleValidations()) {
				await services.postService('policies', data).then((res) => {
					this.onGetUserData();
					this.handleReset();
					this.setState({ onHideForm: !this.state.onHideForm });
				});
			}
		} else {
			if (this.handleValidations()) {
				await services.patchService('policies', this.state.editId, data).then((res) => {
					this.onGetUserData();
					this.setState({ onHideForm: !this.state.onHideForm, editId: '' });
					this.handleReset();
				});
			}
		}
	};

	onRemoveData = async () => {
		await services.deleteService('policies', this.state.editId).then((res) => {
			const newData = this.state.data.filter((obj) => obj._id !== this.state.editId);
			this.setState({ data: newData, showHide: false, editId: '' });
		});
	};
	onEditData = (id, e) => {
		const newData = this.state.data.filter((obj) => obj._id === id)[0];
		this.setState({
			name: newData.name,
			// documentName: newData.documentName,
			// uploadOn: newData.uploadOn,
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
								Policy Name
							</label>
							<input
								type="text"
								className="form-control form-input"
								id="policyName"
								placeholder="Enter Policy Name"
								onChange={(e) => {
									this.setState({
										name: e.target.value
									});
								}}
								value={this.state.name}
								required
							/>
							<div className="error-msg">{this.state.errors['policyName']}</div>
						</div>
						<div className="form-group col-12 col-md-6">
							<label for="inputFile" className="col-form-label">
								Upload
							</label>
							<input
								type="File"
								className="form-control form-input"
								id="inputdocumentName"
								placeholder="Upload File"
								onChange={(e) => {
									this.setState({
										documentName: e.target.value,
										uploadOn: new Date()
									});
								}}
								value={this.state.documentName}
								required
							/>
							<div className="error-msg">{this.state.errors['email']}</div>
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
			documentName: '',
			uploadOn: '',
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
						<h5 className="page-heading">Policies</h5>
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
										<th>Policy Name</th>
										<th>Documents</th>
										<th>Upload On</th>
										<th>Edit/Delete</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((data) => (
										<tr key={data._id}>
											<td>{data.name}</td>
											<td>{data.documentName}</td>
											<td>{data.uploadOn}</td>

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
