import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions'
class SocialLinks extends Component {
    constructor() {
        super();

        this.state = {
            data: {},
            socialLinks: {

            },
            save_disabled: true
        }
    }

    handleChange = (e) => {
        this.setState({save_disabled: false})
        let socialLinks = this.state.socialLinks
        socialLinks[e.target.name] = e.target.value

        this.setState({ socialLinks });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let data = this.state.data;
        data['socialLinks'] = this.state.socialLinks
        this.props.update_user_data(this.state.data, this.state.data._id);
        console.log("Submitted")
    }
    render() {
        return (
            <div className="Content-container">
                <h5>Social Media Links</h5>
                <form onSubmit={this.handleSubmit}>
                    <h5>GITHUB</h5>
                    <Form.Row>
                        <Col xs={4}>
                            <input placeholder="GitHub Link" name="github" onChange={this.handleChange} className="form-control" />
                        </Col>
                    </Form.Row>

                    <h5>LINKEDIN</h5>
                    <Form.Row>
                        <Col xs={4}>
                            <input placeholder="LinkedIn Link" name="linkedin" onChange={this.handleChange} className="form-control" />
                        </Col>
                    </Form.Row>

                    <h5>TWITTER</h5>
                    <Form.Row>
                        <Col xs={4}>
                            <input placeholder="Twitter Link" name="twitter" onChange={this.handleChange} className="form-control"/>
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
export default connect(mapStateToProps, actions)(SocialLinks);