import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './profile.css';
import { Col, Row } from 'react-bootstrap';
import avatarPic from "../../assets/avatar.jpg"
import { Steps, Tabs } from 'antd'
import Task from './task-card';
import { PlusOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'
import ModalForm from './form-modal';
import Loading from './../loading/loading';

const { Step } = Steps;
const { TabPane } = Tabs;
class Profile extends Component {

    constructor() {
        super();

        this.state = {
            current: 5,
            sample_type: ""
        }
    }

    
    //rendering steps
    renderSteps = ({steps}) => {
        if(steps) {
            return steps.map( (step) => {
                return (<Step title={step.title.main} key={"step-" + step.index} status={(this.state.current === step.index) ? 'process' : (this.state.current > step.index) ? 'finish' : 'wait'} description={(this.state.current === step.index) ? 'onGoing' : (this.state.current > step.index) ? 'done' : 'wait'}/>)
            })
        }
        
        return <Loading />
    }

    //to do: get sample from aPI

    getSampleType = (type) => {
        this.setState({sample_type: type});
    }

    renderAllSamples = ({samples}) => {
        //map on samples coming from api
    }

    render() {
        
        return (
            <div className="profile-container">
                <div className="profile-header">
                    <div className="bio-container">
                        <Row className="bio-row">
                            <Col>
                                <p className="bio">Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer Iam a developer</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-between mt-5">
                            <Col xs='auto'><p className="location">Egypt, Cairo</p></Col>
                            <Col xs='auto'><div className="social-icons">
                                <a href=' ' className='github'><GithubOutlined style={{ color: '#24292e', marginLeft: '10px' }} /></a>
                                <a href=' ' className='linkedin'><LinkedinOutlined style={{ color: '#0073b1', marginLeft: '15px' }} /> </a>
                                <a href=' ' className='twitter'><TwitterOutlined style={{ color: '#1da1f2', marginLeft: '10px' }} /></a>
                            </div></Col>
                        </Row>
                    </div>

                    <div className="profile-avatar-container">
                        <Row className="justify-content-center"><h3>Noha M.</h3></Row>
                        <Row className="justify-content-center"><img src={avatarPic} alt="avatar-img" className="rounded-circle avatar" /></Row>
                    </div>

                </div>

                <div className="profile-body">
                    <div className="user-current-progress">
                        <div className="current-progress">
                            <h5>Your Progress</h5>
                            <Steps current={this.state.current} onChange={this.onChange} direction="vertical">
                                
                                {this.renderSteps(this.props)}
                            </Steps>
                        </div>

                    </div>

                    <div className="user-tasks-container">

                        <Tabs type='card' size='large' tabBarExtraContent={<span className='add-task'> Add New Task <button type="button" className="upload-btn" data-toggle="modal" data-target="#addForm"><PlusOutlined /></button></span>}>
                            <TabPane tab="Task Samples" key="1" animated={{ inkBar: true, tabPane: true }}>
                                <div className="uploaded-tasks-container">
                                {/* check if sample_type = 'task' */}
                                    <Task />
                                    <Task />
                                    <Task />
                                </div>

                            </TabPane>
                            <TabPane tab="Project Samples" key="2" animated={{ inkBar: true, tabPane: true }}>
                                <div className="uploaded-tasks-container">
                                {/* check if sample_type = 'project' */}

                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />
                                    <Task />

                                </div>
                            </TabPane>
                        </Tabs>

                        <div class="modal fade" id="addForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <ModalForm allSteps={this.props.steps} current ={this.state.current} addNewSample={this.props.addSample} sendType={this.getSampleType}/>

                        </div>
                    </div>
                </div>


            </div>
        )
    }

    componentDidMount() {
        // console.log(this.props)
        this.props.getRoadmap();//calling the action to get api data
        this.props.getSamples();
    }   
}

const mapStateToProps = (state) => {
    console.log('STATE', state.samples.samples);
    return {
        users: state.users.user_data,
        all_user_data: state.users.all_user_data,
        steps: state.roadmap.steps,
        samples: state.samples.samples
    }
}

export default connect(mapStateToProps, actions)(Profile);