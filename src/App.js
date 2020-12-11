import React, { Component } from 'react';
import Footer from './components/Footer/footer';
import Index from './components/Index';
import Nav from './components/Navbar/navbar';
import {BrowserRouter,Route} from 'react-router-dom'
import Signup from './containers/SignUp/signUp';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import  promiseMiddleware  from 'redux-promise';

//reducer
import reducers from './reducers';


// import {Container,Col,Row} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

//1. create store
const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);


class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMW(reducers)}>
        <BrowserRouter>
          <Nav/>
          <Route exact path="/" component={Index}/>
          <Route path="/signup" component={Signup}/>
          <Footer/>
        </BrowserRouter>  
      </Provider>
    );
  }
}

export default App;
