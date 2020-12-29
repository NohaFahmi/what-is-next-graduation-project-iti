import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'
import logo from "../../assets/surface1.svg";

//actions

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          loginData: {
    
          },
          errors: {},
          sign_In: false,
          logged_in: false
        };
    }

    //handle inputs change values
    handleOnChangeLogin = (e) => {

        let loginData = this.state.loginData
    
        loginData[e.target.name] = e.target.value
    
        this.setState({loginData});//update state with login info
    }
    //handle sending login info to db and get auth_token
    handleSignIn = async(e) => {
      e.preventDefault();
      // console.log('SignedIn!', this.state.loginData);
      // this.props.onLogin('true');
      //call action
      await this.props.user_login(this.state.loginData);
      await localStorage.setItem("auth_token", this.props.auth_token);//save auth_tokens
      localStorage.setItem("user_mail", this.state.loginData.mail);//save user email

      //redirect to profile
      this.props.history.push('/home');
      this.setState({logged_in: true})
      
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
            <form onSubmit={this.handleSignIn} >
              <div className="signUp">
                <p>Sign in</p>
                <p>Welcome Back</p>
              </div>
              <div className="signUp-form">
                <input type="email" placeholder="Email Address" onChange={this.handleOnChangeLogin} name="mail"/>

                <input type="password" placeholder="Password" onChange={this.handleOnChangeLogin} name="password" />

              </div>
              <div className="signIn-text">
                <a href=" ">Forgot Password?</a>
              </div>

              <div className="signIn-btn">
                <input type="submit" value="Sign In"/>
              </div>
            </form>
            </div>
        )
    }
    
}
const mapStateToProps = (state) => {
    console.log('LOGIN STATE', state)
    return {
      auth_token: state.users.authentication_token
    }
}
  // const mapDispatchToProps = (dispatch) => {
  //   return bindActionCreators({addUser, updateUserStatus}, dispatch);
  // }
  export default connect(mapStateToProps, actions)(withRouter(Login));

