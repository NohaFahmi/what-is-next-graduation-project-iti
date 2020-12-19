import CareerCard from "../career-card/career-card";
import "./explore.css";
import Loading from './../loading/loading';
import { withRouter } from "react-router-dom";
// import SecondNav from '../secondNav/second-nav.js'
import { connect } from 'react-redux';
import * as actions from '../../actions'
import {Component} from 'react'
class Explore extends Component {
  
  constructor() {
    super()
    this.state = {
      // careerName: ''
    }
  }


  renderCardsCareers = ({careersList}) => {
    if(careersList) {
      console.log(careersList.career)
      return careersList.career.map( (career) => {
        return <CareerCard careerTitle={career.careerName}/>
      })
  }

  return <Loading />
}
  render() {
    return (
      <div className="careers-container">
        <h2>Explore Careers</h2>
        <div className="cards" id="explore-career">
          
          {this.renderCardsCareers(this.props)}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.getCareers();
    // this.props.getInformation(this.state.careerName);
  }
  
};

const mapStateToProps = (state) => {
  // console.log('INFOrmation',state.careers.careersList);
  return {
      careersList: state.careers.careersList
      // info: state.careers.information
  }
}
export default connect(mapStateToProps, actions)(withRouter(Explore));
