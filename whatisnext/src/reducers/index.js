import { combineReducers } from 'redux';
import { users } from './users';
import {roadmap} from './roadmap'

export default combineReducers({
    users: users,
    roadmap: roadmap,
})