import React, { Component } from 'react';
import './resources.css';
import { Container } from 'react-bootstrap';
import { Card } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import Loading from './../loading/loading';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { Redirect } from 'react-router-dom';

class Resources extends Component {
    constructor() {
        super()
        this.state = {
            titles: []
        }

    }


    renderResources = ({ listOfTracks }) => {
        if (listOfTracks) {
            let track = listOfTracks.filter((track) => track.trackName === localStorage.getItem('track_selected'))

            return track[0].course.map((course_item) => {
                return course_item.resource.map((res) => {
                    return (
                        <div className="res-card" key={res._id}>
                            <Card
                                hoverable
                                style={{ width: 330 }}
                                cover={<img alt="resource-cover" src='https://i.pcmag.com/imagery/roundups/047l7lS9i8mIMvZ6Z2rwXI5-1..1569492807.jpg' />} >

                                <h5>{res.resourceName}</h5>
                                <hr />
                                <div className="res-details">
                                    <a href=' '>{res.estimatedTime}</a> <a href=' '>{res.price}</a>
                                    <a href={res.link} target="_blank" rel='noreferrer' className='button'>Start <ArrowRightOutlined /></a>
                                </div>
                            </Card>
                        </div>
                    )
                })
            })

        }
        return <Loading />

        //     
        // })


    }
    render() {
        if (localStorage.getItem('auth_token')) {
            return (
                <Container className="res-card">
                    {this.renderResources(this.props)}
                </Container>
            )
        } else {
            return <Redirect to='/signup' />
        }
        
    }

    componentDidMount() {
        const careerSelected = localStorage.getItem('careerSelected');
        this.props.getTracks(careerSelected);
    }
}

const mapStateToProps = (state) => {
    // console.log('RESOURCES DATA', state);

    return {
        listOfTracks: state.careers.tracks
    }

}

export default connect(mapStateToProps, actions)(Resources);
