import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';


class SocialLinks extends Component {
    constructor() {
        super();

        this.state = {
            socialLinks: {

            },
            save_disabled: true
        }
    }

    handleChange = (e) => {
        this.setState({save_disabled: false})
        let socialLinks = this.state.socialLinks
        socialLinks[e.target.name] = e.target.value

        this.setState({ socialLinks });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getData(this.state.socialLinks);
        console.log("Submitted")
    }
    render() {
        return (
            <div className="Content-container">
                <h5>Social Media Links</h5>
                <form onSubmit={this.handleSubmit}>
                    <h5>GITHUB</h5>
                    <Form.Row>
                        <Col xs={4}>
                            <input placeholder="GitHub Link" name="github" onChange={this.handleChange} className="form-control" />
                        </Col>
                    </Form.Row>

                    <h5>LINKEDIN</h5>
                    <Form.Row>
                        <Col xs={4}>
                            <input placeholder="LinkedIn Link" name="linkedin" onChange={this.handleChange} className="form-control" />
                        </Col>
                    </Form.Row>

                    <h5>TWITTER</h5>
                    <Form.Row>
                        <Col xs={4}>
                            <input placeholder="Twitter Link" name="twitter" onChange={this.handleChange} className="form-control" />
                        </Col>
                    </Form.Row>
                    <Form.Row className='mt-5 justify-content-start'>
                        <Col xs='auto'>
                            <Button type="submit" disabled={this.state.save_disabled}>Save Changes</Button>
                        </Col>
                        <Col xs='auto'>
                            <Button type="reset">Reset</Button>
                        </Col>
                    </Form.Row>
                </form>

            </div>
        )
    }

    componentDidMount() {
        // this.props.getData(this.state.socialLinks);
    }
}

export default SocialLinks;