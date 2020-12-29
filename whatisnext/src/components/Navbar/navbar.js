import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/surface1.svg'
import { SearchOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap'
import UserDropdown from './user-dropdown';

//actions

class Navigation extends Component {

    constructor() {
        super();

        this.state = {
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
        )
    }
    componentDidMount() {
        if(localStorage.getItem('auth_token')) {
            this.setState({profile: true})
        }
    }
}
const mapStateToProps = (state) => {
    return {

    }
}


export default connect(mapStateToProps)(withRouter(Navigation));
