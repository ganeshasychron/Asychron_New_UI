import React from 'react';
import { ListGroup } from 'react-bootstrap';
import 'react-circular-progressbar/dist/styles.css';
import style from './News.module.css';

const Dashboard = () => {
	return (
		<ListGroup className={style.News}>
			<ListGroup.Item className={style.heading}>News ....</ListGroup.Item>
			<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
			<ListGroup.Item>Morbi leo risus</ListGroup.Item>
			<ListGroup.Item>Morbi leo risus</ListGroup.Item>
		</ListGroup>
	);
};
export default Dashboard;
