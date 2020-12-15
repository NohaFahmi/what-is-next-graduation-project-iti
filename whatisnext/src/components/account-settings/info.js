import { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import {DatePicker, Input } from 'antd';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
// CountryRegionData
class Info extends Component {

    constructor() {
        super();
        this.state = {
            country: '',
            region: '',
            info: {

            },
            save_disabled: true,
            bio: ""
        };

        // const userInfo = this.props.userInfo[0];
    }
    
    onChange = (date, dateString) => {
        this.setState({save_disabled: false});
        let d = new Date(date).getFullYear();
        let c = new Date().getFullYear();
        // console.log(c - d);
        let info = this.state.info;
        info["age"] = c - d;
        this.setState({info});
    }

    handleChange = (e) => {

        this.setState({save_disabled: false});
        if(e.target.id === 'user-bio') {
            this.setState({bio: e.target.value})
        }
        let info = this.state.info;
        info[e.target.name] = e.target.value;
        this.setState({info});
        

    }

    selectCountry(val) {
        this.setState({ country: val, save_disabled: false });
    }

    selectRegion(val) {
        this.setState({ region: val, save_disabled: false });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("info", this.state.info);
        let data = {
            age: this.state.info.age,
            gender: this.state.info.gender,
            location: {
                country: this.state.country,
                city: this.state.region
            },
            bio: this.state.bio
        }
        this.props.getData(data);
    }
    render() {
        return(
            <div className="Content-container">
                                <form onSubmit={this.handleSubmit}>
                                    <h5>About You</h5>
                                    <Form.Row className="mt-4">
                                        <Col xs={5}>
                                            <textarea className="form-control" placeholder="Tell Us More About yourself" id='user-bio' name="bio" onChange={this.handleChange}/>
                                        </Col>
                                    </Form.Row>
                                    <h5>Gender</h5>
                                    <Form.Row className="mt-4">
                                        <Col xs={3}>
                                            <select className="form-control" onChange={this.handleChange} name="gender">
                                                <option >Male</option>
                                                <option>Female</option>
                                            </select>
                                        </Col>
                                    </Form.Row>
                                    <h5>Date of birth</h5>
                                    <Form.Row className="mt-4">
                                        <DatePicker onChange={this.onChange} style={{ marginLeft: '10px', width: '30%' }} name="age"/>
                                    </Form.Row>
                                    <h5>Location</h5>
                                    <Form.Row className="mt-4">
                                        <Col xs='auto'>
                                            <div>
                                                <CountryDropdown
                                                    value={this.state.country}
                                                    onChange={(val) => this.selectCountry(val)} style={{ height: "40px", margin: "0 10px 0 0", padding: '10px', outline: 'none', borderRadius: '5px', borderColor: 'lightgrey' }} />
                                                <RegionDropdown
                                                    country={this.state.country}
                                                    value={this.state.region}
                                                    onChange={(val) => this.selectRegion(val)} style={{ height: "40px", padding: '10px', outline: 'none', borderRadius: '5px', borderColor: 'lightgrey' }} />
                                            </div>
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
        // console.log(this.props.user_info);
        // let data = {
        //     age: this.state.info.age,
        //     gender: this.state.info.gender,
        //     location: {
        //         country: this.state.country,
        //         city: this.state.region
        //     },
        //     bio: this.state.bio
        // }
        // this.props.getData(data);
    }

    componentDidUpdate() {
       
    }
}

export default Info;