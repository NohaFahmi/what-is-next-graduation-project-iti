export const users = (state={}, action) => {
    console.log("ACTION", action.type);

    switch(action.type) {        
        case 'ADD_USER' : {
            return {...state}
        }

        case 'GET_USER_DATA': {
            return {...state, login_info: action.payload}
        }
        case 'GET_FULL_DATA': {
            return {...state, userById: action.payload}
        }
        case 'UPDATE_STATUS': {
            return {...state, userStatus: action.payload}
        }
        case 'UPDATE_USER_CAREER': {
            return {...state, user_career: action.payload}
        }
        case 'GET_ALL_USER_INFO': {
            return {...state, all_user_info: action.payload.user[0]}
        }
        case 'GET_ALL_USER_CAREER': {
            return {...state, all_user_career: action.payload.message}
        }
        case 'UPDATE_USER': {
            return {...state, update: action.payload}   
        }
        default: {
            return {...state};
        }
    }

}