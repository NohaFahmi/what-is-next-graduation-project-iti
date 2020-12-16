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

class Community extends Component {
  render() {
    return (
      <Container>
        <div className="comm-container">
          <Row>
            <Col lg={3}>
              <div className="progress-card"></div>
            </Col>
            <Col lg={5}>
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
            <Col lg={3}>
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
}

export default Community;
