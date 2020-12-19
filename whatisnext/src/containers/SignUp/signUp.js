import "./signUp.css";
import logo from "../../assets/surface1.svg";
import React, { Component } from "react";
//redux
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

//actions
// import {addUser} from '../../actions';
// import { updateUserStatus } from './../../actions/index';
import * as actions from '../../actions'
class signUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
   
      },
      userData: {

      },
      loginData: {

      },
      errors: {},
      sign_In: false,
      user_status: false
      
    };
  }

  //handle validation
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    //f_name && l_name
    if(!fields['firstName']) {
      formIsValid = false;
      errors['lastName'] = "this field can't be empty!";
    }

    if(!fields['lastName']) {
      formIsValid = false;
      errors['lastName'] = "this field can't be empty!";
    }

    if(typeof fields['firstName'] !== undefined) {
      if(!fields['firstName'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['firstName'] = "name can be letters only!"
      } else {
        errors['firstName'] = ""
      }
    }

    if(typeof fields['lastName'] !== undefined) {
      if(!fields['lastName'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['lastName'] = "name can be letters only!"
      } else {
        errors['lastName'] = ""
      }
    }
    //email
    if(!fields['mail']) {
      formIsValid = false;
      errors['mail'] = "this field can't be empty!";
    }

    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(typeof fields['mail'] !== undefined) {
      if(!fields['mail'].match(email_pattern)) {
        formIsValid = false;
        errors['mail'] = "enter a valid email, please!"
      } else {
        formIsValid = true;
        errors['mail'] = ""
      }
    }
    
    //passwords matched
    if(!fields['password']) {
      formIsValid = false;
      errors['password'] = "this field can't be empty!";
    }
    if((!fields['confirm_password'])) {
      formIsValid = false;
      errors['password'] = "this field can't be empty!";
    }
    
    const pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

    if((typeof fields['password'] !== undefined) && (typeof fields['confirm_password'] !== undefined)) {
      //password valid

      if(!fields['password'].match(pass_pattern)) {
        formIsValid = false;
        errors['password'] = 'your password should have at least 1 number, 1 lowercase letter, 1 uppercase letter and at least 8 characters length!';
      } else if(fields['password'] !== fields['confirm_password']) {
        formIsValid = false;
        errors['password'] = 'Passwords are not matched!!';
      } else {
        formIsValid = true;
        errors['password'] = '';
      }
    }

    // if(typeof fields['password'] !== undefined) {
      
    // }

    this.setState({errors: errors});
    return formIsValid;
  }
  //adding handleChange function to input
  handleOnChangeLogin = (e) => {

    let loginData = this.state.loginData

    loginData[e.target.name] = e.target.value

    this.setState({loginData});
  }

  handleChange = (e) => {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value;
    this.setState({fields});
    let userData = this.state.userData;

    switch(e.target.name) {
      case "firstName": 
        userData['firstName'] = e.target.value;
      
      break;
      case 'lastName': 
      
        userData['lastName'] = e.target.value;


      break;
      case 'password': 
        userData['password'] = e.target.value;

      
      break;
      case 'mail': 
      
        userData['mail'] = e.target.value;

      
      break;

      default:
        return "No"

    }
    this.setState({userData});
    
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    //handle not matched passwords!
    if(this.handleValidation()) {

      console.log('Submitted!', this.state.userData);

      this.props.addUser(this.state.userData);

    } else {
      console.log("form has errors");
    }

  }
  handleSignIn = (e) => {
    e.preventDefault();
      console.log('SignedIn!', this.state.userData);
      this.props.getUserData(this.state.loginData);
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="parent-box">
        <div className="left-child">
          <img src={logo} className="in-logo" alt='logo'/>
          <p className="in-text">
            <b>Find your learning path and start your journey</b>
          </p>
        </div>
        {/***********RIGHT BOX DIV***************/}
        <div className="right-child">
            {/**************** * SIGN UP DIV*********************/}
          {!this.state.sign_In && (
            <form onSubmit={this.handleSubmit}>
              <div className="signUp">
                <p>Sign Up</p>
                <p>Join Our Community</p>
              </div>

              <div className="username">
                <input type="text" placeholder="first name" name="firstName" onChange={this.handleChange} required id="first"/>

                <p style={{color: 'red' , display: 'contents'}}>{this.state.errors['firstName']}</p>
                <input type="text" placeholder="last name" name="lastName" onChange={this.handleChange}  required id="last"/>
                <p style={{color: 'red' ,display: 'contents'}}>{this.state.errors['lastName']}</p>
              </div>
              <div className="signUp-form">
                <input type="email" placeholder="Email Address" name="mail" onChange={this.handleChange} required/>
                <p className="info-err">{this.state.errors['mail']}</p>

                <input type="password" placeholder="Password" name="password" onChange={this.handleChange} required/>
                <p className="info-err">{this.state.errors['password']}</p>

                <input type="password" placeholder="Confirm Password" name='confirm_password' onChange={this.handleChange} required/>
                <p className="info-err">{this.state.errors['password']}</p>

              </div>
              <div className="privacy-text">
                <input type="checkbox" name="checked" onChange={this.handleChange} required/>
                <p>
                  I have accepted the <a href=" ">Terms and Conditions</a>
                </p>
              </div>
              <div className="signUp-btn">
                {/* edited input type to submit */}
                <input type="submit" value="Sign Up Now" />
              </div>
              <div className="signIn-text">
                <p>
                  Already have an account?
                  <a
                    href=" "
                    onClick={(e) => {
                      e.preventDefault()
                      this.setState({ sign_In: true });
                      
                    }}
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          )}
           {/**************** * SIGN UP end*********************/}
            {/**************** * SIGN IN START*********************/}
          {this.state.sign_In && (
            <form onSubmit={this.handleSignIn}>
              <div className="signUp">
                <p>Sign in</p>
                <p>Welcome Back</p>
              </div>
              <div className="signUp-form">
                <input type="text" placeholder="Email Address" onChange={this.handleOnChangeLogin} name="mail"/>

                <input type="text" placeholder="Password" onChange={this.handleOnChangeLogin} name="password" />

              </div>
              <div className="signIn-text">
                <a href=" ">Forgot Password?</a>
              </div>

              <div className="signIn-btn">
                <input type="submit" value="Sign In"/>
              </div>
            </form>
          )}
          {/**************** * SIGN IN END*********************/}
        </div>
        {/**************** * RIGHT BOX END DIV*********************/}
      </div>
    );
  }

  componentWillUnmount() {
    localStorage.setItem("user_auth", this.props.user_auth);
    localStorage.setItem("user_mail", this.state.userData.mail);
  }
}


const mapStateToProps = (state) => {
  return {
    user_auth: state.users.login_info
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({addUser, updateUserStatus}, dispatch);
// }
export default connect(mapStateToProps, actions)(withRouter(signUp));
