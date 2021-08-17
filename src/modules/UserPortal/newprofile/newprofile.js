import React, { Component } from 'react';
import { Col, ListGroup, Row, Nav } from 'react-bootstrap';
// import ReactApexChart from 'react-apexcharts';
// import { Link } from 'react-router-dom';
import ProfileDetails from '../PersonalDetails/ProfileDetails';
import styles from './newprofile.module.css';
import * as services from '../../../services/services';
import alert from '../../../../src/assets/images/alert.png';
// import style from '../../AdminPortal/ManageVacancies/Vacancies.module.css';
// import Details from '../../../modules/UserPortal/PersonalDetails/ProfileDetails';
import BankDetails from '../../../../src/modules/UserPortal/UserBankDetails/UserBankDetails';
import Moment from 'react-moment';
import References from '../../../../src/modules/UserPortal/UserReference/UserReference';
import Certification from '../../../../src/modules/UserPortal/Certifications/Certification';
import Education from '../../../../src/modules/UserPortal/Educations/Education';
import Family from '../../../../src/modules/UserPortal/Family/Family';

class Profiles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			series1: [ 69 ],

			userName: 'admin123',
			empCode: '',
			email: '',
			department: '',
			designation: '',
			reportManeger: '',
			doj: '',
			employeType: '',
			shiftEmp: '',
			data: []
		};
	}

	componentDidMount() {
		this.getUsersData();
	}

	async getUsersData() {
		services.getService('profiles').then((res) => {
			console.log(res.data);
			this.setState({ data: res.data.pprofiles[0] });
		});
	}

	render() {
		return (
			<div>
				<div>
					<div className="row asy-main-row">
						<Col>
							<h5 className="asy-main-page-heading"> Profile </h5>
						</Col>
					</div>
					<Row>
						<Col className="col-sm-6">
							<div className={styles.profileMainCardBorder}>
								<div className="card-body text-center">
									<Row>
										<Col>
											<img
												src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
												alt=""
												id="img"
												className={styles.profileImage}
											/>
										</Col>
									</Row>
									<label htmlFor="inputEmpCode" className="card-title mb-0 mt-2 text-center">
										{this.state.data.userName}
									</label>
								</div>
								<div className="text-center">
									<button className={styles.profileEditButton}>
										<a className={styles.link} href="#detailspage">
											Edit
										</a>
									</button>
									<div className="text-left">
										<div className="mt-4">
											<Row>
												<Col>
													<div>
														<label htmlFor="inputEmpCode" className={styles.profileLabel}>
															Emp Code :
														</label>
														<label
															htmlFor="inputEmpCode"
															className={styles.profileLabelValues}
														>
															{this.state.data.empCode}
														</label>
													</div>

													<div>
														<label htmlFor="inputEmail" className={styles.profileLabel}>
															Email :
														</label>
														<label
															htmlFor="inputEmail"
															className={styles.profileLabelValues}
														>
															{this.state.data.email}
														</label>
													</div>

													<div>
														<label
															htmlFor="inputDepartment"
															className={styles.profileLabel}
														>
															Department :
														</label>
														<label
															htmlFor="inputDepartment"
															className={styles.profileLabelValues}
														>
															{this.state.data.department}
														</label>
													</div>

													<div>
														<label htmlFor="inputEmpType" className={styles.profileLabel}>
															Employment :
														</label>
														<label
															htmlFor="inputEmpType"
															className={styles.profileLabelValues}
														>
															{this.state.data.employeType}
														</label>
													</div>
												</Col>
												<Col>
													<div>
														<label
															htmlFor="inputReportManager"
															className={styles.profileLabel}
														>
															Reporting Manager :
														</label>
														<label
															htmlFor="inputReportManager"
															className={styles.profileLabelValues}
														>
															{this.state.data.reportManeger}
														</label>
													</div>

													<div>
														<label htmlFor="inputEmpCode" className={styles.profileLabel}>
															DOJ :
														</label>
														<label
															htmlFor="inputEmpCode"
															className={styles.profileLabelValues}
														>
															<Moment format="D MMM YYYY">{this.state.data.doj}</Moment>
														</label>
													</div>

													<div>
														<label htmlFor="inputEmpCode" className={styles.profileLabel}>
															Designation :
														</label>
														<label
															htmlFor="inputEmpCode"
															className={styles.profileLabelValues}
														>
															{this.state.data.designation}
														</label>
													</div>

													<div>
														<label htmlFor="inputEmpCode" className={styles.profileLabel}>
															Shift :
														</label>
														<label
															htmlFor="inputEmpCode"
															className={styles.profileLabelValues}
														>
															{this.state.data.shiftEmp}
														</label>
													</div>
												</Col>
											</Row>
										</div>
									</div>
								</div>
							</div>
						</Col>

						<Col className="col-sm-6">
							<div>
								<div>
									<div className={styles.profilePendingApproval}>
										<ListGroup>
											<ListGroup.Item
												className={`${styles.headLine} text-center className="nav nav-pills bg-nav-pills nav-justified mb-3"`}
											>
												Pending Approvals
												<img alt="logo" className={styles.alertImg} src={alert} />
											</ListGroup.Item>
											<ListGroup.Item>
												{/* <Link to="./bank-details">Bank Details</Link> */}
												{/* <a href="#BankDetails"> Bank Details </a> */}
												<div className={`${styles.pendingApprovals}`} data-bs-toggle="tab" aria-expanded="true" href="#BankDetails">
													Bank Details
												</div>
											</ListGroup.Item>

											<ListGroup.Item>
												{/* <Link to="./certifications">Certficate Details</Link> */}
												<div className={styles.pendingApprovals} data-bs-toggle="tab" aria-expanded="true" href="#Certification">
													Certification
												</div>
											</ListGroup.Item>

											<ListGroup.Item>
												{/* <Link to="./certifications">Certficate Details</Link> */}
												<div className={styles.pendingApprovals} data-bs-toggle="tab" aria-expanded="true" href="#References">
													References
												</div>
											</ListGroup.Item>

											<ListGroup.Item>
												{/* <Link to="./certifications">Certficate Details</Link> */}
												<div className={`${styles.pendingApprovals} Nav-Link`} data-bs-toggle="tab" aria-expanded="true" href="#Education">
													Education
												</div>
											</ListGroup.Item>

											<ListGroup.Item>
												{/* <Link to="./certifications">Certficate Details</Link> */}
												<Nav.Item>
													<div className={`${styles.pendingApprovals} Nav-Link`} data-bs-toggle="tab" aria-expanded="true" href="#Family">
														Family
													</div>
												</Nav.Item>
											</ListGroup.Item>
										</ListGroup>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row>
						<div className="col-xl-12 col-lg-12 mt-4">
							<div className="card">
								<div className="card-body">
									<Nav
										className="nav nav-pills bg-nav-pills nav-justified mb-3"
										variant="tabs"
										defaultActiveKey="#Details"
									>
										<Nav.Item>
											<Nav.Link
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0"
												href="#Details"
											>
												Profile Details
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0"
												href="#BankDetails"
											>
												Bank Details
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0"
												href="#References"
											>
												References
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0"
												href="#Certification"
											>
												Certification
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0"
												href="#Education"
											>
												Education
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link
												data-bs-toggle="tab"
												aria-expanded="true"
												className="nav-link rounded-0"
												href="#Family"
											>
												Family
											</Nav.Link>
										</Nav.Item>
									</Nav>
									<div className={styles.scrollPanel}>
										<div className="tab-content">
											<div className="tab-pane active" id="Details">
												<a name="detailspage">
													<ProfileDetails />
												</a>
											</div>

											<div className="tab-pane" id="BankDetails">
												<BankDetails />
											</div>

											<div className="tab-pane" id="References">
												<References />
											</div>
											<div className="tab-pane" id="Certification">
												<Certification />
											</div>
											<div className="tab-pane" id="Education">
												<Education />
											</div>
											<div className="tab-pane" id="Family">
												<Family />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Row>
				</div>
			</div>
		);
	}
}
export default Profiles;
