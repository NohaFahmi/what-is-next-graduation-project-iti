
import './welcome.css';
import onlineCourses from '../../assets/online-courses-illustration.jpg';
import { Menu, Dropdown, Button } from 'antd';

import {CaretDownOutlined} from '@ant-design/icons'

const WelcomeSection = () => {
    const menu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" href='/'>
                choice 1
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" href="/">
                choice 2
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" href="/">
                choice 3
            </a>
          </Menu.Item>
        </Menu>
      );
    return (
        
        <div className="welcome-container">
            <div className="text-side">
                <h1>Learning Paths</h1>
                <h2>Find your path. Start your journey.</h2>
                <p>Our Recommended learning paths are for everyone who wishes to advance their career or even starting new one.</p>
                <div className="dropdowns">
                    {/*  career dropdown*/}
                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button className="drop-career">Careers <CaretDownOutlined /></Button>
                    </Dropdown>
                    {/*  tracks dropdown*/}

                    <Dropdown overlay={menu} placement="bottomCenter" arrow>
                        <Button className="drop-tracks">Tracks <CaretDownOutlined /></Button>
                    </Dropdown>

                    <Button className="go-btn">
                        GO
                    </Button>
                    
                </div>
                
            </div>
            <div className="img-side">
                <img className="img-side" alt='img' src={onlineCourses} />
            </div>
                
        </div>
                
                    
        
    );
}

export default WelcomeSection;
