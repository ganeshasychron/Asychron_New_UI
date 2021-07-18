import React from 'react';
import { Row, Table} from 'react-bootstrap';


const UserReference = () => {
	return (
		<div className="jumbotron jumbo-form">
			<h5 className="page-heading">References</h5>
			<hr className="hr-line" />
			<div className="form-container">
				<form>
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
								required
							/>
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
								required
							/>
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
								required
							/>
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
								required
							/>
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
								required
							/>
						</div>
					</Row>
					<div className="text-center">
						<input type="submit" value="submit" className="submit-button" />
					</div>
				</form>
			</div>
			<hr className="hr-line" />
			<div className="table-responsive">
				<Table striped bordered hover>
					<thead>
						<tr>
							<th>Name</th>
							<th>Title</th>
							<th>Company</th>
							<th>Email</th>
							<th>Mobile</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>abdullah ansari</td>
							<td>Issc</td>
							<td>Issc</td>
							<td>issc@unipune.ac.in</td>
							<td>8888888888</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
export default UserReference;