import React from 'react';
import { Col, Button, ButtonGroup } from 'react-bootstrap';
import MonthlyView from './MonthlyView';
import YearlyView from './YearlyView';

const SalaryDetails = () => {
	const [ showResults, setShowResults ] = React.useState(false);
	const YearlyViewed = () => setShowResults(true);
	const MonthlyViewed = () => setShowResults(false);
	return (
		<div>
			<div className="jumbotron jumbo-form">
				<h5 className="page-heading">Salary Details</h5>
				<Col className="d-flex flex-row-reverse">
					<Button className="mr-1" variant="outline-secondary" onClick={window.print}>
						Print this page
					</Button>
					<a href="https://www.incometaxindia.gov.in/forms/income-tax%20rules/103120000000007849.pdf">
						<Button className="mr-1" variant="outline-secondary">
							Form 16
						</Button>
					</a>
					<Button className="mr-1" variant="outline-secondary">
						Tax Details
					</Button>
				</Col>
				<hr className="hr-line" />
				<Col>
					<ButtonGroup className="col-sm-12" aria-label="Basic example">
						<Button onClick={MonthlyViewed} variant="outline-secondary">
							Monthly View
						</Button>
						<Button onClick={YearlyViewed} variant="outline-secondary">
							Yearly View
						</Button>
					</ButtonGroup>
				</Col>
				{showResults ? <YearlyView /> : <MonthlyView />}
			</div>
		</div>
	);
};
export default SalaryDetails;
