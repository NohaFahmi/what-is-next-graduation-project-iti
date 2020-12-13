import CareerCard from "../career-card/career-card";
import './explore.css';

const Explore = () => {
    return(
        <div className="careers-container">
            <h2>Explore Careers</h2>
            <div className="cards" id='explore-career'>
                <CareerCard />
                <CareerCard />
                <CareerCard />
                <CareerCard />
                <CareerCard />
                <CareerCard />
            </div>

        </div>
        
    );
}


export default Explore;