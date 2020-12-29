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
      careers: {}
    }
  }

  renderCardsCareers = ({listOfCareers}) => {
    if(listOfCareers) {
      // console.log(careersList.career)
      return listOfCareers.career.map( (career) => {
        return <CareerCard careerData={career} key={career._id} />

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
    this.props.getAllCareers();

  }
  
};

const mapStateToProps = (state) => {
  // console.log('INFOrmation',state.careers.listOfCareers);
  return {
    listOfCareers: state.careers.listOfCareers,
  }
}
export default connect(mapStateToProps, actions)(withRouter(Explore));
