import React from 'react';
import { Card } from 'react-bootstrap';
import style from './UserEvents.module.css';
const UserEvents = (props) => {
	return (
		<div className={style.value}>
			<div className="d-flex flex-row-reverse bd-highlight">
				<div className="p-2 bd-highlight">
					<Card className={style.card}>
						<Card.Body>
							<Card.Title>Next Leave on</Card.Title>
							<Card.Text>Some quick example text</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="p-2 bd-highlight">
					<Card className={style.card}>
						<Card.Body>
							<Card.Title>Next Holiday on</Card.Title>
							<Card.Text>Some quick example text</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
			<div className="d-flex flex-row-reverse bd-highlight">
				<div className="p-2 bd-highlight">
					<Card className={style.card}>
						<Card.Body>
							<Card.Title>Next Birthday on</Card.Title>
							<Card.Text>Some quick example text</Card.Text>
						</Card.Body>
					</Card>
				</div>
				<div className="p-2 bd-highlight">
					<Card className={style.card}>
						<Card.Body>
							<Card.Title>Next Payroll on</Card.Title>
							<Card.Text>Some quick example text</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};
export default UserEvents;
