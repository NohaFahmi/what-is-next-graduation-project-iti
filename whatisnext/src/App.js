import React, { Component } from 'react';
//routing
import {BrowserRouter,Route} from 'react-router-dom'
import Signup from './containers/SignUp/signUp';

//redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import  promiseMiddleware  from 'redux-promise';

//reducer
import reducers from './reducers';

//components
import Footer from './components/Footer/footer';
import Index from './components/Index';
import Nav from './components/Navbar/navbar';
import Resources from './components/Resources/resource'
// import {Container,Col,Row} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

//1. create store
const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);


function App () {
  
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <BrowserRouter>
        <Nav/>
        <Route exact path="/" component={Index}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/resources" component={Resources}/>
        <Footer/>
      </BrowserRouter>  
    </Provider>
  );
}

export default App;
