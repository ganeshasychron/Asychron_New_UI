import React from 'react';
import { Table, Row, Col, Modal, Button } from 'react-bootstrap';
import styles from './Certification.module.css';
import * as services from '../../../services/services';
import Moment from 'react-moment';

import trash1 from '../../../../src/assets/images/trashw.png';
import trash11 from '../../../../src/assets/images/trash.png';
import edit1 from '../../../../src/assets/images/edit (1).png';
import edit11 from '../../../../src/assets/images/edit b(1).png';
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

			name: '',
			description: '',
			typeCertificate: '',
			uploadedOn: '',
			Certificates: '',
			userName: 'admin123'
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
			if (!name.match(/[A-Za-z0-9|.|\-|\s|,]/)) {
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
			if (!typeCertificate.match(/^[a-zA-Z\s]*$/)) {
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
				<div>
					{this.state.ListOpen ? (
						<div>
							<div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
								<Table className="asy-Table">
									<thead>
										<tr className="asy-TableHeading">
											<th className="asy-th">Certificate Name</th>
											<th className="asy-th">Certificate Type</th>
											<th className="asy-th">Uploaded On</th>
											<th className="asy-th">Action</th>
											<th className="asy-th">
													<Row>
														<Col>
															<div className="row-col-4 ">
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
												</th>
										</tr>
									</thead>
									<tbody>
										{this.state.data.map((data, index) => (
											<tr className="asy-TableDataRow" key={index}>
												<td className="asy-TableData"> {data.name} </td>
												<td className="asy-TableData"> {data.typeCertificate} </td>
												<td className="asy-TableData">
													<Moment format="D MMM YYYY">{data.updatedOn}</Moment>{' '}
												</td>
												<td className="asy-TableData">
													<button
														className="editbutton"
														update
														onClick={() =>
															this.setState({ ListOpen: false, FormOpen: true })}
													>
														{index % 2 === 0 ? (
															<img
																src={edit1}
																className="asy-Edit"
																onClick={this.handleUpdateData.bind(this, data._id)}
																alt="Edit-Icon Certification Page"
															/>
														) : (
															<img
																src={edit11}
																className="asy-Edit"
																onClick={this.handleUpdateData.bind(this, data._id)}
																alt="Edit-Icon Certification Page"
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
																alt="Delete-Icon Certification Page"
															/>
														) : (
															<img
																src={trash11}
																className="asy-Trash"
																alt="Delete-Icon Certification Page"
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
												<td></td>
											</tr>
										))}
									</tbody>
								</Table>
							</div>
						</div>
					) : null}
					{this.state.FormOpen ? (
						<div>
							<div className="form-container asy-mainBoxBorder">
								<form
									onSubmit={() =>
										this.setState({ ListOpen: true }) & this.setState({ FormOpen: false })}
									ref={(form) => (this.form = form)}
									onReset={this.handleReset}
								>
									<Row>
										<div className="form-group col-12 col-md-6">
											<label for="inputdegree" className="asy-FormLabel">
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
											<label for="inputPassword" className="asy-FormLabel">
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
											<label for="inputdegree" className="asy-FormLabel">
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
											<label for="inputPassword" className="asy-FormLabel">
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
											onClick={() => {
												this.submitHandler();
											}}
										>
											{this.state.dyanamicBtnName}
										</Button>

										<Button
											className="asy-secondary-cancle-button"
											onClick={() => this.setState({ ListOpen: true, FormOpen: false })}
											onClickCapture={this.handleManualReset}
											value="reset"
										>
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
