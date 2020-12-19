import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SecondNav from "../secondNav/second-nav.js";
import Resources from "../resources/resource.js";
import Roadmap from "../roadmap/roadmap.js";
import Community from '../community/community'

class Tabs extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <SecondNav />
          <Route path="/tabs/resources" component={Resources} />
          <Route path="/tabs/roadmap" component={Roadmap} />
          <Route path="/tabs/community" component={Community} />
        </BrowserRouter>
      </div>
    );
  }

  
}

export default Tabs;
