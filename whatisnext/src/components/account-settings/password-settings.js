import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

class PasswordSettings extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            current_pass: '',
            new_pass_disabled: true,
            save_disabled: true,
            valid: true,
            passwords: {

            }
        }
    }

    checkOld = (e) => {
        
        this.setState({current_pass: e.target.value});
        if(this.props.old_password[0].password === e.target.value) {
            this.setState({new_pass_disabled: false, valid: true})
        } else {
            this.setState({new_pass_disabled: true, valid: false})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //todo: validation!
        // console.log(this.state.passwords);
        this.props.getData(this.state.passwords);

    }

    handleChangePassword = (e) => {
        
        this.setState({save_disabled: false});
        
        let passwords = this.state.passwords;
        passwords[e.target.name] = e.target.value;

        this.setState({passwords});

        
    }
    render() {
        // const {password} = this.props.old_password[0]
        const alerts = (this.state.valid) ? "form-control" : "form-control is-invalid"
        // console.log(password)
        return(
            <div className="Content-container">
                                <form onSubmit={this.handleSubmit}>
                                    <h5>Change Your Password</h5>
                                    <Form.Row>
                                        <Col xs={4}>
                                            <input placeholder="Current Password" type="password" className={alerts} onChange={this.checkOld}/>

                                        </Col>
                                    </Form.Row>
                                    <Form.Row className="mt-4">
                                        <Col xs={4}>
                                            <input placeholder="New Password" className="form-control" disabled={this.state.new_pass_disabled} onChange={this.handleChangePassword} id="pass" name="new-password" />

                                        </Col>
                                    </Form.Row>
                                    <Form.Row className="mt-4">
                                        <Col xs={4}>
                                            <input placeholder="Confirm Password" className="form-control" disabled={this.state.new_pass_disabled} onChange={this.handleChangePassword} id="confirm-pass" name="confirm-password"/>

                                        </Col>
                                    </Form.Row>
                                    <Form.Row className='mt-5 justify-content-start'>
                                        <Col xs='auto'>
                                            <Button type="submit" disabled={this.state.save_disabled}>Save Changes</Button>
                                        </Col>
                                        <Col xs='auto'>
                                            <Button type="reset">Reset</Button>
                                        </Col>
                                    </Form.Row>
                                </form>

                            </div>
             
        )
    }

    componentDidMount() {
        // console.log('pass', password)
        // this.props.getData(this.state.passwords);
        
    }
}

export default PasswordSettings;