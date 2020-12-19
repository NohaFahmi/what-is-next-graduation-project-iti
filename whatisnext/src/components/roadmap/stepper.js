import {Steps} from 'antd'
import { connect } from 'react-redux';

const Stepper = (props) => {
    // console.log(props);

    const {current}  = props;

    //get AntDesign steps
    const { Step } = Steps;
    //function handling displaying the steps progress bar 
    const generateSteps = ({steps}) => {
        if (steps) {
            return steps.map((step) => {
                return (
                    <Step description='' className="stepper" key={"stepper" + step._id} />
                );
            })
        }
    }
    return (
        <div className="bar-steps">
            <Steps direction="vertical" current={current}>
                {generateSteps(props)}
            </Steps>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log('STATE', state.roadmap.steps);
    return {
        steps: state.roadmap.steps,
    }
}
export default connect(mapStateToProps)(Stepper);