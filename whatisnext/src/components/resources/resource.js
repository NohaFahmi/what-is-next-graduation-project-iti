import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import './resource.css'
import { Card } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
// import SecondNav from '../secondNav/second-nav.js'
import Loading from './../loading/loading';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { Link } from 'react-router-dom';
class Resources extends Component {
    constructor() {
        super()
        this.state = {
            titles: []
        }

    }

   
    renderResources = ({steps}) => {
        if(steps) {
            return steps.map( (step) => {
                // console.log(step.length)
                return step.resource.map((r, courseName) => {

                    // console.log(courseName);
                    return (
                        <div className="res-card">
                            <Card
                                hoverable
                                style={{ width: 330 }}
                                cover={<img alt="resource-cover" src='https://i.pcmag.com/imagery/roundups/047l7lS9i8mIMvZ6Z2rwXI5-1..1569492807.jpg' />} >

                                <h5>{r.resourceName}</h5>
                                {/* <h6>mm</h6> */}
                                <hr />
                                <div className="res-details">
                                    <a href=' '>{r.estimatedTime}</a> <a href=' '>{r.price}</a>
                                    <a  href={r.link} target="_blank" className='button'>Start <ArrowRightOutlined /></a>
                                </div>
                            </Card>
                        </div>
                    )
                })
            })

        }

        return <Loading />
    }

    
    render() {

        return (
            <Container className="res-card">

                {this.renderResources(this.props)}
            </Container>

        );
    }

    componentDidMount() {
        // this.renderHeader(this.props)

        const selectedTrack = localStorage.getItem('selectedTrack');
        const selectedCareer = localStorage.getItem('selectedCareer');
        this.setState({'user_track': selectedTrack, 'user_career': selectedCareer});

        this.props.getRoadmap(selectedCareer, selectedTrack);
        // this.getResources(this.props);
        document.querySelector('#first-navbar').style.display = 'block'
    }

}

const mapStateToProps = (state) => {
    // console.log('RESOURCES DATA', state);
    return {
        // resources: state.roadmap.resources,
        steps: state.roadmap.steps,
    }
}
export default connect(mapStateToProps, actions)(Resources);

