

import React from 'react';
import './Profile.css';
import prodata from "./Prodata";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ListGroup } from 'react-bootstrap';

export default function Profile() {
    return (
        <>
            <div className="container pro">
                <div className="all">
                   
                    <div className="box1">

                        <div className="card-body">

                            <div className="holder">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" id="img" className="img" />
                              <div className="editprofile">
                                <button type="button" className="btn btn-outline-secondary">Edit Profile</button>
                              </div>
                                <div className="bar">
                                    <CircularProgressbar
                                        value={50}
                                        text={`${50}%`}
                                        styles={buildStyles({
                                            rotation: 0.25,
                                            strokeLinecap: 'butt',
                                            textSize: '16px',
                                            pathTransitionDuration: 0.5,
                                            pathColor: `rgba(2, 168, 66, ${50 / 100})`,
                                            textColor: '#f88',
                                            trailColor: '#8bcca8',
                                            backgroundColor: '#3e98c7',
                                        })}
                                    />

                                </div>

                                <p> Profile Completed</p>

                            </div>

                        </div> </div>

                    <div className="box2">

                        <h5>User Name : {prodata[0].username}</h5>
                        <label>Employee Code :   {prodata[0].EmpCode}</label>
                        <label>Email :   {prodata[0].email}</label>
                        <label>Department : {prodata[0].department} </label>
                        <label>Designation :   {prodata[0].Designation}</label>
                        <label >Report Maneger :   {prodata[0].reportManeger}</label>
                        <label>Doj :   {prodata[0].doj}</label>
                        <label>Employee Type :  {prodata[0].Etype}</label>
                        <label>Shift : {prodata[0].shift}</label>

                    </div>

                </div>

                <div className="box3">

                
                   <ListGroup className="news1">
			<ListGroup.Item className="news2">Do Submit Remaining Part ....</ListGroup.Item>
			<ListGroup.Item >Bank Details</ListGroup.Item>
			<ListGroup.Item >Salary Details</ListGroup.Item>
		</ListGroup>

                </div>
            </div>
        </>

    )
}
