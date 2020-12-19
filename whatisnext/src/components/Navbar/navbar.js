import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/surface1.svg'
import { SearchOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import UserDropdown from './user-dropdown';

class Navigation extends Component {

    constructor() {
        super()
        this.state = {
            user: ' ',
            profile: false
        }
    }
    redirectToTarget = () => {
        this.props.history.push('/settings')
    }
    handleLogout = (e) => {
        this.setState({ 'user': ' ' });
        this.setState({ 'profile': false });
        localStorage.clear();
        this.props.history.push('/');
    }
    render() {

        // console.log(this.state.user)
        return (
            <div className="navbar" id="first-navbar">
                <Navbar className="container" collapseOnSelect expand="lg" variant="dark">
                    <Navbar.Brand className="logo"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <HashLink to="/" className="link-title" >Home</HashLink>
                            <HashLink className="link-title" smooth={true} duration={500} to="/#explore-career" >Explore Career</HashLink>
                            <HashLink className="link-title" smooth={true} duration={500} to="/#about-us"  >About Us</HashLink>
                            <Form inline className="formControl">
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{ borderRadius: '15px' }} />
                                <SearchOutlined />
                            </Form>
                        </Nav>
                        <Nav>

                            {!this.state.profile && (

                                <Link to="/signup" className="mr-sm-2">
                                    <input
                                        type="button"
                                        value="Sign up"
                                        className="navbar-button"
                                    />
                                </Link>

                            )
                            }

                            {/* PROFILE LIST */}
                            {
                                this.state.profile && (

                                    <UserDropdown click={this.handleLogout} />
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>



        );
    }

    componentDidMount() {

        const login_token = localStorage.getItem('user_auth');
        if (login_token) {
            // const user_founded = JSON.parse(login_token);
            this.setState({ 'user': login_token })
            this.setState({ 'profile': true })
        }

        // console.log('AUTH', this.state.user)
    }



    // componentDidUpdate() {
    //     // this.setState({profile: this.props.status})
    //     console.log('NAVBAR', this.props.status)
    // }

    // componentDidCatch() {
    //     console.log('NAVBAR', this.props.status)

    // }

    // componentWillUnmount() {
    //     console.log('NAVBAR', this.props.status)

    // }

}


const mapStateToProps = (state) => {
    // console.log("UPDATED", state.users.userStatus)
    return {
        // status: state.users.userStatus
    }
}

export default connect(mapStateToProps, actions)(withRouter(Navigation));