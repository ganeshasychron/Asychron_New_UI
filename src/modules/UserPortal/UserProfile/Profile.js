import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactApexChart from 'react-apexcharts';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProfileDetails from "../PersonalDetails/ProfileDetails";
import styles from './Profile.module.css';
import * as services from "../../../services/services";
class Profiles extends Component {
	constructor(props) {
		super(props);
		this.state = {
			series1: [69],
			detailsPage: false,
			profilePage: true,

			userName: "admin123",
			empCode: "",
			email: "",
			department: "",
			designation: "",
			reportManeger:"",
			doj: "",
			employeType: "",
			shiftEmp: "",
			data: [],

			options1: {
				chart: {
					height: 150,
					type: 'radialBar',
				},
				plotOptions: {
					radialBar: {
						hollow: {
							size: '55%'
						},
						dataLabels: {
							name: {
								offsetY: -10,
								show: true,
								color: "Black",
								fontSize: "14px"
							},
						},
					}
				},

				fill: {
					background: 'red',
					type: 'gradient',
					gradient: {
						shade: 'dark',
						type: 'vertical',
						gradientToColors: ['', '', '', ''],
						stops: [0, 100]
					}
				},
				padding: {
					top: '0px',
					right: '0px',
					bottom: '0px',
					left: '0px'
				},
				colors: ['red'],
				labels: ['profile']
			},
		};

	}

	componentDidMount() {
		this.getUsersData();
	}

	async getUsersData() {
		services.getService("profiles").then((res) => {
			console.log(res.data);
			this.setState({ data: res.data.pprofiles[0] });
		});
	}

	render() {
		return (
			<>
				<div>
					{
						this.state.profilePage ?

							<div className="jumbotron jumbo-form">
								<h5 className="page-heading">Profile</h5>
								<hr id={styles.hr1} className="hr-line" />

								<div className="text-center">
									<div className={styles.CardArea} id="chart">
										<div className={styles.row}>
											{
												<div className={[styles.card,"col-md-9 col-sm-9 col-xs-12"].join(' ')}>
													<div className={styles['card-body']}>

														<div align="left" className={styles['card-body-1']}>

															<Col>
																<div className={styles.items}>
																	<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" id="img" className="img" />
																</div>

																<div className={styles.items}>
																	<label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.userName} </label>
																</div>

																<div className={styles.items}>
																	<input type="button" value="Edit" className="submit-button"
																		onClick={() => this.setState({ detailsPage: true, profilePage: false })} />
																</div>

																<div className={styles.items}>
																	<ReactApexChart
																		className={styles.apex_chart}
																		options={this.state.options1}
																		series={this.state.series1}
																		type="radialBar"
																		height={200}
																	/>
																</div>

																<div className={styles.items}>
																	<label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> Profile Completed </label>
																</div>
															</Col>
														</div>

														<div align="right" className={styles['card-body-2']}>

															<Col>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Emp Code</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.empCode} </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Email</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.email} </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Department</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.department} </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Designation</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.designation} </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Reporting Maneger</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.reportManeger}  </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Doj</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.doj} </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Employment type</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.employeType} </label>
																	</div>  </div>

																<div id={styles.LabelArea} className="form-group ">
																	<label id={styles.FirstLabelId} htmlFor="inputdegree" className="col-form-label">Shift</label>
																	<div className={styles.SecondLabel}>  <label id={styles.SecondLabelId} htmlFor="inputdegree" className="col-form-label"> {this.state.data.shiftEmp}  </label>
																	</div>  </div>
															</Col>
														</div>
													</div>
												</div>
											}

											<div className={[styles.card,"ml-2","col-md-3 col-md-3 col-md-12"].join(' ')}>
												<div className={styles['card-body']}>
													<ListGroup className={styles.news1}>
														<ListGroup.Item className={styles.news2}>Do Submit Remaining Part ....</ListGroup.Item>
														<ListGroup.Item > <Link to="./bank-details">  Bank Details </Link></ListGroup.Item>
														<ListGroup.Item >  <Link to="../salary-details">Salary Details </Link></ListGroup.Item>
														<ListGroup.Item ><Link to="./certifications">Certficate Details </Link></ListGroup.Item>
														<ListGroup.Item >  <Link to="../Survey"> Survey Details </Link></ListGroup.Item>
													</ListGroup>
												</div>
											</div>

										</div>
									</div>
								</div>
							</div>
							: null
					}

					{
						this.state.detailsPage ?
							<ProfileDetails /> : null}
				</div>
			</>
		);
	}
}
export default Profiles;