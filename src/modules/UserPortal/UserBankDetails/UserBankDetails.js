import React from 'react';
import { Row, Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
const UserBankDetails = () => {
	return (
		<div className="jumbotron jumbo-form">
			<h5 className="page-heading">Bank Details</h5>
			<hr className="hr-line" />
			<div className="form-container">
				<form>
					<Row>
						<div className="form-group col-12 col-md-6">
							<label for="inputBankName" className="col-form-label">
								Name of Bank
							</label>
							<input
								type="text"
								className="form-control form-input"
								id="inputBankName"
								placeholder="Enter Bank Name"
								required
							/>
						</div>
						<div className="form-group col-12 col-md-6">
							<label for="inputIFSCcode" className="col-form-label">
								IFSC Code
							</label>
							<input
								type="text"
								className="form-control form-input"
								id="inputIFSCcode"
								placeholder="Enter IFSC code"
								required
							/>
						</div>
					</Row>
					<Row>
						<div className="form-group col-12 col-md-6">
							<label for="inputBranchAddress" className="col-form-label">
								Branch Address
							</label>
							<input
								type="text"
								className="form-control form-input"
								id="inputBranchAddress"
								placeholder="Enter Branch Address"
								required
							/>
						</div>
						<div className="form-group col-12 col-md-6">
							<label for="inputAccountNumber" className="col-form-label">
								Account Number
							</label>
							<input
								type="text"
								className="form-control form-input"
								id="inputAccountNumber"
								placeholder="Enter Account Number"
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
							<th>Name Of Bank</th>
							<th>IFSC Code</th>
							<th>Branch Address</th>
							<th>Account Number</th>
                            <th>Edit / Delete</th>
						
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Sbi</td>
							<td>SBIN00001</td>
							<td>Shirdi</td>
							<td>457855988746</td>
							<td>
								<FaEdit className="svgedit" />
								<FaTrash className="svgdelete" />
							</td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
};
export default UserBankDetails;
