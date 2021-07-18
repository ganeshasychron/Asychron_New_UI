import React from 'react';
import UserProgress from '../UserProgress/UserProgress';
import News from '../News/News';
import UserEvents from '../UserEvents/UserEvents';
import { Col, Row } from 'react-bootstrap';

const Dashboard = () => {
	return (
		<div>
			<Row>
				<Col>
					<UserProgress />
				</Col>
				<Col>
					<UserEvents />
				</Col>
			</Row>
			<Row>
				<Col className="col-sm-6">
					<News />
				</Col>
			</Row>
		</div>
	);
};
export default Dashboard;
