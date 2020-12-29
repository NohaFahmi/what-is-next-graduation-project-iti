//routing
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import React from 'react';
//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
//reducer
import reducers from './reducers'
//components
import Navbar from './components/navbar/navbar'
import SignUp from './components/signup/signUp';
import Login from './components/signup/login';
import Index from './components/index/index';
import Roadmap from './components/roadmap/roadmap';
import SecondNav from './components/secondNav/second-nav';
import Tabs from './components/tabs/tabs';
import Resources from './components/resources/resources';
import Community from './components/community/community';
import Profile from './components/profile/profile';
import Settings from './components/account-settings/setting';
import Footer from './components/Footer/footer';
import CareerInformation from './components/career-information/careerInformation';


//create store
const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);

const App = (props) => {
  const isLogin = props.isLogin
  console.log('APP PROPS', props)
 
  return (

    <Provider store={createStoreWithMW(reducers)}>

      <BrowserRouter>
         {(isLogin)? <Navbar /> : null}
        <Switch>
        
          <Route exact path="/" component={Index}/>
          <Route path="/home" component={Index}/>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login}/>
          <Route path="/nav2" component={SecondNav}/>
          <Route path="/tabs" component={Tabs}/>
          <Route path="/tabs/roadmap" component={Roadmap}/>
          <Route path="/tabs/resources" component={Resources}/>
          <Route path="/tabs/community" component={Community}/>
          <Route path="/profile/:id" component={Profile}/>
          <Route path="/settings" component={Settings}/>
          <Route exact path="/careerInformation/:career" component={CareerInformation} />
        </Switch>
        <Footer/>
        
      </BrowserRouter>

    </Provider>

  );
}

export default App;
