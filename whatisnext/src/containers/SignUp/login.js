import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'
import ReactTransitionGroup from 'react-addons-transition-group' // ES6


class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          userData: {
    
          },
          loginData: {
    
          },
          errors: {},
          sign_In: false,
          user_status: false
          
        };
    }

    handleOnChangeLogin = (e) => {

        let loginData = this.state.loginData
    
        loginData[e.target.name] = e.target.value
    
        this.setState({loginData});
    }

    handleSignIn = (e) => {
        e.preventDefault();
          console.log('SignedIn!', this.state.loginData);
          this.props.getUserData(this.state.loginData);
          this.props.history.push('/');
    }
    render() {
        return (
          
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
        )
    }
    componentDidMount() {
        document.querySelector('#first-navbar').style.display = 'none'
    }
    componentWillUnmount() {
        localStorage.setItem("user_auth", this.props.user_auth);
        localStorage.setItem("user_mail", this.state.loginData.mail);
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
  export default connect(mapStateToProps, actions)(withRouter(Login));

