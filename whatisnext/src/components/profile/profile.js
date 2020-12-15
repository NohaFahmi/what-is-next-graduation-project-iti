import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './profile.css';
import { Col, Row } from 'react-bootstrap';
import avatarPic from "../../assets/user.svg"
import { Button } from 'react-bootstrap';
import { Steps, Button as Btn, Divider } from 'antd'
import Task from './task-card';
const { Step } = Steps;

class Profile extends Component {

    constructor() {
        super();

        this.state = {
            current: 0
        }
    }

    /* next = () => {
        this.setState({ current: this.state.current + 1 });
    };

    prev = () => {
        this.setState({ current: this.state.current - 1 });
    }; */
    render() {
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <div className="bio-container">
                        <Row className="w-50">
                            <Col>
                                <p className="bio">Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-between">
                            <Col xs='auto'><p className="location">Egypt, Cairo</p></Col>
                            <Col xs='auto'><p className="social-icons">social media icons</p></Col>
                        </Row>
                    </div>

                    <div className="profile-avatar-container">
                        <Row className="justify-content-center"><h4>Noha M.</h4></Row>
                        <Row className="justify-content-center"><img src={avatarPic} alt="avatar-img" className="rounded-circle avatar" /></Row>
                    </div>


                </div>

                <Row className="profile-body justify-content-between">
                    <Col className="user-current-progress" xs={3}>
                        <Steps current={this.state.current} onChange={this.onChange} direction="vertical">
                            <Step title="Step 1" description="This is a description." />
                            <Step title="Step 2" description="This is a description." />
                            <Step title="Step 3" description="This is a description." />
                        </Steps>
                    </Col>
                    <Col className="user-tasks-container" xs={8}>
                        <Button type="button" className="float-right">Upload</Button>
                        <Divider />
                        <div className="uploaded-tasks-container">
                            <Task />
                        </div>
                    
                    </Col>
                </Row>


            </div>
        )
    }

    componentDidMount() {
        console.log(this.props)
    }
}

const mapStateToProps = (state) => {
    console.log('STATE', state);
    return {
        users: state.users.user_data,
        all_user_data: state.users.all_user_data
    }
}

export default connect(mapStateToProps, actions)(Profile);