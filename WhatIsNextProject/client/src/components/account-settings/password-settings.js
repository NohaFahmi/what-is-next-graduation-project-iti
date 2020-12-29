import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions'
class PasswordSettings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            current_pass: '',
            new_pass_disabled: true,
            save_disabled: true,
            valid: true,
            data: {

            },
            passwords: {

            }
        }
    }

    checkOld = (e) => {

        this.setState({ current_pass: e.target.value });
        if (this.state.data.password === e.target.value) {
            this.setState({ new_pass_disabled: false, valid: true })
        } else {
            this.setState({ new_pass_disabled: true, valid: false })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.passwords.password === this.state.passwords.confirm_password) {
            this.setState({valid: true});
            let data = this.state.data;
            data['password'] = this.state.passwords.password
            this.setState({data});
            this.props.update_user_data(this.state.data, this.state.data._id);
        } else {
        
            this.setState({valid: false});

        }

    }

    handleChangePassword = (e) => {

        this.setState({ save_disabled: false });

        let passwords = this.state.passwords;
        passwords[e.target.name] = e.target.value;

        this.setState({ passwords });
        
        
    }
    render() {
        // const {password} = this.props.old_password[0]
        const alerts = (this.state.valid) ? "form-control" : "form-control is-invalid"
        // console.log(password)
        return (
            <div className="Content-container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Change Your Password</h5>
                    {/* <Form.Row>
                        <Col xs={4}>
                            <input placeholder="Current Password" type="password" className={alerts} onChange={this.checkOld} />

                        </Col>
                    </Form.Row> */}
                    <Form.Row className="mt-4">
                        <Col xs={4}>
                            <label for='pass'>Password</label>
                            <input placeholder="New Password" className={alerts} onChange={this.handleChangePassword} id="pass" name='password' type='password' />

                        </Col>
                    </Form.Row>
                    <Form.Row className="mt-4">
                        <Col xs={4}>
                            <label for='confirm-pass'>Confirm Password</label>
                            <input placeholder="Confirm Password" className={alerts} onChange={this.handleChangePassword} id="confirm-pass" name="confirm_password" type='password'/>

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
export default connect(mapStateToProps, actions)(PasswordSettings);
