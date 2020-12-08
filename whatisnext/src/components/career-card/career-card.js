import {Card} from 'antd'
// import {Card} from 'react-bootstrap'
import careerCover from '../../assets/career-cover.jpg';
const CareerCard = () => {
    const {Meta} = Card;

    return(
        
          <Card
            hoverable
            style={{ width: 320 }}
            cover={<img alt="career-cover" src={careerCover} />} className="card-item">
            <Meta title="Software Engineering" />
          </Card>
        // <Card style={{ width: '350px', height: '300px'}}>
        //     <Card.Img variant="top" src={careerCover} />
        //     <Card.Body>
        //         <Card.Title>Software Engineering</Card.Title>
        //     </Card.Body>
        // </Card>

    );
}


export default CareerCard;