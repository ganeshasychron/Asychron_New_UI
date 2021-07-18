import React from 'react';
import { Table, Col, Row } from 'react-bootstrap';

const MonthlyView = () => {
	return (
		<div>
			<Row className="col-sm-12">
				<Col className="list-group list-group-flush text-left ml-5 m-3">
					<label>Employee Name: Ganesh Ghuge</label>
					<label>Designation: Technical Lead</label>
					<label>Date Of Joining: 26-dec-2016</label>
					<label>PAN: XXXXXXXXX234</label>
				</Col>
				<Col className="list-group list-group-flush text-left ml-5 m-3">
					<label>Leave Balance: </label>
					<label>Leave Without Pay: 0.00 </label>
					<label>Number Of Working Days Paid: 22.00 </label>
					<label>Total Working Days: 22</label>
				</Col>
			</Row>
			<Table bordered responsive="sm">
				<thead>
					<tr>
						<td>1</td>
						<th>Earnings</th>
						<th>Amount (in ₹)</th>
						<th>Deductions</th>
						<th>Amount (in ₹)</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>Basic Salary</td>
						<td>24820</td>
						<td>Prof.Tax</td>
						<td>200</td>
					</tr>
					<tr>
						<td>2</td>
						<td>House Rent Allowance</td>
						<td>9928</td>
						<td>Income Tax</td>
						<td>10000</td>
					</tr>
					<tr>
						<td>3</td>
						<td>Conveyance Allowance</td>
						<td>1489</td>
						<td rowSpan="8">Other</td>
						<td rowSpan="8" />
					</tr>
					<tr>
						<td>4</td>
						<td>Medical</td>
						<td>3227</td>
					</tr>
					<tr>
						<td>5</td>
						<td>LTA</td>
						<td>2482</td>
					</tr>
					<tr>
						<td>6</td>
						<td>Special pay 1 (EPF)</td>
						<td>3378</td>
					</tr>
					<tr>
						<td>7</td>
						<td>Special pay 2</td>
						<td>2482</td>
					</tr>
					<tr>
						<td>8</td>
						<td>City Compensantory Allowance</td>
						<td>3903</td>
					</tr>
					<tr>
						<td>9</td>
						<td>Other</td>
						<td>35000</td>
					</tr>
					<tr>
						<td>10</td>
						<td>Quarterly Performance Bonus</td>
						<td>-</td>
					</tr>
					<tr>
						<td />
						<td className="font-weight-bold">Total (A)</td>
						<td>86709</td>

						<td className="font-weight-bold">Total (B)</td>
						<td>10200</td>
					</tr>
					<tr>
						<td />
						<td className="font-weight-bold">Net Pay (A-B)</td>
						<td>76509</td>
						<td />
						<td />
					</tr>
				</tbody>
			</Table>
		</div>
	);
};
export default MonthlyView;