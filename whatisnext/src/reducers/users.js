export const users = (state={}, action) => {
    console.log('ACTION', action);
    switch(action.type) {
        case 'LOGIN' : 
            return {...state, authentication_token: action.payload.message}
        
        case 'SIGNUP': 
            return {...state, confirm_signup: action.payload}

        case 'GET_ALL_USER_INFO':
            return {...state, user_info: action.payload}
        
        case 'UPDATE_USER_DATA':
            return {...state, new_data: action.payload}

        case 'JOIN_TRACK_WITH_USER':
            return {...state, user_track: action.payload.message}

        case 'UPDATE_USER_CAREER':
            return {...state, user_career: action.payload}

        case 'GET_USERS_CAREERS':
            return {...state, all_user_careers: action.payload.message}

        default:
            return {...state}
    }
    
}