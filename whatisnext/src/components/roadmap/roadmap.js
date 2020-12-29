import './roadmap.css';
import React, { Component } from 'react';
import { Divider, Progress } from 'antd'
import { CaretRightOutlined} from '@ant-design/icons';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { createFromIconfontCN } from '@ant-design/icons';
//components
import Loading from '../loading/loading';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Redirect } from 'react-router-dom';
// ..

//IconFont
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2266437_vrwdft9uwzj.js',
});

class Roadmap extends Component {

    constructor() {
        super();
        this.state = {
            user_track: '',
            user_career: '',
            clicked: false,
            started: false,
            percent: 0, //to indicate the progress
            current: 0,
            // shadow: '-5px 3px 1px ' + (Math.floor(Math.random() * colors.length))
        }

    }

    /**-------------------------------------------------- */
    increase = ({ listOfTracks }, i) => {
        if(listOfTracks) {
            return listOfTracks.map((track) => {
                if (track.trackName === localStorage.getItem('track_selected')) {
                    return this.setState({percent: Math.floor(((i+1) * 100) / (track.course.length))})
                }
            })
        }
    }
    
    /**-------------------------------------------------- */
    //handle check that step is done!
    updateCurrentStep = (e) => {
        let index = e.target.id.split('-')
        this.setState({current: parseInt(index[2]) + 1})
        this.increase(this.props, parseInt(index[2]))
    }
    //function handling the start button
    handleStart = (e) => {
        console.log("Started!");
        this.setState({started: true});
    }
    //function handling displaying the main progress circe after start btn pressed
    renderCircularProgress = () => {

        return (<Progress type="circle" percent={this.state.percent} strokeColor={'#1FB46B'} strokeWidth={12} />)
    }
    handleSave = () => {
        //update user career with step
        let data = {
            user: {
                    _id: localStorage.getItem('user_id'),
                    step:this.state.current
                 }
            ,
            career: localStorage.getItem('career_id')
         }
         if(!this.state.clicked) {
            this.props.join_track_with_user(data)
            this.setState({clicked: true})
         }
         this.handleUpdateUserData(this.props, data)
         localStorage.setItem('current_step', this.state.current);
         localStorage.setItem('current_progress', this.state.percent);

    }
    handleUpdateUserData = ({user_career_id}, info) => {
        if(user_career_id) {
            this.props.update_user_career(info, user_career_id._id)
        }
    }

    getUserCareerById = ({all_users_careers, user_career_id}) => {
        if(all_users_careers && user_career_id) {
            all_users_careers.map((user_career) => {
                if(user_career._id === user_career_id._id) {
                    return this.setState({current: user_career.user[0].step})
                }
            })
        }
    }
 
    //render all the steps number on the left and the track steps coming from database
    renderStepsWrapper = ({ listOfTracks }) => {
        if (listOfTracks) {
            return listOfTracks.map((track) => {
                if (track.trackName === localStorage.getItem('track_selected')) {
                    return track.course.map((step_course, index) => {
                        return (
                            <div key={step_course._id}>
                                <div className="step-wrapper" id={'step-' + step_course._id}>
                                {/* toggle done and undone */}
                                    {(index+1 <= this.state.current) ? <div className='step-num done'><span>{index+1}</span></div> : (index+1 === (this.state.current + 1)) ? <div className='step-num current'><span><IconFont type='icon-currentlocation' /></span></div> : <div className='step-num undone'><span>{index+1}</span></div>
                                    }

                                    

    
                                    <div className='step-details' data-aos="flip-up"  data-aos-duration="400" data-aos-easing="ease-in-out">
                                        <div className='details'>
                                            <h6 className="step-title"><a href=' '>{step_course.courseName}</a></h6>
                                            <p className='step-time'>Estimated Time: {step_course.estimatedTime}</p>
                                        </div>
                                        {/* check button */}
                                        {(!this.state.started) ? <div className='icon'><label htmlFor={'check-box-' + index}>Mark as Completed</label>
                                            <input type='checkbox' data-toggle='collapse' data-target={`.multi-${step_course._id}`} id={'check-box-' + index} aria-controls={`task-${step_course._id}`} onChange={this.updateCurrentStep} disabled/></div> : 

                                            ((index+1 <= this.state.current)) ?  <div className='icon'><label htmlFor={'check-box-' + index}>Done <a href={`#task-${step_course._id}`} data-toggle='collapse' role='button'  aria-controls={`task-${step_course._id}`}>show Tasks</a></label>
                                            <input type='checkbox'  id={'check-box-' + index} checked disabled/></div> : <div className='icon'><label htmlFor={'check-box-' + index}>Mark as Completed</label>
                                            <input type='checkbox' data-toggle='collapse' data-target={`.multi-${step_course._id}`} id={'check-box-' + index} aria-controls={`task-${step_course._id}`} onChange={this.updateCurrentStep}/></div>
                                            }

                                    </div>

                                    {/* -------toggle tasks ------*/}
                                    {(step_course.task.length > 0) ?
                                    <div className={`collapse tasks-visible multi-${step_course._id}`} id={`task-${step_course._id}`}>
                                        <div className="task-details">
                                            <p className="text">Well Done!</p>
                                            <h4>Recommended Tasks</h4>
                                            <div className="tasks-wrapper">
                                             {step_course.task.map((task_item, index) => {
                                                return (
                                                    
                                                        <div className='task' key={task_item._id}>
                                                            <button className="btn btn-primary task-btn" type="button" data-toggle="collapse" data-target={"#task-" + index} aria-expanded="false" aria-controls="collapseExample">
                                                                {task_item.taskName}</button>
                                                            <div className="collapse visible" id={"task-" + index}>
                                                                <p className="card card-body">{task_item.description}</p>
                                                            </div>
                                                        </div>
                                                )
                                            })}
                                            </div>


                                        </div>

                                    </div>
                                    
                                        : null}



                                </div>
                                {
                                    (index  === (track.course.length)) ? '' : <Divider type="vertical" className="line" orientation='left' /> 

                                                                                    

                                }
                            </div>
                        )
                    })
                }
            })
        }

        return <Loading />
    }
    render() {
        if (localStorage.getItem('auth_token')) {
            return (
                <div className="roadmap-container">
    
                    <div className="progress-container">
                        <div className="start" >
                            {(!this.state.started) && (this.state.current === 0) && <button className="start-btn" onClick={this.handleStart}>Start <CaretRightOutlined className="start-icon" /></button>}
    
                            {((this.state.started) || (this.state.current > 0)) ? this.renderCircularProgress() : ''}
    
                        </div>
                    
                        <div className='stp-cont'>
    
                        <button className='save' onClick={this.handleSave}>Save Progress</button>
    
                        </div>
                    </div>
                    <div className='step-container'>
                        
                        <div className="roadmap">
                            
                            {this.renderStepsWrapper(this.props)}
                        </div>
    
                    </div>
    
                </div>
    
            )
        } 
        else {
            return <Redirect to='/signup' />
        }
    }

    componentDidMount() {
        AOS.init();

        const careerSelected = localStorage.getItem('careerSelected');
        this.props.getTracks(careerSelected);
        this.props.getAllUsersCareers();
        if(this.state.clicked) {
            this.getUserCareerById(this.props);
        }
        let percent = localStorage.getItem('current_progress');
        let step = localStorage.getItem('current_step');
        if(percent && step){
            
            this.setState({'started': true, 'current': parseInt(step), 'percent': parseInt(percent)})
        }
    }

}



const mapStateToProps = (state) => {
    // console.log('STATE ROADMAP', state.careers.tracks);

    return {
        listOfTracks: state.careers.tracks,
        user_career_id: state.users.user_track,
        all_users_careers:state.users.all_user_careers
    }
}
export default connect(mapStateToProps, actions)(Roadmap);

