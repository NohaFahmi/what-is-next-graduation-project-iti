import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './profile.css';
import { Col, Row } from 'react-bootstrap';
import { Steps, Tabs } from 'antd'
import Task from './task-card';
import { PlusOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons'
import ModalForm from './form-modal';
import Loading from './../loading/loading';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Step } = Steps;
const { TabPane } = Tabs;
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            current: 0,
            sample_type: ""
        }
    }

    
    //rendering steps
    renderSteps = ({listOfTracks}) => {
        if(listOfTracks) {
          let track = listOfTracks.filter((track) => track.trackName === localStorage.getItem('track_selected'))
          return track[0].course.map((course_item, index) => {
                return (<Step title={course_item.courseName} key={'step-' + course_item._id} status={(this.state.current === (index)) ? 'process' : (this.state.current > (index)) ? 'finish' : 'wait'} description={(this.state.current === (index)) ? 'onGoing' : (this.state.current >(index)) ? 'done' : 'wait'}/>)
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
            {(this.props.user_data) ? 
                <div className="profile-header">
                    <div className="bio-container">
                        <Row className="bio-row">
                            <Col>
                                <p className="bio">{this.props.user_data.user[0].bio}</p>
                            </Col>
                        </Row>
                        
                        <Row className="justify-content-between mt-5">
                        {/* {this.props.all_user_data.location} */}
                            <Col xs='auto'><p className="location">{this.props.user_data.user[0].location.country}, {this.props.user_data.user[0].location.region}</p></Col>
                            <Col xs='auto'>
                            
                                <div className="social-icons">
                                    <a href={this.props.user_data.user[0].socialLinks.github} className='github'><GithubOutlined style={{ color: '#24292e', marginLeft: '10px' }} /></a>
                                    <a href={this.props.user_data.user[0].socialLinks.linkedin} className='linkedin'><LinkedinOutlined style={{ color: '#0073b1', marginLeft: '15px' }} /> </a>
                                    <a href={this.props.user_data.user[0].socialLinks.twitter} className='twitter'><TwitterOutlined style={{ color: '#1da1f2', marginLeft: '10px' }} /></a>
                                </div>
                            </Col>
                        </Row>

                                
                    </div>

                    <div className="profile-avatar-container">
                        <Row className="justify-content-center"><h3>{this.props.user_data.user[0].firstName} {this.props.user_data.user[0].lastName}</h3></Row>
                        <Row className="justify-content-center"><img src={localStorage.getItem('profile_img')} alt="avatar-img" className="rounded-circle avatar" /></Row>
                    </div>

                </div>
                : 

                <Loading />
                            }
                <div className="profile-body">
                    <div className="user-current-progress">
                        <div className="current-progress">
                            <a href='/tabs/roadmap' className='btn-demo--white'>Back To Roadmap</a>
                            <h5>Your Progress</h5>
                            <Steps current={this.state.current} onChange={this.onChange} direction="vertical">
                                
                                {this.renderSteps(this.props)}
                            </Steps>
                        </div>

                    </div>

                    <div className="user-tasks-container">

                        <Tabs type='card' size='large' tabBarExtraContent={<span className='add-task'> Add New Task <button type="button" className="upload-btn" data-toggle="modal" data-target="#addForm"><PlusOutlined /></button></span>}>
                            <TabPane tab="Task Samples" key="1" animated={{ inkBar: true, tabPane: true }}>
                                <div className="uploaded-tasks-container" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">
                                {/* check if sample_type = 'task' */}
                                    <Task />
                                    <Task />
                                    <Task />
                                </div>

                            </TabPane>
                            <TabPane tab="Project Samples" key="2" animated={{ inkBar: true, tabPane: true }}>
                                <div className="uploaded-tasks-container" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">
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
                            <ModalForm allSteps={this.props.listOfTracks} current ={this.state.current} addNewSample={this.props.addSample} sendType={this.getSampleType}/>

                        </div>
                    </div>
                </div>


            </div>
        )
    }

    componentDidMount() {
        AOS.init()
        const careerSelected = localStorage.getItem('careerSelected');
        this.props.getTracks(careerSelected);
        const current = localStorage.getItem('current_step');
        if(current) {
          this.setState({current: current});
        }
        const email = localStorage.getItem('user_mail');
        if(email) {
            this.props.get_full_user_info(email);
            

        }
    } 
    }
    
    const mapStateToProps = (state) => {
    //   console.log('STATE', state.users.user_info);
      return {
        listOfTracks: state.careers.tracks,
        user_data: state.users.user_info
      }
    }

export default connect(mapStateToProps, actions)(Profile);