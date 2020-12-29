import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import './community.css';

import {
  PictureOutlined,
  PushpinOutlined,
  LikeOutlined,
  DislikeOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import avatar from "../../assets/l60Hf.png";
import image from '../../assets/career-cover.jpg'
import { Steps } from 'antd';
import Loading from './../loading/loading';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom';

const { Step } = Steps;

class Community extends Component {

  constructor() {
    super()

    this.state = {
        current: 0,
  }

  }


  renderSteps = ({listOfTracks}) => {
    if(listOfTracks) {
      let track = listOfTracks.filter((track) => track.trackName === localStorage.getItem('track_selected'))
      return track[0].course.map((course_item, index) => {
            return (<Step title={course_item.courseName} key={'step-' + course_item._id} status={(this.state.current === (index)) ? 'process' : (this.state.current > (index)) ? 'finish' : 'wait'} description={(this.state.current === (index)) ? 'onGoing' : (this.state.current >(index)) ? 'done' : 'wait'}/>)
        })
    }
    
    return <Loading />
}
  render() {
    if (localStorage.getItem('auth_token')) {
      return (
        <Container>
          <div className="comm-container">
            <Row>
              <Col lg={3}>
                {/* <div className="progress-card"> */}
                <div className="user-current-progress">
                          <div className="current-progress">
                              <h5>Your Progress</h5>
                              <Steps current={this.state.current} onChange={this.onChange} direction="vertical">
                                  
                                  {this.renderSteps(this.props)}
                              </Steps>
                          </div>
  
                      </div>
                {/* </div> */}
              </Col>
              <Col lg={5} style={{paddingTop: '20px'}}>
                <div className="what-new">
                  <p>What's in your mind?</p>
  
                  <div>
                    <PictureOutlined className="pic-icon" />
                    <PushpinOutlined className="pin-icon" />
                    <input type="button" value="Share" />
                  </div>
                </div>
                {/*************************** NEWS TEXT ******************************/}
                <div className="news">
                  <div className="img">
                    <img src={avatar} alt="avatar" />
                    <div>
                      <b>User Name</b>
                      <p>Frontend developer</p>
                    </div>
                  </div>
                  <p className="news-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry bla typesetting industry text of the
                    printing and typesetting{" "}
                    <div className="post-img">
                    <img src={image} alt='post'/>
                    </div>
                  </p>
                  <div className="hr-line">
                    <hr />
                  </div>
                  <div className="news-icons">
                    <LikeOutlined className="news-like" />
                    <DislikeOutlined className="news-dislike" />
                    <QuestionCircleOutlined className="news-qs" />
                  </div>
                  {/*************************** NEXT NEWS TEXT ******************************/}
                  <div className="img">
                    <img src={avatar} alt="avatar" />
                    <div>
                      <b>User Name</b>
                      <p>Frontend developer</p>
                    </div>
                  </div>
                  <p className="news-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry bla typesetting industry text of the
                    printing and typesetting{" "}
                  </p>
                  <div className="hr-line">
                    <hr />
                  </div>
                  <div className="news-icons">
                    <LikeOutlined className="news-like" />
                    <DislikeOutlined className="news-dislike" />
                    <QuestionCircleOutlined className="news-qs" />
                  </div>
                  {/*************************** NEXT NEWS TEXT WITH IMAGE ******************************/}
                  <div className="img">
                    <img src={avatar} alt="avatar" />
                    <div>
                      <b>User Name</b>
                      <p>Frontend developer</p>
                    </div>
                  </div>
                  <p className="news-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry {" "}
                    <div className="post-img">
                    <img src={image} alt='post-img'/>
                    </div>
                    
                  </p>
                  <div className="hr-line">
                    <hr />
                  </div>
                  <div className="news-icons">
                    <LikeOutlined className="news-like" />
                    <DislikeOutlined className="news-dislike" />
                    <QuestionCircleOutlined className="news-qs" />
                  </div>
                </div>
                {/* END OF NEWS TEXT */}
              </Col>
              <Col lg={3} style={{paddingTop: '20px'}}>
                <div className="tags">
                  {/* <a>#HTML#CSS#JAVASCRIPT</a> */}
                  <div>
                    <span>#HTML#CSS#JAVASCRIPT#JQUERY</span>
                    <br />
                    <span>#BOOTSTRAP#JQUERY#ES6#REACT</span>
                    <br />
                    <span>#FRONTENDDEVELOPMENT</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      );
    }
     else {
      return <Redirect to='/signup' />
    }
    
  }

  componentDidMount() {
    const careerSelected = localStorage.getItem('careerSelected');
    this.props.getTracks(careerSelected);
    const current = localStorage.getItem('current_step');
    if(current) {
      this.setState({current: current});
    }
} 
}

const mapStateToProps = (state) => {
  // console.log('STATE', state.careers.tracks);
  return {
    listOfTracks: state.careers.tracks
  }
}

export default connect(mapStateToProps, actions)(Community);
