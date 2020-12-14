import React, { Component } from 'react';
import { Container} from 'react-bootstrap';
import './resource.css'
import { Card } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
// import SecondNav from '../secondNav/second-nav.js'
import Loading from './../loading/loading';

class Resources extends Component {
    constructor() {
        super()
        this.state = {
            resources: []
        }

        this.baseURL = "http://localhost:3004/resources"
    }

    render() {
        return (
            <Container className="res-card">
                {this.renderResources(this.state)}
            </Container>

        );
    }

    renderResources({ resources }) {
        if (resources && resources.length > 0) {
            return resources.map((resource) => (
                // <Col lg={4} md={2} xs={1} className="res-card">
                <div className="res-card">
                    <Card
                        hoverable
                        style={{ width: 330 }}
                        cover={<img alt="resource-cover" src={resource.image} />} >

                        <h5>{resource.title}</h5>
                        <h6>{resource.hashtags}</h6>
                        <hr />
                        <div className="res-details">
                            <a href=' '>{resource.time}</a> <a href=' '>{resource.price}</a>
                            <button>Start <ArrowRightOutlined /></button>
                        </div>
                    </Card>
                </div>
                //  </Col>
            ))

        }
        return <Loading />
    }
    componentDidMount() {
        fetch(this.baseURL)
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((body) => {
                this.setState({ resources: body })
                console.log(body)
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default Resources;

