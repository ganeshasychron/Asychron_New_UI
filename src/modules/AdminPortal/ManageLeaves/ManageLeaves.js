import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { FaCheck, FaTimes } from 'react-icons/fa';
import * as services from '../../../services/services';
export default class ManageLeaves extends Component {
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
		await services.getService('leaves').then((res) => {
			console.log(res.data);
			this.setState({ data: res.data.Leaves });
		});
	};
	render() {
		return (
			<div>
				<div className="jumbotron jumbo-form">
					<h5 className="page-heading">Leaves</h5>
					<hr className="hr-line" />

					<div className="table-responsive">
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Employee Name</th>
									<th>Manager Name</th>
									<th>Leave Type</th>
									<th>Leave Period</th>
									<th>Status</th>
									<th>Accept / Reject</th>
								</tr>
							</thead>
							<tbody>
								{this.state.data.map((data) => (
									<tr key={data}>
										<td>{data.userName}</td>
										<td />
										<td>{data.leavesType}</td>
										<td />
										<td>{data.status}</td>
										<td>
											<button>
												<FaCheck className="fas fa-check" />
											</button>
											<button>
												<FaTimes className="fas fa-times" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}
