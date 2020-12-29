import { combineReducers } from 'redux';
import { careers } from './careers';
import { users } from './users';

export default combineReducers({
    
    careers: careers,
    users: users
   
})