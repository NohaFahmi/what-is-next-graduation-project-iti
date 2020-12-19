//routing
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Signup from './containers/SignUp/signUp';
import React, { Component } from 'react';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import  promiseMiddleware  from 'redux-promise';

//reducer
import reducers from './reducers';

//components
import Index from './components/Index';
import Navigation from './components/navbar/navbar';
import Resources from './components/resources/resource'
import SecondNav from './components/secondNav/second-nav'
import Tabs from './components/tabs/tabs'
import Roadmap from './components/roadmap/roadmap';
import Community from './components/community/community'
import Settings from './components/account-settings/setting';
import Profile from './components/profile/profile';
import CareerInformation from "./components/career-information/careerInformation";
import Footer from './components/footer/footer';
// import RedirectToSignup from './components/redirectToSignup';
import { Redirect } from 'react-router-dom';
import Login from './containers/SignUp/login';

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

    const LoginContainer = () => (
      <div>
        <Route path='/' render={() => {
          <Redirect to='/signup' />
        }} />
        <Route path='/signup' component={Signup} />
      </div>
    )

    // const DefaultContainer = () => (
    //   <div>
         
    //   </div>
              
    // )
    return (
      <div>
           <Provider store={createStoreWithMW(reducers)}>
             <BrowserRouter>
             

             <Navigation/>

              <Switch>
                <Route exact path="/" component={Index}/>
                <Route path="/signup" component={Signup}/>
                {/* <Route component={RedirectToSignup} /> */}
                <Route path="/tabs/resources" component={Resources}/>
                <Route path="/nav2" component={SecondNav}/>
                <Route path="/tabs" component={Tabs}/>
                <Route path="/tabs/roadmap" component={Roadmap}/>
                <Route path="/tabs/community" component={Community}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/profile" component={Profile}/>
                <Route exact path='/(signup)' component={LoginContainer} />

                <Route exact path="/careerinformation/:career" component={CareerInformation} />
               

                {/* <Route component={DefaultContainer} /> */}
              </Switch>
              <Footer/>
               
             </BrowserRouter>  
           </Provider>
      </div>
    );
  }
}

export default App;
