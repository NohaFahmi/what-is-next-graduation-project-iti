import React, {Component} from "react";
import "./second-nav.css";
import { Col, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Loading from './../loading/loading';
class SecondNav extends Component {
  renderImg = ({listOfTracks}) => {
    if(listOfTracks) {
      return listOfTracks.map( (track) => {
        if(track.trackName === localStorage.getItem('track_selected')) {
          return <img
                  src={track.trackImage}
                  alt="nav-header"
                />
        }
      
    })
  }
  return <Loading />
  }
  render() {
    
    return ( 
      <div className="second-nav">

      {this.renderImg(this.props)}
        
        <div class="subject">{localStorage.getItem('track_selected')}</div>
        <div className="tabs">
          <Row style={{ margin: "0" }}>
            <Col style={{ border: "2px solid white" }} lg={4}>
              <Link to="/tabs/roadmap" style={{ color: "white" }}>
                Roadmap
              </Link>
            </Col>
            <Col style={{ border: "2px solid white" }} lg={4}>
                
            <Link to="/tabs/resources" style={{ color: "white" }}>
                Resources
              </Link>
            </Col>
            <Col style={{ border: "2px solid white" }} lg={4}>
              <Link to="/tabs/community" style={{ color: "white" }}>Community</Link>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
  componentDidMount() {
    let careerName = localStorage.getItem('track_selected');
    if(careerName) {
    
      this.props.getTracks(careerName);

    }

  }
}

const mapStateToProps = (state) => {
  console.log('Career', state.careers.tracks)
  return {
    listOfTracks: state.careers.tracks
  }
}
export default connect(mapStateToProps, actions)(SecondNav);
