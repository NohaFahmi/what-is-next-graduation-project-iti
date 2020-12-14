import React from 'react'
import './footer.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Col,Row} from 'react-bootstrap';
import logo from '../../assets/surface1.svg'
import { FacebookOutlined , GithubOutlined ,LinkedinOutlined ,TwitterOutlined} from '@ant-design/icons';
const Footer = ()=>{
    return(
        <footer className="footer">
            <Container>
                <Row>
                <Col lg={4}>
                    <div className="logo">
                       <img src={logo} alt="logo"/>
                    </div>
                    
                    <p className="footer-text">What's Next is a website offers the help for anybody wants to 
                        know how to be whatever he wants.</p>
                        <div className="socialmedia-icons">
                            <a href=' '><GithubOutlined /></a>
                            <a href=' '><LinkedinOutlined /></a>
                            <a href=' '><TwitterOutlined /></a>
                            <a href=' '><FacebookOutlined /></a>
                        </div>
                        
                </Col>

                <Col lg={{span:2}}><a href=' ' className="footer-link"><p>Home</p></a>
                <a href=' ' className="footer-link"><p>About Us</p></a>
                <a href=' ' className="footer-link"><p>Explore Career</p></a>
                </Col>

                <Col lg={{offset:1 ,span:2}}><a href=' ' className="footer-link"><p>Roadmap</p></a>
                <a href=' ' className="footer-link"><p>Resources</p></a>
                <a href=' ' className="footer-link"><p>Community</p></a>
                </Col>

                <Col lg={3}><p>Get Our Newsletter</p>
                <input type="text" className="footer-subscribe" placeholder="Subscribe!"/>
                <input type="button" value="done" className="footer-button"/>
                
                </Col>
                </Row>

            </Container>
        </footer>
    )
}

export default Footer;