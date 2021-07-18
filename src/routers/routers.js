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
import Family from "../modules/UserPortal/Family/Family";
import Performance from "../modules/UserPortal/Performance/Performance";
import Forms from '../modules/UserPortal/FormsDashboard/FormDashboard';
import Policies from "../modules/UserPortal/Policies/Policies";
import Assets from "../modules/UserPortal/Assets/Assets";
import Calendar from '../modules/UserPortal/Calendar/Calendar';
import Task from "../modules/UserPortal/Task/Task";
import SalaryDetails from '../modules/UserPortal/SalaryDetails/SalaryDetails';

class routers extends Component {
    render() {
        return (
            
            <div>                
                <Switch>
                    <Route exact path='#'></Route>
                    <Route exact path='/' component={Dashboard}></Route>
                    <Route exact path='/' component={Headers}></Route>
                    <Route exact path='/home/profile' component={Profile}></Route>
                    <Route exact path='/home/details' component={ProfileDetails}></Route>
                    <Route exact path='/home/education' component={Education}></Route>                   
                    <Route exact path='/home/references' component={UserReference}></Route>
                    <Route exact path='/home/certifications' component={Certification}></Route>
                    <Route exact path='/leaves' component={Leaves}></Route>
                    <Route exact path='/forms' component={Forms}></Route>
                    <Route exact path="/home/bank-details" component={UserBankDetails} />
                    <Route exact path='/home/family' component={Family}></Route>
                    <Route exact path='/performance' component={Performance}></Route>
                    <Route exact path='/policies' component={Policies}></Route>
                    <Route exact path='/assets' component={Assets}></Route>
                     <Route exact path='/calendar' component={Calendar}></Route>
                    <Route exact path='/task' component={Task}></Route>
                    <Route exact path='/salary-details' component={SalaryDetails}></Route>
                </Switch>
            </div>
        );
    }
}

export default routers;
