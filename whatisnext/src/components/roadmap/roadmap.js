import './roadmap.css';
import React, { Component } from 'react';
import { Divider, Progress } from 'antd'
import { CaretRightOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import *as actions from '../../actions';
import { createFromIconfontCN } from '@ant-design/icons';
//components
import Tasks from './tasks';
import Stepper from './stepper';


//IconFont
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2266437_vrwdft9uwzj.js',
});

class Roadmap extends Component {

    constructor() {
        super();
        this.state = {
            checked_btn: "",//store the checked step id 
            disabled: true,
            checked: false, //for disable all steps before starting
            visible_task: false, //to check task is visible
            percent: 0, //to indicate the progress
            current: 0, //to indicate the current step
            done: true, //to check the done step in progress bar
        }
        console.log("ROADMAP", this.props)

    }
    //handle check that step is done!
    handleMarkedCompleted = (e) => {
        // console.log("CHECKED", e.target.checked);
        // console.log("REF", e.target.id);
        this.setState({
            checked_btn: e.target.id,
            visible_task: e.target.checked,
            checked: e.target.checked,
            done: true,
        });
        //if checkbox is checked
        if (e.target.checked) {
            this.next(); //increase the current value
            this.increase(this.props); //increase the main progress
            // console.log("next");

        } else {
            this.prev(); // decrease the current value
            // console.log("prev");
        }
        //how to keep this element marked as done???????
        /* this.setState((prev) => {
            return {
                ...prev,
                done: true,
                selected: prev.checked_btn
            }
        }) */
    }
    /**-------------------------------------------------- */
    next = () => {
        this.setState({ current: this.state.current + 1 })
    }

    prev = () => {
        this.setState({ current: this.state.current - 1 })
    }

    increase = ({ steps }) => {
        console.log("CURRENT", this.state.current)
        this.setState({ percent: Math.floor((((this.state.current + 1) * 100) / steps.length)) })
    }

    /**-------------------------------------------------- */

    //function handling the start button
    handleStart = (e) => {
        // console.log("Started!");
        this.setState({ disabled: false });//enable all checkboxes
    }
    //function handling displaying the main progress circe after start btn pressed
    renderCircularProgress = () => {

        return (<Progress type="circle" percent={this.state.percent} strokeColor={'#1FB46B'} strokeWidth={12} />)
    }

    //render all the steps number on the left and the track steps coming from database
    renderStepsWrapper = ({ steps }) => {

        if (steps) {
            return steps.map((step) => {
                return (
                    <div key={`main-${step.id}`}>
                        <div className="step-wrapper">
                            {(this.state.disabled)? <div className='step-num undone'><span>{step.index}</span></div>
                             : 
                            ((this.state.visible_task) && (this.state.checked_btn === 'check-' + step.id) && (this.state.checked)) ? <div className='step-num current'><span><IconFont type='icon-currentlocation' /></span></div> : <div className='step-num done'><span>{step.index}</span></div>
                            }

                            {/* {(this.state.disabled) ?
                                (<div className='step-num undone'><span>{step.index}</span></div>) :
                            ((this.state.visible_task) && (this.state.checked_btn === 'check-' + step.id)) ?
                                (<div className='step-num done'><span>{step.index}</span></div>) :
                            ((this.state.visible_task) && (this.state.checked)) ?
                                (<div className='step-num current'><span><IconFont type='icon-currentlocation' /></span></div>) :
                                (<div className='step-num undone'><span>{step.index}</span></div>)
                            }
                             */}
                            <div className='step-details'>
                                <div className="details">
                                    <h6 className="main">{step.title.main}</h6>
                                    <p className="sub">{step.title.sub}</p>
                                    <p className="time">Estimated Time: {step.time}</p>
                                </div>
                                <div className='icon'>
                                    <label htmlFor={`check-${step.id}`}>mark as Completed</label>
                                    <input type="checkbox" onChange={(e) => this.handleMarkedCompleted(e, step)} id={`check-${step.id}`} className="check-box" disabled={this.state.disabled} />

                                </div>
                            </div>

                            {/* -------toggle tasks ------*/}
                            {(this.state.visible_task && (step.tasks.length > 0) && (this.state.checked_btn === 'check-' + step.id)) && <Tasks tasks={step.tasks} id={step.id} state={this.state} />}

                        </div>

                        <Divider type="vertical" className="line" orientation='left' />
                    </div>
                );
            })
        }

        return <p>Roadmap is Loading</p>
    }
    render() {
        return (
            <div className="roadmap-container">

                <div className="progress-container">
                    <div className="start" >
                        {(this.state.disabled) && <button className="start-btn" onClick={this.handleStart}>Start <CaretRightOutlined className="start-icon" /></button>}

                        {((!this.state.disabled)) ? this.renderCircularProgress() : ''}

                    </div>
                </div>
                <div className='step-container'>
                    <Stepper current={this.state.current}/>
                    
                    <div className="roadmap">
                        {this.renderStepsWrapper(this.props)}
                    </div>

                </div>

            </div>

        )
    }

    componentDidMount() {
        // console.log(this.state.checked);
        // console.log('PROPS', this.props);
        //get all steps from API
        this.props.getRoadmap();//calling the action to get api data
        // this.handleMarkedCompleted()
        // console.log("DONE",this.state.done)
        // console.log("selected",this.state.selected)


    }

}

const mapStateToProps = (state) => {
    // console.log('STATE', state.roadmap.steps);
    return {
        steps: state.roadmap.steps,
    }
}
export default connect(mapStateToProps, actions)(Roadmap);

