import { combineReducers } from 'redux';

export const users = (state={}, action) => {
    console.log("ACTION", action);

    switch(action.type) {
        // case 'GET_USERS' : {
        //     return {...state, list: action.payload}
        // }
        
        case 'ADD_USER' : {
            return {...state}
        }

        default: {
            return state;
        }
    }

}
export default combineReducers({
    users
})