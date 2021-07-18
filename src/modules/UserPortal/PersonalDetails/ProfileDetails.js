import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';
//import './ProfileDetails.module.css';
import '../../../shared/CSS/FormStyles.css';

const ProfileDetails = () => {
    return (
        <div className="jumbotron jumbo-form">
            <h5 className="page-heading">Profile Details</h5>
            <hr className="hr-line" />
            <div className="form-container">
                <form>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Fname Name</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder=" Fname Name" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Marital Status</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Marital Status" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Last Name</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Last Name" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Pan</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Pan" required />
                        </div>
                    </Row>
					<Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">DOB</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="DOB" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">password</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Password" required />
                        </div>
                    </Row>
					<Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Gender</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Gender" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Driving License</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Driving License" required />
                        </div>
                    </Row>
					 <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Blood Group</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Blood Group" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Adhar #</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Adhar #" required />
                        </div>
                    </Row>
                    <Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Country</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Country" required />
                        </div>
                    </Row>
                   
                </form>
            </div>
			<h5 className="page-heading">Contact Details</h5>
            <hr className="hr-line" />
			<div className="form-container">
			<form>
		        	<Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Mobile No</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Mobile No" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Skype ID</label>
                            <input type="text" className="form-control form-input" id="inputPassword" placeholder="Skype ID" required />
                        </div>
                    </Row>
					<Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Work Phone</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Work Phone" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Personal Address</label>
                            <textarea type="text" className="form-control form-input" id="inputPassword" placeholder="Personal Address" required />
                        </div>
                    </Row>
					<Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Presonal Email</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Personal Email" required />
                        </div>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputPassword" className="col-form-label">Current Address</label>
                            <textarea type="text" className="form-control form-input" id="inputPassword" placeholder="Current Address" required />
                        </div>
                    </Row>
					<Row>
                        <div className="form-group col-12 col-md-6">
                            <label for="inputdegree" className="col-form-label">Linkedin</label>
                            <input type="text" className="form-control form-input" id="inputdegree" placeholder="Linkedin" required />
                        </div>
                    </Row>

					<div className="text-center">
                        <input type="submit" value="submit" className="submit-button" />
                    </div>
           </form>
		   </div>
        </div>
    )
}

export default ProfileDetails;



//*
/*
<div className="table-responsive">
<Table striped bordered hover>
	<thead>
		<tr>
			<th>Name</th>
			<th>Relationship</th>
			<th>Phone</th>
			<th>Accupation</th>
			<th>Action</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Rahul</td>
			<td>Brother</td>
			<td>0000</td>
			<td>Student</td>
			<td><FaEdit className="svgedit" /><FaTrash className="svgdelete" /></td>
		</tr>
	</tbody>
</Table>
</div>
*/