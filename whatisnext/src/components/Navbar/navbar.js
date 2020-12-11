import './navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/surface1.svg'
import profilePic from '../../assets/blank-profile.png'
import {SearchOutlined} from '@ant-design/icons';
import React, { Component } from 'react';

class Nav extends Component {
    constructor(){
        super()
        this.state ={
            profile:false
        }
    }
    render() {
        return (
            <div className=" navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="nav-anchors">
                    <Link to="/" style={{textDecoration: 'none' , color: 'white'}}>Home</Link>
                    <a>About Us</a>
                    <a>Explore Career</a>
                </div>
                <div>
                     <input type="text" className="navbar-search" placeholder="Search..."/>
                       <a className="searchIcon"><SearchOutlined  /></a>  
    
                     
                </div>
                {/* SIGN UP BUTTON */}
                {!this.state.profile && (
                <div>
                
                     <Link to="/signup"><input type="button" value="Sign up"className="navbar-button"/></Link>
                </div>
                )}
                
                {/* PROFILE LIST */}
                {this.state.profile && (
                    <div>
                        <img src={profilePic} className="img-profile"/>
                        <select className="profile-list">
                            <option>Setting</option>
                            <option>Logout</option>
                        </select>
                    </div> 
                )}
                
            </div>
            
        </div>
        );
    }
}

export default Nav;