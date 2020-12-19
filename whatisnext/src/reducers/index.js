import { combineReducers } from 'redux';
import { users } from './users';
import {roadmap} from './roadmap'
import {samples} from './samples'
import {careers} from './careers'

export default combineReducers({
    users: users,
    roadmap: roadmap,
    samples: samples,
    careers: careers
})