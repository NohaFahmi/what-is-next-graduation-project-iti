import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import {DatePicker} from 'antd';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { connect } from 'react-redux';
import * as actions from '../../actions'
// CountryRegionData
class Info extends Component {

    constructor() {
        super();
        this.state = {
            country: '',
            region: '',
            data: {

            },
            save_disabled: true,
            bio: "",
        };

        // const userInfo = this.props.userInfo[0];
    }
    
    onChange = (date, dateString) => {
        this.setState({save_disabled: false});
        let d = new Date(date).getFullYear();
        let c = new Date().getFullYear();
        // console.log(c - d);
        let data = this.state.data;
        data["age"] = c - d;
        this.setState({data});
    }

    handleChange = (e) => {

        this.setState({save_disabled: false});
        if(e.target.id === 'user-bio') {
            this.setState({bio: e.target.value})
        } 
        if(e.target.name === 'gender') {
            let data = this.state.data;
            data[e.target.name] = e.target.value;
            this.setState({data});
        }
        
        
        
        

    }

    selectCountry(val) {
        this.setState({ country: val, save_disabled: false });
    }

    selectRegion(val) {
        this.setState({ region: val, save_disabled: false });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let data = this.state.data

        data['location'] = {'country': this.state.country, 'region': this.state.region}
        data['bio'] = this.state.bio
        data['career'] = localStorage.getItem('track_selected');
        
        this.setState({data});
        
        this.props.update_user_data(this.state.data, this.state.data._id);
        
    }

   
    render() {
        return(
            <div className="Content-container">
                                <form onSubmit={this.handleSubmit}>
                                    <h5>About You</h5>
                                    <Form.Row className="mt-4">
                                        <Col xs={5}>
                                            <textarea className="form-control" placeholder="Tell Us More About yourself" id='user-bio' name="bio" onChange={this.handleChange} />
                                        </Col>
                                    </Form.Row>
                                    <h5>Gender</h5>
                                    <Form.Row className="mt-4">
                                        <Col xs={3}>
                                            <select className="form-control" onChange={this.handleChange} name="gender" value={this.state.data['gender']}>
                                                <option >Male</option>
                                                <option>Female</option>
                                            </select>
                                        </Col>
                                    </Form.Row>
                                    <h5>Date of birth</h5>
                                    <Form.Row className="mt-4">
                                        <DatePicker onChange={this.onChange} style={{ marginLeft: '10px', width: '30%' }} name="age"/>
                                    </Form.Row>
                                    <h5>Location</h5>
                                    <Form.Row className="mt-4">
                                        <Col xs='auto'>
                                            <div>
                                                <CountryDropdown
                                                    value={this.state.country}
                                                    onChange={(val) => this.selectCountry(val)} style={{ height: "40px", margin: "0 10px 0 0", padding: '10px', outline: 'none', borderRadius: '5px', borderColor: 'lightgrey' }} />
                                                <RegionDropdown
                                                    country={this.state.country}
                                                    value={this.state.region}
                                                    onChange={(val) => this.selectRegion(val)} style={{ height: "40px", padding: '10px', outline: 'none', borderRadius: '5px', borderColor: 'lightgrey' }} />
                                            </div>
                                        </Col>
                                    </Form.Row>
                                    <Form.Row className='mt-5 justify-content-start'>
                                        <Col xs='auto'>
                                            <Button type="submit" disabled={this.state.save_disabled} className="rst-btn">Save Changes</Button>
                                        </Col>
                                        <Col xs='auto'>
                                            <Button type="reset" className="rst-btn">Reset</Button>
                                        </Col>
                                    </Form.Row>
                                </form>
                            </div>
        )
    }
    componentDidMount() {

        const login_token = localStorage.getItem('auth_token');
        if (login_token) {
            this.setState({ 'user': login_token, 'profile': true })
        }
        const email = localStorage.getItem('user_mail');
        if (email) {
            console.log(email)
            this.props.get_full_user_info(email);
            if(this.props.get_full_user_info(email)) {
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
    // console.log('STATE SETTINGS', state.users.user_info);
    return {
        user_data: state.users.user_info,
        update_msg: state.users.new_data

    }
}
export default connect(mapStateToProps, actions)(Info);
