import {Card} from 'antd'
// import {Card} from 'react-bootstrap'
import careerCover from '../../assets/career-cover.jpg';
import { withRouter } from "react-router-dom";
import {Component} from 'react'

const {Meta} = Card;

class CareerCard extends Component {
    
  constructor() {
    super();

    this.state = {
      careerName: ""
    }
  }
  redirectToTarget = () => {
    this.props.history.push(`/careerinformation`)
  }
  handleClick = () => {
    // this.setState({careerName: this.props.careerTitle})
    this.redirectToTarget();

  }

  render() {
    
    return(
        
      <Card
        hoverable
        style={{ width: 320 }}
        cover={<img alt="career-cover" src={careerCover} />} className="card-item" onClick={this.handleClick}>
        <Meta title={this.props.careerTitle}/>
      </Card>
      // <Card style={{ width: '350px', height: '300px'}}>
      //     <Card.Img variant="top" src={careerCover} />
      //     <Card.Body>
      //         <Card.Title>Software Engineering</Card.Title>
      //     </Card.Body>
      // </Card>

  );
    }

    componentDidMount() {
    
      // this.props.getInformation(this.state.careerName);

    }
    

    
}


export default withRouter(CareerCard);