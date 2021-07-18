import React, { Component } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import * as services from '../../../services/services';

export default class MonthlyView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	componentDidMount() {
		this.onGetUserData();
	}
	onGetUserData = async () => {
		await services.getService('salaryDetails').then((res) => {
			this.setState({ data: res.data.SalDetails });
			console.log(res.data);
		});
	};
	render() {
		return (
			<div>
				<Row className="col-sm-12">
					<Col className="list-group list-group-flush text-left ml-5 m-3">
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>Employee Name: {data.empName}</td>
								<br />
								<td>Designation: {data.designation}</td>
								<br />
								<td>Date Of Joining: {data.doj}</td>
								<br />
								<td>PAN: {data.panCard}</td>
							</tr>
						))}
					</Col>
					<Col className="list-group list-group-flush text-left ml-5 m-3">
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>Leave Balance:{data.leaveBal} </td>
								<br />
								<td>Leave Without Pay: {data.leaveWithoutPay} </td>
								<br />
								<td>Number Of Working Days Paid: {data.noWorkingDaysPaid} </td>
								<br />
								<td>Total Working Days: {data.totalWorkDays}</td>
							</tr>
						))}
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
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>1</td>
								<td>Basic Salary</td>
								<td>{data.basicSal}</td>
								<td>Prof.Tax</td>
								<td>200</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>2</td>
								<td>House Rent Allowance</td>
								<td>{data.houseRent}</td>
								<td>Income Tax</td>
								<td>10000</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>3</td>
								<td>Conveyance Allowance</td>
								<td>{data.ConveyanceAllow}</td>
								<td rowSpan="8">Other</td>
								<td rowSpan="8" />
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>4</td>
								<td>Medical</td>
								<td>{data.medical}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>5</td>
								<td>LTA</td>
								<td>{data.lTa}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>6</td>
								<td>Special pay 1 (EPF)</td>
								<td>{data.specialPay1}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>7</td>
								<td>Special pay 2</td>
								<td>{data.specialPay2}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>8</td>
								<td>City Compensantory Allowance</td>
								<td>{data.cityCompensantoryAllow}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>9</td>
								<td>Other</td>
								<td>{data.otherEar}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td>10</td>
								<td>Quarterly Performance Bonus</td>
								<td>{data.quarterlyPerformanceBonus}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td />
								<td className="font-weight-bold">Total (A)</td>
								<td>{data.totalA}</td>

								<td className="font-weight-bold">Total (B)</td>
								<td>{data.totalB}</td>
							</tr>
						))}
						{this.state.data.map((data) => (
							<tr key={data}>
								<td />
								<td className="font-weight-bold">Net Pay (A-B)</td>
								<td>{data.netPay}</td>
								<td />
								<td />
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}
