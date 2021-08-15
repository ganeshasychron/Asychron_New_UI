import React from 'react';
import { Table, Row, Col, Modal, Button } from 'react-bootstrap';
import styles from './Certification.module.css';
import * as services from '../../../services/services';
import Moment from 'react-moment';

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

class Certification extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			FormOpen: false,
			ListOpen: true,
			id: '',
			showHide: '',
			editId: '',
			update: false,
			dyanamicBtnName: 'Submit',
			errors: {},
			data: [],

			name: "",
			description: "",
			typeCertificate: "",
			uploadedOn: "",
			Certificates: "",
			userName: "admin123"
		};
	}

	componentDidMount() {
		this.getUsersData();
	}
	handleValidation() {
		let name = this.state.name;
		let description = this.state.description;
		let typeCertificate = this.state.typeCertificate;
		let Certificates = this.state.Certificates;
		let errors = {};
		let formIsValid = true;

		//==================branchAddress======================
		if (!name) {
			formIsValid = false;
			errors['name'] = 'Cannot be empty';
		} else if (typeof name !== 'undefined') {
			if (!name.match(/[\D][a-zA-Z\Da-zA-Z][\D]+$/g)) {
				formIsValid = false;
				errors['name'] = 'Only letters & also check for any Space';
			}
		}
		//===================bankName=====================
		if (!description) {
			formIsValid = false;
			errors['description'] = 'Cannot be empty';
		} else if (typeof bankName !== 'undefined') {
			if (!description.match(/[\D][a-zA-Z\Da-zA-Z][\D]+$/g)) {
				formIsValid = false;
				errors['description'] = 'Only letters';
			}
		}
		//=================accountNumber=======================
		if (!typeCertificate) {
			formIsValid = false;
			errors['type'] = 'Cannot be empty';
		} else if (typeof accountNum !== 'undefined') {
			if (!typeCertificate.match(/[\D][a-zA-Z\Da-zA-Z][\D]+$/g)) {
				formIsValid = false;
				errors['type'] = 'Only letters';
			}
		}
		// // if (!Certificates) {
		// // 	formIsValid = false;
		// // 	errors['certificate'] = 'Cannot be empty';
		// // } else
		// if (typeof Certificates !== 'undefined') {
		// 	if (!Certificates.match(/(\.jpg|\.jpeg|\.png|\.pdf)$/i)) {
		// 		formIsValid = false;
		// 		errors['certificate'] = 'add files which are have .jpg .jpeg .png .pdf extensions';
		// 	}
		// }
		//==================================================
		this.setState({
			errors: errors
		});
		return formIsValid;
	}
	async getUsersData() {
		services.getService('certificates').then((res) => {
			console.log(res.data);
			this.setState({ data: res.data.Certificates });
		});
	}

	submitHandler = async () => {
		console.log(this.state.data);
		const data = {
			name: this.state.name,
			description: this.state.description,
			typeCertificate: this.state.typeCertificate,
			Certificates: this.state.Certificates
		};

		if (this.state.editId === '') {
			if (this.handleValidation()) {
				services.postService('certificates', data).then((res) => {
					this.getUsersData();
					this.setState({ ListOpen: true, FormOpen: false });
				});
			} else {
				console.log('fill the form ');
			}
		} else {
			if (this.handleValidation()) {
				await services.patchService('certificates', this.state.editId, data).then((res) => {
					this.getUsersData();
					this.setState({ ListOpen: true, FormOpen: false, editId: '' });
				});
			} else {
				console.log('form is Not Updated');
			}
		}
	};

	handledeleteData = async () => {
		services.deleteService('certificates', this.state.editId).then((res) => {
			const newData = this.state.data.filter((obj) => obj._id !== this.state.editId);
			this.setState({ data: newData, showHide: false, editId: '' });
		});
	};

	handleUpdateData = async (id, e) => {
		const newData = this.state.data.filter((obj) => obj._id === id)[0];
		this.setState({
			name: newData.name,
			typeCertificate: newData.typeCertificate,
			description: newData.description,
			editId: newData._id,
			dyanamicBtnName: 'Update'
		});
	};

	handleReset = (form) => {
		this.setState({
			name: '',
			description: '',
			typeCertificate: '',
			errors: ''
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
		this.setState({ showHide: false, editId: '' });
	};

	render() {
		return (
			<div>
				<div className="jumbotron asy-main-jumbotron">
					{this.state.ListOpen ? (
						<div>
							<Row className={styles.Row} >
								<div className="row asy-main-row">
									<Col>
										<h5 className="asy-main-page-heading"> Certification </h5>
									</Col>
								</div>
								<Col>
									<div align="right" className="row-col-4 " >
										<Button
											className="add-button-flip"
											onClick={() =>
												this.setState({
													ListOpen: false,
													FormOpen: true,
													dyanamicBtnName: 'Submit'
												})}
										>
											ADD
										</Button>
									</div>
								</Col>
							</Row>

							<div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
								<Table className="asy-Table">
									<thead>
										<tr className="asy-TableHeading">
											<th className="asy-th">Certificate Name</th>
											<th className="asy-th">Certificate Type</th>
											<th className="asy-th">Uploaded On</th>
											<th className="asy-th">Action</th>
										</tr>
									</thead>
									<tbody>
										{this.state.data.map((data, index) => (
											<tr className="asy-TableData" key={index}>
												<td> {data.name} </td>
												<td> {data.typeCertificate} </td>
												<td><Moment format="D MMM YYYY">
													{data.updatedOn}
												</Moment> </td>
												<td>
													<button className="editbutton" update onClick={() => this.setState({ ListOpen: false, FormOpen: true })} >

														{index % 2 === 0 ? (
															<img
																src={edit1}
																srcset={(edit2, edit3)}
																className="asy-Edit" onClick={this.handleUpdateData.bind(this, data._id)} />
														) : (
															<img
																src={edit11}
																srcset={(edit12, edit13)}
																className="asy-Edit" onClick={this.handleUpdateData.bind(this, data._id)} />
														)}
													</button>
													<button className="deletebutton" onClick={this.handleModalShow.bind(this, data._id)} >
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
															<h6> Are you Sure. Delete This Data? </h6>
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
																<div className="col modal-Row ">
																	<Button
																		className="asy-secondary-cancle-button"
																		onClick={this.handleModalHide}
																	>
																		Cancel
																	</Button>
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
						</div>
					) : null}
					{this.state.FormOpen ? (
						<div>
							<div className="row asy-main-row">
								<Col>
									<h5 className="asy-main-page-heading"> Certification </h5>
								</Col>
							</div>

							<div className="form-container asy-mainBoxBorder">
								<form
									onSubmit={() =>
										this.setState({ ListOpen: true }) & this.setState({ FormOpen: false })}
									ref={(form) => (this.form = form)}
									onReset={this.handleReset}
								>
									<Row>
										<div className="form-group col-12 col-md-6">
											<label for="inputdegree" className="col-form-label">
												Name
											</label>
											<input
												type="text"
												className="form-control asy-InputValues"
												id="inputdegree"
												placeholder="Name"
												ref="name"
												onChange={(e) => {
													this.setState({ name: e.target.value });
												}}
												value={this.state.name}
												required
											/>
											<div className="error-msg">{this.state.errors['name']}</div>
										</div>
										<div className="form-group col-12 col-md-6">
											<label for="inputPassword" className="col-form-label">
												Type of Certification
											</label>
											<input
												type="text"
												className="form-control asy-InputValues"
												id="inputPassword"
												placeholder="Type of Certification"
												ref="type"
												onChange={(e) => {
													this.setState({ typeCertificate: e.target.value });
												}}
												value={this.state.typeCertificate}
												required
											/>
											<div className="error-msg">{this.state.errors['type']}</div>
										</div>
									</Row>
									<Row>
										<div className="form-group col-12 col-md-6">
											<label for="inputdegree" className="col-form-label">
												Description
											</label>
											<textarea
												type="textarea"
												className="form-control asy-InputValues"
												id="inputdegree"
												placeholder="Description"
												ref="description"
												onChange={(e) => {
													this.setState({ description: e.target.value });
												}}
												value={this.state.description}
												required
											/>
											<div className="error-msg">{this.state.errors['description']}</div>
										</div>
										<div className="form-group col-12 col-md-6">
											<label for="inputPassword" className="col-form-label">
												Certificate
											</label>
											<input
												type="File"
												className="form-control asy-InputValues"
												id="inputPassword"
												ref="certificate"
												onChange={(e) => {
													this.setState({ uploadedOn: e.target.value });
												}}
												placeholder="Certificate"
											/>
											<div className="error-msg">{this.state.errors['certificate']}</div>
										</div>
									</Row>

									<div className="text-center">
										<Button
											className="asy-secondary-submit-button"
											onClick={() => { this.submitHandler(); }} 	>
											{this.state.dyanamicBtnName}
										</Button>

										<Button
											className="asy-secondary-cancle-button"
											onClick={() => this.setState({ ListOpen: true, FormOpen: false })}
											onClickCapture={this.handleManualReset}
											value="reset" >
											Cancel
										</Button>
									</div>
								</form>
							</div>

						</div>
					) : null}
				</div>
			</div>
		);
	}
}
export default Certification;
