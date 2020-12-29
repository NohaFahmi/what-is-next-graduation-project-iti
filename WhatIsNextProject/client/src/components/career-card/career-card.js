import { withRouter } from "react-router-dom";
import { Component } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
// const { Meta } = Card;

class CareerCard extends Component {

  constructor() {
    super();

    this.state = {
      careers: {

      }
    }
  }

  handleClick = (e) => {
    if(this.props.careerData) {
      console.log(this.props.careerData)
      this.props.history.push({
        pathname: `/careerInformation/${this.props.careerData.careerName}`,
        state: { career_id:  this.props.careerData._id }
      })
    }
    
  }

  render() {

    return (

      <div class="card" style={{width: "320px", cursor: 'pointer'}} onClick={this.handleClick} data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-out-in">
        <img class="card-img-top" src={this.props.careerData.careerImage} alt={this.props.careerData.careerName} width='100%' height='215' style={{borderRadius: '5px 5px 0 0'}}/>
        <div class="card-body">
          <h5 class="card-title">{this.props.careerData.careerName}</h5>
        </div>
      </div>
      
    );
  }
  componentDidMount() {
    AOS.init()
  }
}


export default withRouter(CareerCard);