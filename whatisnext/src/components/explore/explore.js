import CareerCard from "../career-card/career-card";
import './explore.css';
import SecondNav from '../secondNav/second-nav.js'

const Explore = () => {
    return(
        <div>
            <SecondNav/>
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
        </div>
        
    );
}


export default Explore;