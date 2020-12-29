import './settings.css'
import { Component } from 'react';
import { Tabs} from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import * as actions from '../../actions';
import { SettingOutlined, LockOutlined, InfoCircleOutlined, LogoutOutlined} from '@ant-design/icons'
import GeneralSettings from './general-settings';
import Info from './info';
import SocialLinks from './social-links';
import PasswordSettings from './password-settings';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';
import Loading from './../loading/loading';

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
            profile:true,
            data: {}

        }
    }

    handleLogout = (e) => {
        this.setState({ 'user': ' ' });
        this.setState({ 'profile': false });
        localStorage.clear();
        this.props.history.push('/');
    }
    
    render() {
        // const {user_data} = this.props
        if(this.props.user_data) {
            console.log("FULL USER IS HERE", this.props.user_data)
            return (
                <div className='settings-container'>
                    <h2>Account Settings</h2>
                    <div className='sidebar'>
                        {/* <Button type="button" className="align-self-end">Go To Your Profile</Button> */}
                        {/* tabBarStyle={{backgroundColor: 'black', color: 'white', borderRadius: '10px'}} */}
    
                       <Tabs tabPosition='left' size='large' type='line' defaultActiveKey='1' tabBarGutter='30px'>
                            <TabPane tab={<span><SettingOutlined />General</span>} key="1" size='large'>
                            <GeneralSettings basic_data=''/>
                               
                            </TabPane>
                            <TabPane tab={<span><LockOutlined />Change Password</span>} key="2">
                                <PasswordSettings basic_data=''/>
                            </TabPane>
                            <TabPane tab={<span><InfoCircleOutlined />Info</span>} key="3">
                               <Info basic_data=''/>
                            </TabPane>
                            <TabPane tab={<span><IconFont type='icon-social_links' />Social Links</span>} key="4">
                                <SocialLinks basic_data=''/>
                            </TabPane>
                        </Tabs>
                        <button type='button' className="log-out-btn btn-danger" onClick={this.handleLogout}>LOG OUT <LogoutOutlined style={{ fontSize: '16px' }} /></button>
    
                    </div>
                </div>
            )
        }
        return <Loading />
        
    }

    componentDidMount () {

        const login_token = localStorage.getItem('auth_token');
        if(login_token) {
            this.setState({'user': login_token, 'profile': true})
        }
        const email = localStorage.getItem('user_mail');
        if(email) {
            console.log(email)
            this.props.get_full_user_info(email);
            if(this.props.user_data) {
                let data = this.state.data
                data['_id'] = this.props.user_data.user[0]._id
                data['firstName'] = this.props.user_data.user[0].firstName
                data['lastName'] = this.props.user_data.user[0].lastName
                data['mail'] = this.props.user_data.user[0].mail
                data['password'] = this.props.user_data.user[0].password
                data['age'] = (this.props.user_data.user[0].age) ? this.props.user_data.user[0].age : ''
                data['gender'] = (this.props.user_data.user[0].gender) ? this.props.user_data.user[0].gender : ''
                data['location'] = (this.props.user_data.user[0].location) ? this.props.user_data.user[0].location : ''
                data['bio'] = (this.props.user_data.user[0].bio) ? this.props.user_data.user[0].bio : ''
                data['socialLinks'] = (this.props.user_data.user[0].socialLinks) ? this.props.user_data.user[0].socialLinks : ''
                data['profilPicture'] = (this.props.user_data.user[0].profilPicture) ? this.props.user_data.user[0].profilPicture : ''
                this.setState({
                    data
                })
            }   
        }
      
    }

}

const mapStateToProps = (state) => {
    console.log('STATE SETTINGS', state);
    return {
        user_data: state.users.user_info

    }
}


export default connect(mapStateToProps,actions)(withRouter(Settings));
