import './welcome.css';
import onlineCourses from '../../assets/online-courses-illustration.jpg';
import { Divider, Menu, Select, Button, Alert} from 'antd';
// import { Dropdown, DropdownButton, ButtonGroup , Button} from 'react-bootstrap'
import { CaretDownOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Loading from './../loading/loading';
import { withRouter } from "react-router-dom";

const { Option } = Select;
class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            disable: true,
            careerSelected: "",
            trackSelected: "",
            career_id: "",
            // redirect: "/roadmap"
            user_id: "",
            user: "",
            profile: false,
            career_id: 0
        }
    }

    saveTrackWithUser = ({user_id, listOfCareers}, career_name) => {
        let id;
        if(listOfCareers) {
            listOfCareers.career.map( (career) => {
                if(career.careerName === career_name) {
                    id = career._id;
                    localStorage.setItem('career_id', user_id.user[0]._id)

                }
            })
        }
        localStorage.setItem('user_id', user_id.user[0]._id)
        return {
           user: {
                   _id: user_id.user[0]._id,
                   step:0
                }
           ,
           career: id
        }
    } 

    //update state with career
    handleCareer = (e) => {
        this.setState({careerSelected: e, disable: false});
    }
    //update state with track
    handleTrack = (e) => {
        this.setState({trackSelected: e});
    }

    redirectToTarget = () => {
        this.props.history.push('/tabs/roadmap')
    }

    handleSubmitTrack = (e) => {
        const auth_token = localStorage.getItem("auth_token");
        if(auth_token) {
            if(this.state.careerSelected && this.state.trackSelected) {
                this.props.join_track_with_user(this.saveTrackWithUser(this.props, this.state.careerSelected));
                this.redirectToTarget();
                localStorage.setItem('track_selected', this.state.trackSelected);
                localStorage.setItem('careerSelected', this.state.careerSelected);
            } else {
                console.log('select a track!')
            }
        } else {
            console.log('not signed!!');
            this.props.history.push('/signup')          
        }
    }

    //render careers in first dropdown
    renderCareers = ({listOfCareers}) => {
        if(listOfCareers) {
            return listOfCareers.career.map( (career, index) => {
                // console.log(career)
                return <Option key={career._id} id={'option-' + index} value={career.careerName}>{career.careerName}</Option>
            })
        }
        return <Loading />
    }

    renderTracks = ({listOfCareers}) => {
        if(listOfCareers) {

            return listOfCareers.career.map( (career) => {
                if(career) {
                    if(career.careerName === this.state.careerSelected) {
                        return career.track.map( (item_track, index) => {
                            
                            // console.log('TRACKS', tracks)
                            return <Option key={item_track._id} id={'track-' + index} value={item_track.trackName}>{item_track.trackName}</Option>
                        })
                    }
                }               
            })
        }
        return <Loading />
    }
    
    render() {

        return (

            <div className="row m-5 align-items-center">
                <div className="text-side m-4 col">
                    <h2>Learning Paths</h2>
                    <h3>Find your path. Start your journey.</h3>
                    <p>Our Recommended learning paths are for everyone who wishes to advance their career or even starting new one.</p>
                    <div className="dropdowns">
                        {/*  career dropdown*/}
                        <Select defaultValue="Careers" style={{ width: 170, height: 48 }} bordered={true} onChange={this.handleCareer} size='large'>
                            <Option value="Careers" disabled>Careers</Option>
                            {this.renderCareers(this.props)}
                            
                        </Select>
                    
                        {/*  tracks dropdown*/}
                        <Select defaultValue="Tracks" style={{ width: 170, height: 48 }} bordered={true} disabled={this.state.disable} size='large' onChange={this.handleTrack}>
                            <Option value="Tracks" disabled>Tracks</Option>
                            {this.renderTracks(this.props)}                            
                        </Select>
                       
                       <Button  size='large' className='go-btn' onClick={this.handleSubmitTrack}>GO</Button>
                    </div>

                </div>
                <div className="img-side col">
                    <img className="img-side" alt='img' src={onlineCourses} />
                </div>

            </div>



        );
    }

    componentDidMount() {
        this.props.getAllCareers();
        const email = localStorage.getItem('user_mail');
        if(email) {
        
            this.props.get_full_user_info(email);

        }
    }
   

    
}

const mapStateToProps = (state) => {
    // console.log("USERS STATE", state.users.user_info.user[0]._id);
   return {
       listOfCareers: state.careers.listOfCareers,
       user_id: state.users.user_info,
   }
}
export default connect(mapStateToProps, actions)(withRouter(Welcome));

