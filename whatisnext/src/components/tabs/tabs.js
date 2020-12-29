import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SecondNav from "../secondNav/second-nav.js";
import Resources from "../resources/resources.js";
import Roadmap from "../roadmap/roadmap";
// import Community from '../community/community'
import Community from '../community/community';

class Tabs extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <SecondNav />
          <Switch>
          <Route path="/tabs/roadmap" component={Roadmap} />
          <Route path="/tabs/resources" component={Resources} />
          <Route path="/tabs/community" component={Community} />
          </Switch>
          
        </BrowserRouter>
      </div>
    );
  }

  
}

export default Tabs;
