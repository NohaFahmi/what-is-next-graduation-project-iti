import './welcome.css';
import onlineCourses from '../../assets/online-courses-illustration.jpg';
import { Divider, Menu, Select, Button } from 'antd';
// import { Dropdown, DropdownButton, ButtonGroup , Button} from 'react-bootstrap'
import { CaretDownOutlined } from '@ant-design/icons'
import { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import Loading from './../loading/loading';
import { withRouter } from "react-router-dom";

const { Option } = Select;
class WelcomeSection extends Component {
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
            profile: false
        }
    }
    saveIdAndCareerID = ({userInfo, careersList}) => {
        if(careersList) {
            return careersList.career.map( (career) => {
                if(career.careerName === this.state.careerSelected) {
                    // console.log(career._id);
                    
                    this.setState({'career_id': career._id});

                }
            })
        }
        
        if(userInfo) {
            // console.log(userInfo._id)
            this.setState({'user_id': userInfo._id});
        }
    }
    handleCareer = (e) => {

        this.setState({careerSelected: e});
        this.setState({disable: false});
        this.saveIdAndCareerID(this.props)
        
    }
    handleTrack = (e) => {

        this.setState({tracksSelected: e});
        this.saveIdAndCareerID(this.props)


    }
    redirectToTarget = () => {
        this.props.history.push('/tabs/roadmap')
    }
    handleClick = (e) => {

        if(this.state.profile) {
            if((this.state.tracksSelected !== undefined )&& (this.state.careerSelected !== undefined)) {
                localStorage.setItem('selectedCareer', this.state.careerSelected);
                localStorage.setItem('selectedTrack', this.state.tracksSelected);
                let info = {
                    career: this.state.career_id,
                    user: [
                        {id: this.state.user_id, step:0}
                    ]
                }
                this.props.UpdateUserCareers(this.state.career_id,info)
                this.redirectToTarget();
            }
        } else {
        
            this.props.history.push('/signup')

        }
        
    }
    renderCareers = ({careersList}) => {
        if(careersList) {
            // console.log(careersList)
            return careersList.career.map( (career, index) => {
                // console.log(career)
                return <Option id={'option-' + index} value={career.careerName}>{career.careerName}</Option>
            })
        }
        return <Loading />
    }

    renderTracks = ({careersList}) => {
        if(careersList) {
            // console.log(this.state.careerSelected)

            return careersList.career.map( (career) => {
                if(career) {
                    if(career.careerName === this.state.careerSelected) {
                        return career.track.map( (tracks, index) => {
                            
                            // console.log('TRACKS', tracks)
                            return <Option id={'track-' + index} value={tracks.trackName}>{tracks.trackName}</Option>
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
                       
                       <Button  size='large' className='go-btn' onClick={this.handleClick}>GO</Button>
                    </div>

                </div>
                <div className="img-side col">
                    <img className="img-side" alt='img' src={onlineCourses} />
                </div>

            </div>



        );
    }

    componentDidMount() {
        this.props.getCareers();
        const user_mail = localStorage.getItem("user_mail");
        // console.log(user_mail)
        if(user_mail) {
        
            this.props.getUserInfo(user_mail);

        }

        const login_token = localStorage.getItem('user_auth');
        if(login_token) {
                    // const user_founded = JSON.parse(login_token);
            this.setState({ 'user': login_token })
            this.setState({'profile': true})
        }
        document.querySelector('#first-navbar').style.display = 'block'

        // console.log(this.state.user_id);
        // this.props.UpdateUserCareers()
    }

    // componentWillUnmount() {
        
    // }
}

const mapStateToProps = (state) => {
    console.log('STATE', state.users);
    return {
        careersList: state.careers.careersList,
        userInfo: state.users.all_user_info
    }
}
export default connect(mapStateToProps, actions)(withRouter(WelcomeSection));

