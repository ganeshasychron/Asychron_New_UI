import { Table } from 'react-bootstrap';
import '../../../shared/CSS/FormStyles.css';
import * as services from '../../../services/services';
import React, { Component } from 'react';

export default class Assets extends Component {
	constructor(props) {
		super(props);
		this.state = {
			assetName: '',
			assetType: '',
			issueDate: '',
			editId: '',
			id: '',
			userName: 'admin123',
			data: []
		};
	}
	componentDidMount() {
		this.onGetUserData();
	}
	onGetUserData = async () => {
		await services.getService('assets').then((res) => {
			this.setState({ data: res.data.Assets });
		});
	};
	render() {
		return (
			<div className="jumbotron jumbo-form">
				<h5 className="page-heading">Assets</h5>
				<hr className="hr-line" />
				<div className="form-container">
					<form>
						<div className="table-responsive">
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>Name</th>
										<th>Type</th>
										<th>Date Of Issue</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((data) => (
										<tr key={data}>
											<td>{data.assetName}</td>
											<td>{data.assetType}</td>
											<td>{data.issueDate}</td>
										</tr>
									))}
								</tbody>
							</Table>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
