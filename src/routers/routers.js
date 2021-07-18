import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../modules/UserPortal/UserProfile/Profile';
import Education from '../modules/UserPortal/Educations/Education';
import Dashboard from '../modules/UserPortal/Dashboard/Dashboard';
import UserReference from '../modules/UserPortal/UserReference/UserReference';
import Certification from '../modules/UserPortal/Certifications/Certification';
import ProfileDetails from '../modules/UserPortal/PersonalDetails/ProfileDetails';
import Headers from '../shared/Header/Header';
import Leaves from '../modules/UserPortal/LeavesDashboard/LeavesDashboard';
import UserBankDetails from '../modules/UserPortal/UserBankDetails/UserBankDetails';
import Family from '../modules/UserPortal/Family/Family';
import Performance from '../modules/UserPortal/Performance/Performance';
import Forms from '../modules/UserPortal/FormsDashboard/FormDashboard';
import Policies from '../modules/UserPortal/Policies/Policies';
import Assets from '../modules/UserPortal/Assets/Assets';
import Calendar from '../modules/UserPortal/Calendar/Calendar';
import Task from '../modules/UserPortal/Task/Task';
import SalaryDetails from '../modules/UserPortal/SalaryDetails/SalaryDetails';
import Survey from '../modules/UserPortal/Survey/Survey';
import Polls from '../modules/UserPortal/Polls/Polls';
import ManagePolls from '../modules/AdminPortal/ManagePolls/ManagePolls';
import ManageLeaves from '../modules/AdminPortal/ManageLeaves/ManageLeaves';
import ManagePolicies from '../modules/AdminPortal/ManagePolicies/ManagePolicies';
import ManageHiring from '../modules/AdminPortal/ManageHiring/ManageHiring';
import ManageTask from '../modules/AdminPortal/ManageTask/ManageTask';
import Vacancies from '../modules/AdminPortal/ManageVacancies/Vacancies';
import UsersManagement from '../modules/AdminPortal/UsersManagement/UsersManagement';
import AdminPerformance from '../modules/AdminPortal/Performance/AdminPerformance';

class routers extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="#" />
					<Route exact path="/" component={Dashboard} />
					<Route exact path="/" component={Headers} />
					<Route exact path="/home/profile" component={Profile} />
					<Route exact path="/home/details" component={ProfileDetails} />
					<Route exact path="/home/education" component={Education} />
					<Route exact path="/home/references" component={UserReference} />
					<Route exact path="/home/certifications" component={Certification} />
					<Route exact path="/leaves" component={Leaves} />
					<Route exact path="/forms" component={Forms} />
					<Route exact path="/home/bank-details" component={UserBankDetails} />
					<Route exact path="/home/family" component={Family} />
					<Route exact path="/performance" component={Performance} />
					<Route exact path="/policies" component={Policies} />
					<Route exact path="/assets" component={Assets} />
					<Route exact path="/calendar" component={Calendar} />
					<Route exact path="/task" component={Task} />
					<Route exact path="/salary-details" component={SalaryDetails} />
					<Route exact path="/survey" component={Survey} />
					<Route exact path="/polls" component={Polls} />
					<Route exact path="/managePolls" component={ManagePolls} />
					<Route exact path="/manageTask" component={ManageTask} />
					<Route exact path="/manageLeaves" component={ManageLeaves} />
					<Route exact path="/managePolicies" component={ManagePolicies} />
					<Route exact path="/vacancies" component={Vacancies} />
					<Route exact path="/hiring" component={ManageHiring} />
					<Route exact path="/usersManagement" component={UsersManagement} />
					<Route exact path="/AdminPerformance" component={AdminPerformance} />
				</Switch>
			</div>
		);
	}
}

export default routers;
