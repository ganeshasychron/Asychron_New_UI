import React from 'react';
import { Row, Col, Button, } from 'react-bootstrap';
import styles from './ProfileDetails.module.css';
import * as services from "../../../services/services";
import Profiles from "../UserProfile/Profile";
class ProfileDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profilePage: false,
      detailsPage: true,
      editId: "",
      data: [],
      errors: {},

      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      country: "",
      maritialStatus: "",
      panCard: "",
      password: "",
      drivingLycence: "",
      adharNumber: "",
      mobile: "",
      workPhone: "",
      email: "",
      Linkedin: "",
      skypeId: "",
      permanantAdd: "",
      currentAdd: "",
      userName: "admin123"
    };
  }
  //=====================Start Of Validation================
  handleValidations() {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let dob = this.state.dob;
    let gender = this.state.gender;
    let bloodGroup = this.state.bloodGroup;
    let country = this.state.country;
    let maritialStatus = this.state.maritialStatus;
    let panCard = this.state.panCard;
    let password = this.state.password;
    let drivingLycence = this.state.drivingLycence;
    let adharNumber = this.state.adharNumber;
    let mobile = this.state.mobile;
    let workPhone = this.state.workPhone;
    let email = this.state.email;
    let Linkedin = this.state.Linkedin;
    let skypeId = this.state.skypeId;
    let permanantAdd = this.state.permanantAdd;
    let currentAdd = this.state.currentAdd;

    let errors = {};
    let formIsValid = true;

    //===================firstName=====================
    if (!firstName) {
      formIsValid = false;
      errors["firstName"] = "Cannot be empty";
    } else if (typeof firstName !== "undefined") {
      if (
        !firstName.match(/^[a-zA-Z]*$/)
      ) {
        formIsValid = false;
        errors["firstName"] = "Only letters ";
      }
    }

    //===================lastName=====================
    if (!lastName) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    } else if (typeof lastName !== "undefined") {
      if (
        !lastName.match(/^[a-zA-Z]*$/)
      ) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
      }
    }

    //===================dob=====================
    if (!dob) {
      formIsValid = false;
      errors["dob"] = "Cannot be empty";
    } else if (typeof dob !== "undefined") {
      if (
        !dob.match(
          /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/gi)
      ) {
        formIsValid = false;
        errors["dob"] = "date format DD/MM/YYYY";
      }
    }

    //===================gender====================
    if (!gender) {
      formIsValid = false;
      errors["gender"] = "Cannot be empty";
    } else if (typeof gender !== "undefined") {
      if (
        !gender.match(/^[a-zA-Z]*$/)
      ) {
        formIsValid = false;
        errors["gender"] = "Only letters ";
      }
    }

    //===================bloodGroup====================          
    if (!bloodGroup) {
      formIsValid = false;
      errors["bloodGroup"] = "Cannot be empty";
    } else if (typeof bloodGroup !== "undefined") {
      if (
        !bloodGroup.match(/^(A|B|AB|O)[+-]$/)
      ) {
        formIsValid = false;
        errors["bloodGroup"] = "Only Capital letters ";
      }
    }

    //===================country====================  
    if (!country) {
      formIsValid = false;
      errors["country"] = "Cannot be empty";
    } else if (typeof country !== "undefined") {
      if (
        !country.match(/^[a-zA-Z]*$/)
      ) {
        formIsValid = false;
        errors["country"] = "Only letters ";
      }
    }

    //===================maritialStatus=====================
    if (!maritialStatus) {
      formIsValid = false;
      errors["maritialStatus"] = "Cannot be empty";
    } else if (typeof maritialStatus !== "undefined") {
      if (
        !maritialStatus.match(/^[a-zA-Z]*$/)
      ) {
        formIsValid = false;
        errors["maritialStatus"] = "Only letters ";
      }
    }

    //===================panCard=====================                    
    if (!panCard) {
      formIsValid = false;
      errors["panCard"] = "Cannot be empty";
    } else if (typeof panCard !== "undefined") {
      if (
        !panCard.match(/^([A-Z]{5}[0-9]{4}[A-Z]{1})$/)
      ) {
        formIsValid = false;
        errors["panCard"] = " Enter valid Pan Number ex. ABCDE1234F";
      }
    }

    //===================password=====================                    
    if (!password) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    } else if (typeof password !== "undefined") {
      if (
        !password.match(/^(?=.*[a-z]?)(?=.*[A-Z]?)(?=.*[0-9]?)(?=.*[!@#$%]?)(?=\S+$).{6,15}$/)
      ) {
        formIsValid = false;
        errors["password"] = "Password should be UpperCase,LowerCase,Number/SpecialChar(!@#$%) and length min-6 max-15 .";
      }
    }

    //===================drivingLycence=====================                    
    if (!drivingLycence) {
      formIsValid = false;
      errors["drivingLycence"] = "Cannot be empty";
    } else if (typeof drivingLycence !== "undefined") {
      if (
        !drivingLycence.match(/^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/gm)
      ) {
        formIsValid = false;
        errors["drivingLycence"] = "Enter Valid driving license number ex. MH12 19123456789 or MH-12191234567";
      }
    }

    //===================adharNumber=====================              
    if (!adharNumber) {
      formIsValid = false;
      errors["adharNumber"] = "Cannot be empty";
    } else if (typeof adharNumber !== "undefined") {
      if (
        !String(adharNumber).match(/^\d{12}$/)
      ) {
        formIsValid = false;
        errors["adharNumber"] = "Plaese valid Aadhar 12 digit number";
      }
    }

    //===================mobile=====================                    
    if (!mobile) {
      formIsValid = false;
      errors["mobile"] = "Cannot be empty";
    } else if (typeof mobile !== "undefined") {
      if (
        !String(mobile).match(/^\d{10}$/)
      ) {
        formIsValid = false;
        errors["mobile"] = "Plaese Enter Your 10 digit Mobile Numbers.";
      }
    }

    //===================workPhone=====================                   
    if (!workPhone) {
      formIsValid = false;
      errors["workPhone"] = "Cannot be empty";
    } else if (typeof workPhone !== "undefined") {
      if (
        !String(workPhone).match(/^\d{10}$/)
      ) {
        formIsValid = false;
        errors["workPhone"] = "Plaese Enter Your 10 digit Workphone Numbers.";
      }
    }

    //===================email=====================                   
    if (!email) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    } else if (typeof email !== "undefined") {
      if (
        !email.match(/^[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{0,8}$/)
      ) {
        formIsValid = false;
        errors["email"] = "Please Enter Your Valid Email-id.";
      }
    }

    //===================Linkedin=====================                   
    if (!Linkedin) {
      formIsValid = false;
      errors["Linkedin"] = "Cannot be empty";
    } else if (typeof Linkedin !== "undefined") {
      if (
        !Linkedin.match(/^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/in\/[A-z0-9_-]+(\/)?/)
      ) {
        formIsValid = false;
        errors["Linkedin"] = "Ex. linkedin.com/in/asychron123 or https://www.linkedin.com/in/asychron-123-asy or www.linkedin.com/in/asychron123 ";
      }
    }

    //===================skypeId=====================                   
    if (!skypeId) {
      formIsValid = false;
      errors["skypeId"] = "Cannot be empty";
    } else if (typeof skypeId !== "undefined") {
      if (
        !skypeId.match(/^[a-zA-Z][a-zA-Z0-9\.,\-_]{1,40}$/)
      ) {
        formIsValid = false;
        errors["skypeId"] = "ex. asy.chron.soft123 or asychron123 or asychron.soft ";
      }
    }

    //===================permanantAdd=====================
    if (!permanantAdd) {
      formIsValid = false;
      errors["permanantAdd"] = "Cannot be empty";
    } else if (typeof permanantAdd !== "undefined") {
      if (
        !permanantAdd.match(/[A-Za-z0-9'\.\-\s\,]/)
      ) {
        formIsValid = false;
        errors["permanantAdd"] = "Please Enter You Address, also use space or(.,-) ";
      }
    }

    //===================currentAdd=====================
    if (!currentAdd) {
      formIsValid = false;
      errors["currentAdd"] = "Cannot be empty";
    } else if (typeof currentAdd !== "undefined") {
      if (
        !currentAdd.match(/[A-Za-z0-9'\.\-\s\,]/)
      ) {
        formIsValid = false;
        errors["currentAdd"] = "Please Enter You Address, also use space or(.,-)";
      }
    }

    //===============================================
    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  //=====================End Of Validation===========================

  componentDidMount() {
    this.getUsersData();
  }
  async getUsersData() {
    services.getService("users").then((res) => {
      console.log(res.data);
      const newData = res.data[0];
      this.setState({
        firstName: newData.firstName,
        lastName: newData.lastName,
        dob: newData.dob,
        gender: newData.gender,
        bloodGroup: newData.bloodGroup,
        country: newData.country,
        maritialStatus: newData.maritialStatus,
        panCard: newData.panCard,
        password: newData.password,
        drivingLycence: newData.drivingLycence,
        adharNumber: newData.adharNumber,
        mobile: newData.mobile,
        workPhone: newData.workPhone,
        email: newData.email,
        Linkedin: newData.Linkedin,
        skypeId: newData.skypeId,
        permanantAdd: newData.permanantAdd,
        currentAdd: newData.currentAdd,
        editId: newData._id,
      });
    });
  }

  submitHandler = async (e) => {
    console.log(this.state.data);
    e.preventDefault();
    const data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      dob: this.state.dob,
      gender: this.state.gender,
      bloodGroup: this.state.bloodGroup,
      country: this.state.country,
      maritialStatus: this.state.maritialStatus,
      panCard: this.state.panCard,
      password: this.state.password,
      drivingLycence: this.state.drivingLycence,
      adharNumber: this.state.adharNumber,
      mobile: this.state.mobile,
      workPhone: this.state.workPhone,
      email: this.state.email,
      Linkedin: this.state.Linkedin,
      skypeId: this.state.skypeId,
      permanantAdd: this.state.permanantAdd,
      currentAdd: this.state.currentAdd,
    };

    if (this.state.editId === "") {
      if (this.handleValidations()) {
        services.postService("users", data).then((res) => {
          console.log(res.data);
          this.getUsersData();
          this.setState({ profilePage: true, detailsPage: false })
        });
      }
    } else {
      if (this.handleValidations()) {
        await services
          .patchService("users", this.state.editId, data)
          .then((res) => {
            console.log(res.data);
            this.getUsersData();
            this.setState({ profilePage: true, detailsPage: false, editId: "" });
          });
      }
    }
  };

  handleReset = (form) => {
    this.setState({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      bloodGroup: "",
      country: "",
      maritialStatus: "",
      panCard: "",
      password: "",
      drivingLycence: "",
      adharNumber: "",
      mobile: "",
      workPhone: "",
      email: "",
      Linkedin: "",
      skypeId: "",
      permanantAdd: "",
      currentAdd: "",
    });
  };
  handleManualReset = (event) => {
    event.preventDefault();
    this.form.reset();
  };

  handleFirstNameChanged = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  handleLastNameChanged = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleDobChanged = (e) => {
    this.setState({
      dob: e.target.value,
    });
  };

  handleGenderChanged = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };

  handleBloodGrouChanged = (e) => {
    this.setState({
      bloodGroup: e.target.value,
    });
  };

  handleCountryChanged = (e) => {
    this.setState({
      country: e.target.value,
    });
  };

  handleMaritialStatusChanged = (e) => {
    this.setState({
      maritialStatus: e.target.value,
    });
  };

  handlePanCardChanged = (e) => {
    this.setState({
      panCard: e.target.value,
    });
  };

  handlePasswordChanged = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleDrivingLycenceChanged = (e) => {
    this.setState({
      drivingLycence: e.target.value,
    });
  };

  handleAdharNumberChanged = (e) => {
    this.setState({
      adharNumber: e.target.value,
    });
  };

  handleMobileChanged = (e) => {
    this.setState({
      mobile: e.target.value,
    });
  };

  handleWorkPhoneChanged = (e) => {
    this.setState({
      workPhone: e.target.value,
    });
  };

  handleEmailChanged = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleLinkedinChanged = (e) => {
    this.setState({
      Linkedin: e.target.value,
    });
  };

  handleSkypeIdChanged = (e) => {
    this.setState({
      skypeId: e.target.value,
    });
  };

  handlePermanantAddChanged = (e) => {
    this.setState({
      permanantAdd: e.target.value,
    });
  };

  handleCurrentAddChanged = (e) => {
    this.setState({
      currentAdd: e.target.value,
    });
  };
  render() {
    return (
      <div>
        {
          this.state.detailsPage ?

            <div className="jumbotron asy-main-jumbotron">
              <div className="row asy-main-row">
                <Col>
                  <h5 className="asy-main-page-heading"> Profile Details </h5>
                </Col>
              </div>

              <div className="form-container asy-mainBoxBorder">
                <form ref={(form) => (this.form = form)} onReset={this.handleReset} >
                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">First Name</label>
                      <input type="text" className="form-control asy-InputValues" id="FirstName" placeholder=" Fname Name"
                        onChange={this.handleFirstNameChanged} value={this.state.firstName} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["firstName"]}
                      </div>
                    </div>

                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Marital Status</label>
                      <input type="text" className="form-control asy-InputValues" id="MaritalStatus" placeholder="Marital Status" onChange={this.handleMaritialStatusChanged} value={this.state.maritialStatus} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["maritialStatus"]}
                      </div>
                    </div>

                  </Row>
                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Last Name</label>
                      <input type="text" className="form-control asy-InputValues" id="LastName" placeholder="Last Name"
                        onChange={this.handleLastNameChanged} value={this.state.lastName} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["lastName"]}
                      </div>
                    </div>

                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Pan</label>
                      <input type="text" className="form-control asy-InputValues" id="Pan" placeholder="Pan"
                        onChange={this.handlePanCardChanged} value={this.state.panCard} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["panCard"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">DOB</label>
                      <input type="text" className="form-control asy-InputValues" id="DOB" placeholder="DD/MM/YYYY"
                        onChange={this.handleDobChanged} value={this.state.dob}
                        required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["dob"]}
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">password</label>
                      <input type="password" className="form-control asy-InputValues" id="password" placeholder="Password"
                        onChange={this.handlePasswordChanged} value={this.state.password} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["password"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Gender</label>
                      <input type="text" className="form-control asy-InputValues" id="Gender" placeholder="Gender"
                        onChange={this.handleGenderChanged} value={this.state.gender} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["gender"]}
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Driving License</label>
                      <input type="text" className="form-control asy-InputValues" id="DrivingLicense" placeholder="Driving License" onChange={this.handleDrivingLycenceChanged} value={this.state.drivingLycence} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["drivingLycence"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Blood Group</label>
                      <input type="text" className="form-control asy-InputValues" id="BloodGroup" placeholder="Blood Group"
                        onChange={this.handleBloodGrouChanged} value={this.state.bloodGroup} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["bloodGroup"]}
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Adhar #</label>
                      <input type="text" className="form-control asy-InputValues" id="Adhar" placeholder="Adhar #"
                        onChange={this.handleAdharNumberChanged} value={this.state.adharNumber} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["adharNumber"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Country</label>
                      <input type="text" className="form-control asy-InputValues" id="Country" placeholder="Country"
                        onChange={this.handleCountryChanged} value={this.state.country} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["country"]}
                      </div>
                    </div>
                  </Row>

                  <h5 className="page-heading">Contact Details</h5>
                  <hr className="hr-line" />

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Mobile No</label>
                      <input type="text" className="form-control asy-InputValues" id="MobileNo" placeholder="Mobile No"
                        onChange={this.handleMobileChanged} value={this.state.mobile} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["mobile"]}
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Skype ID</label>
                      <input type="text" className="form-control asy-InputValues" id="SkypeID" placeholder="Skype ID"
                        onChange={this.handleSkypeIdChanged} value={this.state.skypeId} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["skypeId"]}
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Work Phone</label>
                      <input type="text" className="form-control asy-InputValues" id="WorkPhone" placeholder="Work Phone"
                        onChange={this.handleWorkPhoneChanged} value={this.state.workPhone} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["workPhone"]}
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Personal Address</label>
                      <textarea type="text" className="form-control asy-InputValues" id="PersonalAddress" placeholder="Personal Address" onChange={this.handlePermanantAddChanged} value={this.state.permanantAdd} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["permanantAdd"]}
                      </div>
                    </div>
                  </Row>

                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Presonal Email</label>
                      <input type="email" className="form-control asy-InputValues" id="PresonalEmail" placeholder="Personal Email" onChange={this.handleEmailChanged} value={this.state.email} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["email"]}
                      </div>
                    </div>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputPassword" className="col-form-label">Current Address</label>
                      <textarea type="text" className="form-control asy-InputValues" id="CurrentAddress" placeholder="Current Address" onChange={this.handleCurrentAddChanged} value={this.state.currentAdd} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["currentAdd"]}
                      </div>
                    </div>
                  </Row>
                  <Row>
                    <div className="form-group col-12 col-md-6">
                      <label for="inputdegree" className="col-form-label">Linkedin</label>
                      <input type="text" className="form-control asy-InputValues" id="Linkedin" placeholder="Linkedin"
                        onChange={this.handleLinkedinChanged} value={this.state.Linkedin} required />
                      <div style={{ color: "red" }}>
                        {this.state.errors["Linkedin"]}
                      </div>
                    </div>
                  </Row>

                  <div className="text-center">
                    <Button onClick={this.submitHandler.bind(this)} className="asy-secondary-submit-button">
                      Update
                    </Button>

                    <Button onClick={() => this.setState({ profilePage: true, detailsPage: false })}
                      onClickCapture={this.handleManualReset}
                      className="asy-secondary-cancle-button">
                      Cancel
                    </Button>
                  </div>

                </form>
              </div>

            </div>
            : null
        }

        {this.state.profilePage ?
          <Profiles /> : null}
      </div>
    );
  }
}
export default ProfileDetails;


/*
import moment from 'moment';
 <input type="text" className="form-control asy-InputValues" id="DOB" placeholder="DD/MM/YYYY"
            onChange={this.handleDobChanged} value={moment(this.state.dob).format("DD/MM/YYYY")}  required />
  */