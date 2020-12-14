import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import SecondNav from '../secondNav/second-nav.js'
import Resources from '../resources/resource.js'

class Tabs extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                <SecondNav/>
                <Route path="/resources" component={Resources}/>
                </BrowserRouter>
                
            </div>
        );
    }
}

export default Tabs;