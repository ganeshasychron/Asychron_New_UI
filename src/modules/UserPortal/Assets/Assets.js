import { Table, Col } from 'react-bootstrap';
import '../../../shared/CSS/FormStyles.css';
import * as services from '../../../services/services';
import React, { Component } from 'react';
import Moment from 'react-moment';

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
			<div className="jumbotron asy-main-jumbotron ">

				<div className="row asy-main-row">
					<Col>
						<h5 className="asy-main-page-heading"> Assests</h5>
					</Col>
				</div>


				<div className="form-container">
					<form>
						<div className="table-sm asy-mainBoxBorder asy-Tablestriped table-responsive">
							<Table className="asy-Table">
								<thead>
									<tr className="asy-TableHeading">
										<th className="asy-th">Name</th>
										<th className="asy-th">Type</th>
										<th className="asy-th">Date Of Issue</th>
									</tr>
								</thead>
								<tbody>
									{this.state.data.map((data) => (
										<tr className="asy-TableDataRow" key={data}>
											<td>{data.assetName}</td>
											<td>{data.assetType}</td>
											<td>
												<Moment format="D MMM YYYY">{data.issueDate}</Moment>
											</td>

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
