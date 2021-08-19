import React, { Component } from 'react';

// import ReactDOM from "react-dom";

import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/animate.min.css';
import './assets/scss/light-bootstrap-dashboard-react.scss';
//  import "./assets/css/demo.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./shared/CSS/blueTheme.css";

import UserLayout from './shared/Layout/User-Layout';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" render={(props) => <UserLayout {...props} />} />
					{/* <Redirect from="/" to="/" /> */}
				</Switch>
			</div>
		);
	}
}

export default withRouter(App);
