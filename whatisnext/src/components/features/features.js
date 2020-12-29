import FeatureItem from './../feature-item/feature-item';
import './features.css';

const Features = () => {

    return (
        <div className="features-container">
            <h2>Features</h2>
            <div className='features'>
                <FeatureItem />
            </div>

        </div>
    );
}

export default Features;