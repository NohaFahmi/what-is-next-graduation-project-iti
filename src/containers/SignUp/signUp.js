import "./signUp.css";
import logo from "../../assets/surface1.svg";
import React, { Component } from "react";
//redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
//actions
import {addUser} from '../../actions';

class signUp extends Component {
  constructor() {
    super();
    this.state = {
      fields: {
        // f_name: '',
        // l_name: '',
        // email: '',
        // password: '',
        // confirm_password: '',
        // checked: ''
      },
      errors: {},
      sign_In: false,
      
    };
  }

  //handle validation
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    //f_name && l_name
    if(!fields['f_name']) {
      formIsValid = false;
      errors['f_name'] = "this field can't be empty!";
    }

    if(!fields['l_name']) {
      formIsValid = false;
      errors['l_name'] = "this field can't be empty!";
    }

    if(typeof fields['f_name'] !== undefined) {
      if(!fields['f_name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['f_name'] = "name can be letters only!"
      } else {
        errors['f_name'] = ""
      }
    }

    if(typeof fields['l_name'] !== undefined) {
      if(!fields['l_name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['l_name'] = "name can be letters only!"
      } else {
        errors['l_name'] = ""
      }
    }
    //email
    if(!fields['email']) {
      formIsValid = false;
      errors['email'] = "this field can't be empty!";
    }

    const email_pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(typeof fields['email'] !== undefined) {
      if(!fields['email'].match(email_pattern)) {
        formIsValid = false;
        errors['email'] = "enter a valid email, please!"
      } else {
        formIsValid = true;
        errors['email'] = ""
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
  handleChange = (e) => {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value;
    this.setState({fields});

  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    //handle not matched passwords!
    if(this.handleValidation()) {
      console.log('Submitted!', this.state);
      
      this.props.addUser(this.state.fields);
    } else {
      console.log("form has errors");
    }
  }

  componentDidMount() {
    
    // console.log('PROPS', this.props);

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
                <input type="text" placeholder="first name" name="f_name" onChange={this.handleChange} value={this.state.fields['f_name']} required/>

                <p style={{color: 'red'}}>{this.state.errors['f_name']}</p>
                <input type="text" placeholder="last name" name="l_name" onChange={this.handleChange}  required/>
                <p style={{color: 'red'}}>{this.state.errors['l_name']}</p>
              </div>
              <div className="signUp-form">
                <input type="email" placeholder="Email Address" name="email" onChange={this.handleChange} required/>
                <p style={{color: 'red'}}>{this.state.errors['email']}</p>

                <input type="password" placeholder="Password" name="password" onChange={this.handleChange} required/>
                <p style={{color: 'red'}}>{this.state.errors['password']}</p>

                <input type="password" placeholder="Confirm Password" name='confirm_password' onChange={this.handleChange} required/>
                <p style={{color: 'red'}}>{this.state.errors['password']}</p>

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
            <form onSubmit={this.handleSubmit}>
              <div className="signUp">
                <p>Sign in</p>
                <p>Welcome Back</p>
              </div>
              <div className="signUp-form">
                <input type="text" placeholder="Email Address" onChange={this.handleChange}/>
                <input type="text" placeholder="Password" onChange={this.handleChange}/>
              </div>
              <div className="signIn-text">
                <a href=" ">Forgot Password?</a>
              </div>

              <div className="signIn-btn">
                <input type="submit" value="Sign In" />
              </div>
            </form>
          )}
          {/**************** * SIGN IN END*********************/}
        </div>
        {/**************** * RIGHT BOX END DIV*********************/}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addUser}, dispatch);
}
export default connect(null, mapDispatchToProps)(signUp);
