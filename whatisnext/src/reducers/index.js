import { combineReducers } from 'redux';
import { users } from './users';
import {roadmap} from './roadmap'
import {samples} from './samples'

export default combineReducers({
    users: users,
    roadmap: roadmap,
    samples: samples
})