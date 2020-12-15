export const users = (state={}, action) => {
    console.log("ACTION", action.type);

    switch(action.type) {        
        case 'ADD_USER' : {
            return {...state}
        }

        case 'GET_USER_DATA': {
            return {...state, user_data: action.payload}
        }
        case 'UPDATE_USER_DATA': {
            return {...state, all_user_data: action.payload}
        }

        default: {
            return {...state};
        }
    }

}