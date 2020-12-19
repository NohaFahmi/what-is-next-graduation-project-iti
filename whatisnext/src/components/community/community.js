import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./community.css";
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

const { Step } = Steps;

class Community extends Component {

  constructor() {
    super()

    this.state = {
        current: 0,
  }

  }


  renderSteps = ({steps}) => {
    if(steps) {
        return steps.map( (step, index) => {
            return (<Step title={step.courseName} key={"step-" + index + 1} status={(this.state.current === (index)) ? 'process' : (this.state.current > (index)) ? 'finish' : 'wait'} description={(this.state.current === (index)) ? 'onGoing' : (this.state.current >(index)) ? 'done' : 'wait'}/>)
        })
    }
    
    return <Loading />
}
  render() {
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
                  <img src={image} />
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
                  <img src={image} />
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

  componentDidMount() {
    // console.log(this.props)
    const selectedTrack = localStorage.getItem('selectedTrack');
        const selectedCareer = localStorage.getItem('selectedCareer');
        this.setState({'user_track': selectedTrack, 'user_career': selectedCareer});

        this.props.getRoadmap(selectedCareer, selectedTrack);
        const curr = localStorage.getItem('current-user-step');
        if(curr) {
        
          this.setState({'current': curr})

        }

    // this.props.getRoadmap();//calling the action to get api data
    // this.props.getSamples();
} 
}

const mapStateToProps = (state) => {
  // console.log('STATE', state.samples.samples);
  return {
      // users: state.users.user_data,
      // all_user_data: state.users.all_user_data,
      steps: state.roadmap.steps,
      // samples: state.samples.samples
  }
}

export default connect(mapStateToProps, actions)(Community);
