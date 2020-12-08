import careerRoadmaps from '../../assets/career-roadmaps-feature.svg'
import progressTracker from '../../assets/progress-tracker-feature.svg'
import socialCommunity from '../../assets/social-community-feature.svg'
import learningResources from '../../assets/learning-resources-feature.svg'


const FeatureItem = () => {

    const features = [
        {
            title: 'Career Roadmaps',
            description: 'Provide detailed roadmaps for different careers and tracks',
            icon: careerRoadmaps
        },
        {
            title: 'Progress Tracker',
            description: 'Keep tracking your learning progress and feel productivity',
            icon: progressTracker
        },
        {
            title: 'Social community',
            description: 'get help and support by people in a social community',
            icon: socialCommunity
        },
        {
            title: 'Learning Resources',
            description: 'Get recommendations for resources to learn what you want',
            icon: learningResources
        },

    ];
    return (
        features.map( (ft, index) => {
            return(
                <div className="feature-item" key={index}>
                    <img src={ft.icon} alt={ft.title}/>
                    <h5>{ft.title}</h5>
                    <p>{ft.description}</p>
                </div>
            );
        })
        
    );
}

export default FeatureItem;