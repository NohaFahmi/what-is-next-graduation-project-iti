import React, { Component } from 'react';
import Explore from '../explore/explore';
import WelcomeSection from '../welcome/welcome';
import Features from '../features/features';
import AboutUs from '../about-us/about-us';

class Index extends Component {
    render() {
        return (
            <div>
                <WelcomeSection />
               <Explore />
               <Features />
               <AboutUs />
            </div>
        );
    }
}

export default Index;