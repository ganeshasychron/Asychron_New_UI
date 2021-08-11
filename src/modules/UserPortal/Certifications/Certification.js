import React from 'react';
import { Table, Row, Col, Modal, Button } from 'react-bootstrap';
import styles from './Certification.module.css';
import * as services from '../../../services/services';
import moment from "moment";
import trash1 from "../../../../src/assets/images/trash.png";
import edit from "../../../../src/assets/images/edit (1).png";
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
			uploadedOn:"",
			Certificates:"",
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
											className="asy-primary-submit-button col-sm-2"
											onClick={() =>
												this.setState({
													ListOpen: false,
													FormOpen: true,
													dyanamicBtnName: 'Submit'
												})}
										>
											<h6 className="text-center asy-button-heading "> Add 	</h6>
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
										{this.state.data.map((data) => (
											<tr className="asy-TableData" key={data._id}>
												<td> {data.name} </td>
												<td> {data.typeCertificate} </td>
												<td> {moment.utc(data.updatedOn).format("D MMM YYYY")} </td>
												<td>
													<Button variant="none" update onClick={() => this.setState({ ListOpen: false, FormOpen: true })} >
												<img src={edit} className="asy-Trash" onClick={this.handleUpdateData.bind(this, data._id)} 	/>
													</Button>
													<Button variant="none" onClick={this.handleModalShow.bind(this, data._id)} >
														<img src={trash1} className="asy-Trash"/>
													</Button>

													<Modal show={this.state.showHide}>
														<Modal.Body>
															<h6> Are you Sure. Delete This Data? </h6>
														</Modal.Body>
														<Modal.Footer>
															<div className="row">
																<div className="col">
																	<Button
																		className="submit-button"
																		onClick={this.handledeleteData}
																	>
																		Delete
																	</Button>
																</div>
																<div className="col">
																	<Button
																		id={styles.danger}
																		className="danger-danger submit-button"
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
			                <div className="card asy-card-primary-design">
								<div className="card-body">
							<div className="form-container">
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
												className="form-control form-input"
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
												className="form-control form-input"
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
												className="form-control form-input"
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
												className="form-control form-input"
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

									<div className="asy-button-class text-center d-flex justify-content-center">
										<Button
											className="asy-primary-submit-button text-center col-sm-2 mr-1"
											onClick={() => { this.submitHandler();	}} 	>
										 <h6 className="text-center asy-button-heading"> {this.state.dyanamicBtnName} </h6>
										</Button>

										<Button
											id={styles.btnReset}
											className="asy-primary-submit-button text-center col-sm-2 mr-1"
											onClickCapture={this.handleManualReset}
											value="reset" >
											<h6 className="text-center asy-button-heading"> Reset </h6>
										</Button>

										<Button
											id={styles.btnCancel}
											className="asy-primary-submit-button text-center col-sm-2"
											onClick={() => this.setState({ ListOpen: true, FormOpen: false })}
											onClickCapture={this.handleManualReset}
											value="reset" >
											<h6 className="text-center asy-button-heading"> Cancel </h6>
										</Button>
									</div>
								</form>
							</div>
							</div>
							</div>
						</div>
					) : null}
				</div>
			</div>
		);
	}
}
export default Certification;
