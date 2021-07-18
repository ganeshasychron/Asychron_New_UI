import { Nav, Row, Table } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import style from './Vacancies.module.css';
import React, { Component } from 'react';

export default class Vaccancies extends Component {
	render() {
		return (
			<div>
				<div className="jumbotron jumbo-form">
					<h5 className="page-heading">Vaccancies</h5>
					<hr className="hr-line" />
					<div>
						<Nav variant="tabs" defaultActiveKey="#newvaccancies">
							<Nav.Item>
								<Nav.Link
									data-bs-toggle="tab"
									aria-expanded="true"
									className={style.link}
									href="#newvaccancies"
								>
									Raise New Request
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									data-bs-toggle="tab"
									aria-expanded="true"
									className={style.link}
									href="#existingrequest"
								>
									Existing Requests
								</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link
									data-bs-toggle="tab"
									aria-expanded="true"
									className={style.link}
									href="#MyApproval"
								>
									My Approvals
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
					<div className="tab-content">
						<div className="tab-pane active" id="newvaccancies">
							<div className="jumbotron jumbo-form">
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
											required
										/>
									</div>

									<div className="form-group col-12 col-md-6">
										<label for="inputExperience" className="col-form-label">
											Experience
										</label>
										<input
											type="text"
											className="form-control form-input"
											id="inputExperience"
											placeholder="Enter Experience"
											required
										/>
									</div>
								</Row>
								<Row>
									<div className="form-group col-12 col-md-6">
										<label for="inputSkill" className="col-form-label">
											OP Skill Set
										</label>
										<input
											type="text"
											className="form-control form-input"
											id="inputSkill"
											placeholder="Enter Skill"
											required
										/>
									</div>
									<div className="form-group col-12 col-md-6">
										<label for="inputMSkill" className="col-form-label">
											M Skill Set
										</label>
										<input
											type="text"
											className="form-control form-input"
											id="inputMSkill"
											placeholder="Enter M Skill"
											required
										/>
									</div>
								</Row>
								<Row>
									<div className="form-group col-12 col-md-6">
										<label for="inputEmployeeType" className="col-form-label">
											Employee Type
										</label>
										<select className="form-control form-input" id="inputEmployeeType" required>
											<option selected value="null">
												Select Option
											</option>
											<option value="grapefruit">Grapefruit</option>
											<option value="lime">Lime</option>
											<option value="coconut">Coconut</option>
											<option value="mango">Mango</option>
										</select>
									</div>
									<div className="form-group col-12 col-md-6">
										<label for="inputBudget" className="col-form-label">
											Budget
										</label>
										<input
											type="text"
											className="form-control form-input"
											id="inputBudget"
											placeholder="Enter Budget"
											required
										/>
									</div>
								</Row>
								<Row>
									<div className="form-group col-12 col-md-6">
										<label for="inputProject" className="col-form-label">
											Project
										</label>
										<select className="form-control form-input" id="inputProject" required>
											<option selected value="null">
												Select Option
											</option>
											<option value="grapefruit">Grapefruit</option>
											<option value="lime">Lime</option>
											<option value="coconut">Coconut</option>
											<option value="mango">Mango</option>
										</select>
									</div>
									<div className="form-group col-12 col-md-6">
										<label for="inputEducation" className="col-form-label">
											Education
										</label>
										<input
											type="text"
											className="form-control form-input"
											id="inputEducation"
											placeholder="Enter Education"
											required
										/>
									</div>
								</Row>
								<Row>
									<div className="form-group col-12 col-md-6">
										<label for="inputDesignation" className="col-form-label">
											Designation
										</label>
										<select className="form-control form-input" id="inputDesignation" required>
											<option selected value="null">
												Select Option
											</option>
											<option value="grapefruit">Grapefruit</option>
											<option value="lime">Lime</option>
											<option value="coconut">Coconut</option>
											<option value="mango">Mango</option>
										</select>
									</div>
									<div className="form-group col-12 col-md-6">
										<label for="inputApprovers" className="col-form-label">
											Approvers
										</label>
										<input
											type="text"
											className="form-control form-input"
											id="inputApprovers"
											placeholder="Enter Approvers"
											required
										/>
									</div>
								</Row>

								<Row>
									<div className="form-group col-12 col-md-6">
										<label for="inputDescription" className="col-form-label">
											Description
										</label>
										<textarea
											type="textarea"
											className="form-control form-input"
											id="inputDescription"
											placeholder="Enter Description"
											required
										/>
									</div>
								</Row>
								<div className="text-center">
									<button type="button" className="submit-button">
										Submit
									</button>
									<button type="button" className="cancel_button education" value="reset">
										Cancel
									</button>
								</div>
							</div>
						</div>
						<div className="tab-pane" id="existingrequest">
							<div className="jumbotron jumbo-form">
								<Table bordered responsive="sm">
									<thead>
										<tr>
											<th>Title</th>
											<th>Status</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>DEV</td>
											<td>Pending</td>
										</tr>
										<tr>
											<td>DEV</td>
											<td>Pending</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
						<div className="tab-pane" id="MyApproval">
							<div className="jumbotron jumbo-form">
								<Table bordered responsive="sm">
									<thead>
										<tr>
											<th>Title</th>
											<th>Project</th>
											<th>Employeement Type</th>
											<th>Position</th>
											<th>Budget</th>
											<th>Experience</th>
											<th>Approve / Reject</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>DEV</td>
											<td>Pending</td>
											<td>DEV</td>
											<td>Pending</td>
											<td>DEV</td>
											<td>Pending</td>
											<td>
												<button>
													<FaCheck className="fas fa-check" />
												</button>
												<button>
													<FaTimes className="fas fa-times" />
												</button>
											</td>
										</tr>
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
