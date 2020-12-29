import Welcome from "./../welcome/welcome"
import Explore from "./../explore/explore"
import AboutUs from './../about-us/about-us';
import Features from './../features/features'

const Index = () => {
    return (
        <div>
            <Welcome />
            <Explore />
            <Features />
            <AboutUs />
        </div>
        
    )
}

export default Index;