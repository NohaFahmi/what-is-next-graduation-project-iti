/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Divider } from 'antd';
import userAvatar from '../../assets/user.svg';
import { EditOutlined } from '@ant-design/icons'
import Files, { ImageCropper } from "react-butterfiles";
import * as actions from '../../actions';
import { connect } from 'react-redux';


class GeneralSettings extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            name_disabled: true,
            email_disabled: true,
            save_disabled: true,
            data: {},
            cropper: true,
            files: [],
            errors: [],
        }
        console.log(props);
    }

    handleSuccess = () => {
        console.log('Success');
    }

    handleErrors = () => {
        console.log('Errors')
    }
    // console.log(basic_data[0]);
    enableEdit = (e) => {
        if (e.target.id === 'edit-2') {
            this.setState({ email_disabled: false });

        } else if (e.target.id === 'edit-1') {
            this.setState({ name_disabled: false });
        } else {

            // console.log(e.target.id);

        }
    }


    handleChange = (e) => {

        this.setState({ save_disabled: false })
        let data = this.state.data
    
        if (e.target.name === 'profilPicture') {
        this.setState({ save_disabled: false })

            const [file] = e.target.files
            if(file) {
                // console.log(file)
                const reader = new FileReader()
                // console.log(this.myRef)
                const {current} = this.myRef
                current.file = file
                reader.onload = (e) => {
                    current.src = e.target.result;
                    data['profilPicture'] = e.target.result
                    this.setState({ data })
                    localStorage.setItem('profile_img', e.target.result)
                    
                }
                reader.readAsDataURL(file);
            }
            
            //todo: handle upload photo and save to server!
        } else {
            data[e.target.name] = e.target.value
            this.setState({ data })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log('submitted!');
        // const id= localStorage.getItem('user_id')
        console.log(this.state.data.profilPicture)
        this.props.update_user_data(this.state.data, this.state.data._id);
    }
    render() {

        return (
            <div className="Content-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row className='align-items-end'>
                        <div className="settings-avatar">

                            <img ref={this.myRef} alt="user-avatar" src={this.state.data.profilPicture}/>
                        </div>
                        <Form.Group>
                            <input id="account-pic" type='file' name='profilPicture' className='form-file' onChange={this.handleChange} />
                            <label htmlFor="account-pic" className="form-control-file">Change Your Account Picture</label>

                        </Form.Group>
                    </Form.Row>
                    <Divider />
                    <h5>Display Name</h5>
                    <Form.Row>

                        <Col xs={2}>
                            <input type="text" placeholder="first name" name="firstName" onChange={this.handleChange} value={this.state.data['firstName']} disabled={this.state.name_disabled} className='form-control' />
                        </Col>
                        <Col Col xs={2}>
                            <input type="text" placeholder="last name" name="lastName" onChange={this.handleChange} value={this.state.data['lastName']} disabled={this.state.name_disabled} className='form-control' />

                        </Col>
                        <button onClick={this.enableEdit} type='button' id='edit-1' className='editting'>Edit</button>
                    </Form.Row>
                    <h5>Email</h5>
                    <Form.Row className="align-items-center">
                        <Col xs={4}>
                            <input type="email" placeholder="email address" name="mail" onChange={this.handleChange} value={this.state.data['mail']} disabled={this.state.email_disabled} className='form-control' />
                        </Col>
                        <button onClick={this.enableEdit} type='button' id='edit-2' className='editting'>Edit</button>
                    </Form.Row>
                    <Form.Row className='mt-5 justify-content-start'>
                        <Col xs='auto'>
                            <Button type="submit" disabled={this.state.save_disabled} className="rst-btn">Save Changes</Button>
                        </Col>
                        <Col xs='auto'>
                            <Button type="reset" className="rst-btn">Reset</Button>
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        )
    }

    componentDidMount() {
        const login_token = localStorage.getItem('auth_token');
        if(login_token) {
            this.setState({'user': login_token, 'profile': true})
        }
        const email = localStorage.getItem('user_mail');
        if(email) {
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

export default connect(mapStateToProps,actions)(GeneralSettings);