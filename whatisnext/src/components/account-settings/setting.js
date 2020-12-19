import './settings.css'
import { Component } from 'react';
import { Tabs} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import * as actions from '../../actions';
import { Button } from 'react-bootstrap';
// import userAvatar from '../../assets/user.svg';


import { SettingOutlined, LockOutlined, InfoCircleOutlined, LogoutOutlined} from '@ant-design/icons'
import GeneralSettings from './general-settings';
import Info from './info';
import SocialLinks from './social-links';
import PasswordSettings from './password-settings';
import { connect } from 'react-redux';
import Loading from './../loading/loading';
import { Link, Redirect } from 'react-router-dom';

const { TabPane } = Tabs;
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2266437_1i2qqd5bk2l.js',
});

// icon-social_links
class Settings extends Component {

    constructor() {
        super();
        this.state={
            user: '',
             profile:false

        }
    }

    gatheringAllData = (obj) => {
        let allData = this.state.allData
        allData.push(obj);
        this.setState({allData});
        
    }

    
    render() {
        return (
            <div className='settings-container'>
                <h2>Account Settings</h2>
                <div className='sidebar'>
                    {/* <Button type="button" className="align-self-end">Go To Your Profile</Button> */}
                    {/* tabBarStyle={{backgroundColor: 'black', color: 'white', borderRadius: '10px'}} */}
                    <Tabs tabPosition='left' size='large' type='line' defaultActiveKey='1' tabBarGutter='30px'>
                        <TabPane tab={<span><SettingOutlined />General</span>} key="1" size='large'>
                            {(this.props.fullUser) ?  <GeneralSettings basic_data={this.props.fullUser} getData={this.props.updateUserById}/> : <Loading />}
                           
                        </TabPane>
                        <TabPane tab={<span><LockOutlined />Change Password</span>} key="2">
                            {(this.props.fullUser) ? <PasswordSettings old_password={this.props.fullUser} getData={this.props.updateUserById} /> : <Loading />}
                        </TabPane>
                        <TabPane tab={<span><InfoCircleOutlined />Info</span>} key="3">
                            {(this.props.fullUser) ? <Info user_info={this.props.fullUser} getData={this.props.updateUserById}/> : <Loading />}
                        </TabPane>
                        <TabPane tab={<span><IconFont type='icon-social_links' />Social Links</span>} key="4">
                        {(this.props.fullUser) ? <SocialLinks getData={this.this.props.updateUserById} user_info={this.props.fullUser}/>: <Loading />}
                        </TabPane>
                    </Tabs>
                    <button type='button' className="log-out-btn btn-danger">LOG OUT <LogoutOutlined style={{ fontSize: '16px' }} /></button>

                </div>
            </div>
        )
    }

    componentDidMount () {
        const login_token = localStorage.getItem('user_auth');
        if(login_token) {
            // const user_founded = JSON.parse(login_token);
            this.setState({'user': login_token})
            this.setState({'profile': true})
        }
        const user_mail = localStorage.getItem("user_mail");
        // this.props.updateUserData(this.state.allData);
        this.props.getUserInfo(user_mail);
        this.props.getUserData();
        console.log('PROPS_Settings',this.props);
    }
    componentDidUpdate() {
        
        // const user_mail = localStorage.getItem("user_mail");
        // // this.props.updateUserData(this.state.allData);
        // this.props.getUserInfo(user_mail);

    }
}

const mapStateToProps = (state) => {
    console.log('STATE', state);
    return {
        users: state.users.user_data,
        fullUser: state.users.all_user_info
    }
}
export default connect(mapStateToProps, actions)(Settings);
