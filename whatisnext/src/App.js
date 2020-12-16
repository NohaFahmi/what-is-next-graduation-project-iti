//routing
import {BrowserRouter,Route} from 'react-router-dom'
import Signup from './containers/SignUp/signUp';
import React, { Component } from 'react';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import  promiseMiddleware  from 'redux-promise';

//reducer
import reducers from './reducers';

//components
import Footer from './components/Footer/footer.js';
import Index from './components/Index';
import Nav from './components/Navbar/navbar.js';
import Resources from './components/resources/resource.js'
import SecondNav from './components/secondNav/second-nav'
import Tabs from './components/tabs/tabs.js'
import Roadmap from './components/roadmap/roadmap';
import Community from './components/community/community.js'
import Settings from './components/account-settings/setting';
import Profile from './components/profile/profile';
import CareerInformation from "./components/career-information/careerInformation";

//1. create store
const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);

class App extends Component {
  constructor(){
    super()
    this.state = {
      profile:false
    }
  }
  render() {
    return (
      <div>
           <Provider store={createStoreWithMW(reducers)}>
             <BrowserRouter>
               <Nav/>
               <Route exact path="/" component={Index}/>
               <Route path="/signup" component={Signup}/>
               <Route path="/resources" component={Resources}/>
               <Route path="/nav2" component={SecondNav}/>
               <Route path="/tabs" component={Tabs}/>
               <Route path="/roadmap" component={Roadmap}/>
               <Route path="/community" component={Community}/>
               <Route path="/settings" component={Settings}/>
               <Route path="/profile" component={Profile}/>
               <Route exact path="/careerinformation" component={CareerInformation} />

               <Footer/>
             </BrowserRouter>  
           </Provider>
      </div>
    );
  }
}

export default App;
