/* eslint-disable jsx-a11y/alt-text */
import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import { Divider } from 'antd';
import userAvatar from '../../assets/user.svg';
import { EditOutlined } from '@ant-design/icons'
import Files, { ImageCropper } from "react-butterfiles";


class GeneralSettings extends Component {

    constructor() {
        super();
        this.state = {
            name_disabled: true,
            email_disabled: true,
            save_disabled: true,
            data: {

            },
            cropper: true,
            files: [],
            errors: [],
        }

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
        data[e.target.name] = e.target.value

        this.setState({ data })

        if (e.target.name === 'image') {
            // console.log(e.target.files)
            //todo: handle upload photo and save to server!
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let data = this.state.data
        data['firstName'] = this.props.basic_data.firstName
        data['lastName'] = this.props.basic_data.lastName
        data['mail'] = this.props.basic_data.mail

        this.setState({
            data
        })

        this.props.getData(this.state.data);

    }
    render() {

        return (
            <div className="Content-container">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row className='align-items-end'>
                        <div className="settings-avatar">


           
                            {/* <img src={userAvatar} alt="user-avatar" /> */}
                        </div>
                        <Form.Group>
                            <input id="account-pic" type='file' name='image' className='form-file' onChange={this.handleChange} />
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

        // console.log("DATAAAA", this.props.basic_data);
        // let data = this.state.data
        // data['f_name'] = this.props.basic_data[0].f_name
        // data['l_name'] = this.props.basic_data[0].l_name
        // data['email'] = this.props.basic_data[0].email

        // this.setState({
        //     data
        // })

        // this.props.getData(this.state.data);

    }
}


export default GeneralSettings;