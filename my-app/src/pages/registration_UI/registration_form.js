import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import './SignupForm.css';
import axios from "axios";

class TeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: '',
      email: '',
      password: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.openLogin = this.openLogin.bind(this);
  }

  onOpenModal = () => { this.props.onSignupShowChange(true); }
  onCloseModal = () => {
    this.setState({
      screenName: '',
      email: '',
      password: '',
      nameError: "",
      emailError: "",
      passwordError: "",
      isValid: true,
      nameFormatError: "",
      emailFormatError: "",
      pwFormatError: "",
      emailTakenError: "",
      nameTakenError: ""
    });
    this.props.onSignupShowChange(false)
  };
      


  openLogin = () => {
    this.onCloseModal();
    setTimeout(this.props.onLoginShowChange(true), 500);
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  validate() {
    let nameError = "";
    let emailError = "";
    let passwordError = "";
    let isValid = true;
    let nameFormatError = "";
    let emailFormatError = "";
    let pwFormatError = "";


    if (!this.state.screenName) {
      nameError = "Screen Name field is required. ";
    } else {
      nameError = "";
      this.setState({ nameError });
    }

    if ((this.state.screenName.length < 6) && (this.state.screenName.length >= 1)) {
      nameFormatError = "Screen Name must be at least 6 characters long."
    } else {
      nameFormatError = "";
      this.setState({ nameFormatError });
    }

    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!this.state.email) {
      emailError = "Email Address field is required.";
    } else {
      emailError = "";
      this.setState({ emailError });
    }

    if ((!pattern.test(this.state.email)) && (this.state.email)) {
      emailFormatError = "Email must be in the format xxxxx@xxxxx.xxx"
    } else {
      emailFormatError = "";
      this.setState({ emailFormatError });
    }

    if (!this.state.password) {
      passwordError = "Password field is required.";
    } else {
      passwordError = "";
      this.setState({ passwordError });
    }
    if ((this.state.password.length < 8) && (this.state.password.length >= 1)) {
      pwFormatError = "Password must be at least 8 characters long."
    } else {
      pwFormatError = "";
      this.setState({ pwFormatError });
    }


    if (nameError) {
      this.setState({ nameError });
      isValid = false;
    }

    if (nameFormatError) {
      this.setState({ nameFormatError });
      isValid = false;
    }

    if (emailError) {
      this.setState({ emailError });
      isValid = false;
    }

    if (emailFormatError) {
      this.setState({ emailFormatError });
      isValid = false;
    }

    if (passwordError) {
      this.setState({ passwordError });
      isValid = false;
    }

    if (pwFormatError) {
      this.setState({ pwFormatError });
      isValid = false;
    }

    return isValid;
  }


  onSubmit(e) {
    let emailTakenError = "";
    this.setState({ emailTakenError });
    let nameTakenError = "";
    this.setState({ nameTakenError });
    if (this.validate()) {
      e.preventDefault();
      const user = {
        email: this.state.email,
        password: this.state.password,
        screenName: this.state.screenName,
      };
      axios.post('http://localhost/staru/src/php/insertAcc.php', user)
        .then(res => {
          this.openLogin();
        })
        .catch(error => {
          if (error.response.status === 409) {
            emailTakenError = "This email is already in use by another StarU account.";
            this.setState({ emailTakenError });
          } else if (error.response.status === 412) {
            nameTakenError = "This username has already been taken.";
            this.setState({ nameTakenError });
          } else {
            alert("Unknown Database Error. Please refer to the README file for this web application.");
          }
        });
    }
  }


  render() {
    return (
      <>
        <Modal show={this.props.show} onExit={this.onCloseModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.onSubmit}>
              <h3>StarU</h3>
              <div className="form-group">
                <label htmlFor="exampleInputScreenName1">Screen Name</label>
                <input
                  type="text"
                  name="screenName"
                  className="form-control"
                  placeholder="Screen Name"
                  value={this.state.screenName}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.nameError}</span>
                <span className="text-danger">{this.state.nameFormatError}</span>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Address</label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.emailError}</span>
                <span className="text-danger">{this.state.emailFormatError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.passwordError}</span>
                <span className="text-danger">{this.state.pwFormatError}</span>
              </div>
              <div className="d-grid gap-2">
                <Button onClick={this.onSubmit} variant="primary" size="lg" className="buttModal" type="submit">
                  Submit
                </Button>
                <div className="bad-email">
                  <span className="text-danger">{this.state.emailTakenError}</span>
                  <span className="text-danger">{this.state.nameTakenError}</span>
                </div>
                <br></br>
                <p className="have-account text-right">
                  Already have an account? <a href="#" onClick={this.openLogin}>Log In</a>
                </p>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

}

export default SignupForm;