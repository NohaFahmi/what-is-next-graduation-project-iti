import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import logo from '../../assets/surface1.svg'
import {SearchOutlined} from '@ant-design/icons';
const Nav = ()=>{
    return(
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
            <div>
                 <Link to="/signup"><input type="button" value="Sign up"className="navbar-button"/></Link>
            </div>
        </div>
        
    </div>
    )
}

export default Nav;